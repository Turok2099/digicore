// Validación pura (sin base de datos ni red) del cuerpo de POST /api/contacto.
// Todo lo que llega del navegador es no confiable: se valida tipo, formato y longitud en el servidor.

export const PAQUETES: Record<string, string> = {
  presencia: "Presencia",
  profesional: "Profesional",
  crecimiento: "Crecimiento",
  "mayor-alcance": "Proyecto de mayor alcance",
  "ads-marketing": "Ads y marketing digital",
  ecommerce: "Ecommerce",
  "no-se": "Aún no lo sabe",
};

export const SITIO_ACTUAL: Record<string, string> = {
  no: "No tiene página web",
  "si-renovar": "Tiene página web y quiere renovarla",
  "si-ampliar": "Tiene página web y quiere ampliarla",
};

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
/** Valores libres de UTM: letras, números y signos comunes de campañas. Sin saltos de línea ni HTML. */
const UTM_RE = /^[\p{L}\p{N} _.\-+:,/|()%~]{1,150}$/u;
/** Identificadores publicitarios (gclid, gbraid, wbraid): base64url. */
const ID_PUBLICITARIO_RE = /^[A-Za-z0-9_-]{8,255}$/;
const RUTA_RE = /^\/[A-Za-z0-9\-._~/%]{0,150}$/;
const HOST_RE = /^[a-z0-9.-]{1,100}$/i;

export const LIMITES = { cuerpoBytes: 16_000 } as const;

export interface Atribucion {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  gclid: string | null;
  gbraid: string | null;
  wbraid: string | null;
  /** Primera página vista con parámetros de campaña. */
  landing: string | null;
  /** Solo el dominio de la página de referencia, nunca la URL completa. */
  referrer: string | null;
  /** Cuándo se capturó el origen (ISO). */
  capturado_en: string | null;
}

export interface SolicitudValida {
  idSolicitud: string;
  nombre: string;
  correo: string;
  telefono: string;
  profesion: string;
  paquete: string;
  paqueteId: string;
  sitioActual: string;
  mensaje: string;
  pagina: string;
  atribucion: Atribucion;
}

export type Resultado =
  | { tipo: "valida"; datos: SolicitudValida }
  | { tipo: "honeypot" }
  | { tipo: "invalida"; error: string };

function esObjeto(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Texto opcional: ausente/null/"" → "". Un tipo distinto de string es un error. */
function leer(obj: Record<string, unknown>, clave: string, max: number): string | { error: string } {
  const v = obj[clave];
  if (v === undefined || v === null) return "";
  if (typeof v !== "string") return { error: `El campo ${clave} no es válido.` };
  const t = v.trim();
  if (t.length > max) return { error: `El campo ${clave} es demasiado largo.` };
  // Caracteres de control (salvo salto de línea y tabulación) no tienen cabida en estos campos.
  if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(t)) return { error: `El campo ${clave} no es válido.` };
  return t;
}

/** Limpia un valor de atribución: si no cumple el formato se descarta (no bloquea la solicitud). */
function limpio(valor: unknown, re: RegExp): string | null {
  if (typeof valor !== "string") return null;
  const t = valor.trim();
  return re.test(t) ? t : null;
}

export function validarAtribucion(entrada: unknown): Atribucion {
  const a = esObjeto(entrada) ? entrada : {};
  let capturado: string | null = null;
  if (typeof a.capturado_en === "string") {
    const ms = Date.parse(a.capturado_en);
    // Fechas imposibles o en el futuro se descartan.
    if (!Number.isNaN(ms) && ms <= Date.now() + 60_000 && ms > Date.now() - 400 * 86_400_000) {
      capturado = new Date(ms).toISOString();
    }
  }
  return {
    utm_source: limpio(a.utm_source, UTM_RE),
    utm_medium: limpio(a.utm_medium, UTM_RE),
    utm_campaign: limpio(a.utm_campaign, UTM_RE),
    utm_term: limpio(a.utm_term, UTM_RE),
    utm_content: limpio(a.utm_content, UTM_RE),
    gclid: limpio(a.gclid, ID_PUBLICITARIO_RE),
    gbraid: limpio(a.gbraid, ID_PUBLICITARIO_RE),
    wbraid: limpio(a.wbraid, ID_PUBLICITARIO_RE),
    landing: limpio(a.landing, RUTA_RE),
    referrer: limpio(a.referrer, HOST_RE),
    capturado_en: capturado,
  };
}

export function validarSolicitud(body: unknown): Resultado {
  if (!esObjeto(body)) return { tipo: "invalida", error: "Solicitud no válida." };

  // Campo trampa: cualquier valor no vacío indica un bot.
  const trampa = body.sitio_web;
  if (trampa !== undefined && trampa !== null && trampa !== "") return { tipo: "honeypot" };

  const campos = {
    nombre: leer(body, "nombre", 100),
    correo: leer(body, "correo", 254),
    profesion: leer(body, "profesion", 100),
    telefono: leer(body, "telefono", 20),
    mensaje: leer(body, "mensaje", 1000),
    paquete: leer(body, "paquete", 30),
    tiene_web: leer(body, "tiene_web", 20),
    pagina: leer(body, "pagina", 150),
    id: leer(body, "id_solicitud", 40),
  };
  for (const v of Object.values(campos)) {
    if (typeof v === "object") return { tipo: "invalida", error: "Solicitud no válida." };
  }
  const c = campos as Record<keyof typeof campos, string>;

  if (c.nombre.length < 2) return { tipo: "invalida", error: "Escribe tu nombre." };
  if (!EMAIL_RE.test(c.correo)) return { tipo: "invalida", error: "Escribe un correo electrónico válido." };
  if (!c.profesion) return { tipo: "invalida", error: "Indica tu profesión o negocio." };
  if (c.telefono && !/^[\d\s+()-]{7,20}$/.test(c.telefono)) {
    return { tipo: "invalida", error: "El teléfono solo puede llevar números, espacios y + ( ) -." };
  }
  const paqueteId = c.paquete || "no-se";
  if (!Object.hasOwn(PAQUETES, paqueteId)) return { tipo: "invalida", error: "Selecciona un paquete o servicio válido." };
  if (c.tiene_web && !Object.hasOwn(SITIO_ACTUAL, c.tiene_web)) {
    return { tipo: "invalida", error: "Solicitud no válida." };
  }
  if (c.id && !UUID_RE.test(c.id)) return { tipo: "invalida", error: "Solicitud no válida." };
  if (c.pagina && !RUTA_RE.test(c.pagina)) return { tipo: "invalida", error: "Solicitud no válida." };
  if (body.atribucion !== undefined && body.atribucion !== null && !esObjeto(body.atribucion)) {
    return { tipo: "invalida", error: "Solicitud no válida." };
  }

  return {
    tipo: "valida",
    datos: {
      // Sin identificador del cliente (versión antigua en caché) se genera uno: la solicitud se guarda igual.
      idSolicitud: (c.id || crypto.randomUUID()).toLowerCase(),
      nombre: c.nombre,
      correo: c.correo,
      telefono: c.telefono,
      profesion: c.profesion,
      paquete: PAQUETES[paqueteId],
      paqueteId,
      sitioActual: c.tiene_web ? SITIO_ACTUAL[c.tiene_web] : "",
      mensaje: c.mensaje,
      pagina: c.pagina,
      atribucion: validarAtribucion(body.atribucion),
    },
  };
}
