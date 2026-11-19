// Registro de solicitudes (fuente de verdad), cola de notificaciones y límite de frecuencia.
// Todo vive en Postgres (Neon): sirve entre instancias serverless y no depende de tareas en segundo plano.
import { createHash } from "node:crypto";
import { sendAgotadasAviso, sendLeadNotification, type AgotadaAviso } from "@/lib/email";
import type { SolicitudValida } from "@/lib/solicitud-schema";

type Sql = typeof import("@/lib/db").sql;

/** Tras guardar, la solicitud queda "reservada" mientras se envía el correo (evita envíos dobles concurrentes). */
const RESERVA_SEGUNDOS = 120;
/** Intentos de notificación antes de marcarla como agotada (queda en la base para revisión manual). */
export const MAX_INTENTOS = 8;

export const LIMITE_MAX = Number(process.env.RATE_LIMIT_MAX) > 0 ? Number(process.env.RATE_LIMIT_MAX) : 5;
export const LIMITE_VENTANA_S =
  Number(process.env.RATE_LIMIT_WINDOW_SECONDS) > 0 ? Number(process.env.RATE_LIMIT_WINDOW_SECONDS) : 600;

let esquemaListo: Promise<void> | null = null;

async function getSql(): Promise<Sql> {
  const { sql } = await import("@/lib/db");
  return sql;
}

/** Crea las tablas una vez por instancia. Si falla, se reintenta en la siguiente petición. */
export function asegurarEsquema(): Promise<void> {
  if (!esquemaListo) {
    esquemaListo = (async () => {
      const sql = await getSql();
      await sql`
        CREATE TABLE IF NOT EXISTS solicitudes (
          id SERIAL PRIMARY KEY,
          id_solicitud UUID NOT NULL UNIQUE,
          nombre VARCHAR(100) NOT NULL,
          correo VARCHAR(254) NOT NULL,
          telefono VARCHAR(20),
          profesion VARCHAR(100) NOT NULL,
          paquete VARCHAR(40) NOT NULL,
          sitio_actual VARCHAR(80),
          mensaje TEXT,
          pagina VARCHAR(150),
          utm_source VARCHAR(150), utm_medium VARCHAR(150), utm_campaign VARCHAR(150),
          utm_term VARCHAR(150), utm_content VARCHAR(150),
          gclid VARCHAR(255), gbraid VARCHAR(255), wbraid VARCHAR(255),
          landing VARCHAR(150), referrer VARCHAR(100),
          atribucion_capturada_en TIMESTAMPTZ,
          notificacion_estado VARCHAR(12) NOT NULL DEFAULT 'pendiente',
          notificacion_intentos INT NOT NULL DEFAULT 0,
          notificacion_proximo_intento TIMESTAMPTZ,
          notificacion_ultimo_error VARCHAR(200),
          notificada_en TIMESTAMPTZ,
          created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
      `;
      await sql`
        CREATE INDEX IF NOT EXISTS solicitudes_pendientes_idx
        ON solicitudes (notificacion_proximo_intento) WHERE notificacion_estado <> 'enviada' AND notificacion_estado <> 'agotada'
      `;
      await sql`
        CREATE TABLE IF NOT EXISTS limite_frecuencia (
          clave VARCHAR(64) NOT NULL,
          ventana BIGINT NOT NULL,
          total INT NOT NULL DEFAULT 0,
          PRIMARY KEY (clave, ventana)
        )
      `;
    })().catch((err) => {
      esquemaListo = null;
      throw err;
    });
  }
  return esquemaListo;
}

type Fila = {
  id: number;
  nombre: string;
  correo: string;
  telefono: string | null;
  profesion: string;
  paquete: string;
  sitio_actual: string | null;
  mensaje: string | null;
  pagina: string | null;
  utm_source: string | null; utm_medium: string | null; utm_campaign: string | null;
  utm_term: string | null; utm_content: string | null;
  gclid: string | null; gbraid: string | null; wbraid: string | null;
  landing: string | null; referrer: string | null;
  atribucion_capturada_en: string | null;
  notificacion_intentos: number;
  id_solicitud: string;
};

/** Texto de origen para el correo: solo los campos presentes. */
export function resumenOrigen(f: Pick<Fila, "pagina" | "utm_source" | "utm_medium" | "utm_campaign" | "utm_term" | "utm_content" | "gclid" | "gbraid" | "wbraid" | "landing" | "referrer" | "atribucion_capturada_en">): string {
  const pares: [string, string | null][] = [
    ["Página del formulario", f.pagina],
    ["utm_source", f.utm_source],
    ["utm_medium", f.utm_medium],
    ["utm_campaign", f.utm_campaign],
    ["utm_term", f.utm_term],
    ["utm_content", f.utm_content],
    ["gclid", f.gclid],
    ["gbraid", f.gbraid],
    ["wbraid", f.wbraid],
    ["Página de entrada", f.landing],
    ["Referencia", f.referrer],
    ["Origen capturado", f.atribucion_capturada_en ? new Date(f.atribucion_capturada_en).toISOString() : null],
  ];
  const texto = pares.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n");
  return texto || "Sin parámetros de campaña (visita directa u orgánica)";
}

export type Guardado = { id: string; nueva: boolean };

/** Busca una solicitud ya guardada con ese identificador (reintento del mismo envío). */
export async function existente(idSolicitud: string): Promise<boolean> {
  const sql = await getSql();
  const r = await sql`SELECT 1 FROM solicitudes WHERE id_solicitud = ${idSolicitud}::uuid`;
  return r.length > 0;
}

/** Inserta la solicitud. Idempotente: el mismo id_solicitud nunca crea una segunda fila. */
export async function guardarSolicitud(d: SolicitudValida): Promise<Guardado> {
  const sql = await getSql();
  const a = d.atribucion;
  const filas = await sql`
    INSERT INTO solicitudes (
      id_solicitud, nombre, correo, telefono, profesion, paquete, sitio_actual, mensaje, pagina,
      utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, gbraid, wbraid,
      landing, referrer, atribucion_capturada_en,
      notificacion_estado, notificacion_proximo_intento
    ) VALUES (
      ${d.idSolicitud}::uuid, ${d.nombre}, ${d.correo}, ${d.telefono || null}, ${d.profesion}, ${d.paqueteId},
      ${d.sitioActual || null}, ${d.mensaje || null}, ${d.pagina || null},
      ${a.utm_source}, ${a.utm_medium}, ${a.utm_campaign}, ${a.utm_term}, ${a.utm_content},
      ${a.gclid}, ${a.gbraid}, ${a.wbraid}, ${a.landing}, ${a.referrer}, ${a.capturado_en}::timestamptz,
      'pendiente', now()
    )
    ON CONFLICT (id_solicitud) DO NOTHING
    RETURNING id
  `;
  return { id: d.idSolicitud, nueva: filas.length > 0 };
}

function retraso(intentos: number): number {
  // 5 min, 15 min, 45 min, 2 h, 6 h... máximo 24 h.
  return Math.min(300 * 3 ** Math.max(0, intentos - 1), 86_400);
}

/**
 * Intenta enviar la notificación de una solicitud. Reserva la fila de forma atómica, así que dos peticiones
 * (o un reintento y el cron) nunca envían el mismo correo a la vez. Nunca lanza.
 * Devuelve true si la notificación quedó enviada.
 */
export async function notificarSolicitud(idSolicitud: string): Promise<boolean> {
  let sql: Sql;
  try {
    sql = await getSql();
  } catch {
    return false;
  }
  try {
    const filas = (await sql`
      UPDATE solicitudes
      SET notificacion_estado = 'enviando',
          notificacion_intentos = notificacion_intentos + 1,
          notificacion_proximo_intento = now() + make_interval(secs => ${RESERVA_SEGUNDOS})
      WHERE id_solicitud = ${idSolicitud}::uuid
        AND notificacion_estado NOT IN ('enviada', 'agotada')
        AND (notificacion_proximo_intento IS NULL OR notificacion_proximo_intento <= now())
      RETURNING *
    `) as unknown as Fila[];
    const f = filas[0];
    if (!f) return false; // Ya enviada, reservada por otra petición o agotada.

    const resultado = await sendLeadNotification(
      {
        nombre: f.nombre,
        correo: f.correo,
        telefono: f.telefono ?? "",
        profesion: f.profesion,
        paquete: f.paquete,
        sitioActual: f.sitio_actual ?? "",
        mensaje: f.mensaje ?? "",
        origen: resumenOrigen(f),
      },
      `solicitud-${f.id_solicitud}`
    );

    if (resultado.ok) {
      await sql`
        UPDATE solicitudes
        SET notificacion_estado = 'enviada', notificada_en = now(), notificacion_ultimo_error = NULL,
            notificacion_proximo_intento = NULL
        WHERE id = ${f.id}
      `;
      return true;
    }

    const agotada = f.notificacion_intentos >= MAX_INTENTOS;
    console.error(
      `[solicitudes] Notificación fallida (solicitud ${f.id}, intento ${f.notificacion_intentos}/${MAX_INTENTOS}): ${resultado.motivo}`
    );
    await sql`
      UPDATE solicitudes
      SET notificacion_estado = ${agotada ? "agotada" : "fallida"},
          notificacion_ultimo_error = ${resultado.motivo.slice(0, 200)},
          notificacion_proximo_intento = now() + make_interval(secs => ${retraso(f.notificacion_intentos)})
      WHERE id = ${f.id}
    `;
    return false;
  } catch (err) {
    console.error("[solicitudes] Error al procesar la notificación:", err instanceof Error ? err.name : "desconocido");
    return false;
  }
}

/** Reintenta notificaciones pendientes o fallidas (las llama el cron). Devuelve el resumen. */
export async function reintentarPendientes(limite = 20) {
  await asegurarEsquema();
  const sql = await getSql();
  const ids = (await sql`
    SELECT id_solicitud FROM solicitudes
    WHERE notificacion_estado NOT IN ('enviada', 'agotada')
      AND (notificacion_proximo_intento IS NULL OR notificacion_proximo_intento <= now())
    ORDER BY created_at
    LIMIT ${limite}
  `) as unknown as { id_solicitud: string }[];
  let enviadas = 0;
  for (const { id_solicitud } of ids) {
    if (await notificarSolicitud(id_solicitud)) enviadas++;
  }
  // Limpieza de ventanas de límite de frecuencia caducadas.
  await sql`DELETE FROM limite_frecuencia WHERE ventana < ${Math.floor(Date.now() / 1000) - 86_400}`;
  const agotadas = await listarAgotadas();
  let avisoAgotadas = false;
  if (agotadas.length > 0) {
    // Alerta estándar: registro en logs (apto para alertas de Vercel) y un resumen por correo con los datos
    // necesarios para atender cada solicitud a mano. Se repite en cada cron hasta que se reactiven o atiendan.
    console.error(
      `[ALERTA] ${agotadas.length} solicitud(es) sin notificar tras ${MAX_INTENTOS} intentos. IDs: ${agotadas.map((a) => a.id).join(", ")}`
    );
    avisoAgotadas = (await sendAgotadasAviso(agotadas, new Date().toISOString().slice(0, 10))).ok;
  }
  return { revisadas: ids.length, enviadas, agotadas: agotadas.length, avisoAgotadas };
}

/** Solicitudes cuya notificación se agotó. Ya están guardadas: solo falta que alguien las atienda. */
export async function listarAgotadas(): Promise<AgotadaAviso[]> {
  const sql = await getSql();
  const filas = (await sql`
    SELECT id, nombre, correo, telefono, paquete, created_at, notificacion_ultimo_error
    FROM solicitudes WHERE notificacion_estado = 'agotada' ORDER BY created_at
  `) as unknown as {
    id: number;
    nombre: string;
    correo: string;
    telefono: string | null;
    paquete: string;
    created_at: string;
    notificacion_ultimo_error: string | null;
  }[];
  return filas.map((f) => ({
    id: f.id,
    nombre: f.nombre,
    correo: f.correo,
    telefono: f.telefono,
    paquete: f.paquete,
    creada: new Date(f.created_at).toISOString(),
    ultimoError: f.notificacion_ultimo_error,
  }));
}

/** Devuelve las agotadas a la cola con el contador en cero (tras corregir la causa, p. ej. dominio o API key). */
export async function reactivarAgotadas(): Promise<number> {
  await asegurarEsquema();
  const sql = await getSql();
  const filas = await sql`
    UPDATE solicitudes
    SET notificacion_estado = 'fallida', notificacion_intentos = 0, notificacion_proximo_intento = now()
    WHERE notificacion_estado = 'agotada'
    RETURNING id
  `;
  return filas.length;
}

// ---------------------------------------------------------------------------------------------------------------
// Límite de frecuencia
// ---------------------------------------------------------------------------------------------------------------

/**
 * IP del visitante. En Vercel la plataforma fija estas cabeceras (el cliente no puede sobrescribirlas), así que
 * solo se confía en ellas cuando el código corre allí. Fuera de Vercel no hay fuente fiable: se agrupa en una
 * clave única, que en local solo sirve para pruebas.
 */
export function ipDelVisitante(req: Request): string {
  if (!process.env.VERCEL) return "sin-plataforma";
  const h = req.headers;
  const ip = h.get("x-vercel-forwarded-for") ?? h.get("x-real-ip") ?? h.get("x-forwarded-for")?.split(",")[0] ?? "";
  return ip.trim().slice(0, 64) || "desconocida";
}

function claveDe(ip: string): string {
  const sal = process.env.RATE_LIMIT_SALT ?? "digicore";
  return createHash("sha256").update(`${sal}:${ip}`).digest("hex").slice(0, 32);
}

export type EstadoLimite = { permitido: true } | { permitido: false; reintentarEnS: number };

/** Ventana fija en Postgres: un UPSERT atómico incrementa el contador, válido entre instancias. */
export async function consumirLimite(ip: string, ahoraS = Math.floor(Date.now() / 1000)): Promise<EstadoLimite> {
  const sql = await getSql();
  const inicio = Math.floor(ahoraS / LIMITE_VENTANA_S) * LIMITE_VENTANA_S;
  const [fila] = (await sql`
    INSERT INTO limite_frecuencia (clave, ventana, total) VALUES (${claveDe(ip)}, ${inicio}, 1)
    ON CONFLICT (clave, ventana) DO UPDATE SET total = limite_frecuencia.total + 1
    RETURNING total
  `) as unknown as { total: number }[];
  if (fila.total <= LIMITE_MAX) return { permitido: true };
  return { permitido: false, reintentarEnS: Math.max(1, inicio + LIMITE_VENTANA_S - ahoraS) };
}
