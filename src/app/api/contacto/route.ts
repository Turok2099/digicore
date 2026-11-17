import { NextResponse } from "next/server";
import { LIMITES, validarSolicitud } from "@/lib/solicitud-schema";
import {
  asegurarEsquema,
  consumirLimite,
  existente,
  guardarSolicitud,
  ipDelVisitante,
  notificarSolicitud,
} from "@/lib/solicitudes";

export const dynamic = "force-dynamic";

/**
 * Contrato de respuesta:
 *  - 200 { success: true, medir: boolean }  solicitud aceptada. `medir` indica si el cliente debe registrar la
 *    conversión: solo es true la primera vez que una solicitud válida queda guardada.
 *  - 400 { error }  datos inválidos · 429 { error, retry_after } límite · 503/500 { error } fallo al guardar.
 * Las respuestas no incluyen datos personales ni detalles internos.
 */
const json = (cuerpo: Record<string, unknown>, status = 200, cabeceras?: HeadersInit) =>
  NextResponse.json(cuerpo, { status, headers: { "Cache-Control": "no-store", ...cabeceras } });

const ERROR_GUARDADO = "No pudimos registrar tu solicitud. Intenta de nuevo en unos minutos o escríbenos a contacto@digicorestudio.com.";

export async function POST(req: Request) {
  if (!(req.headers.get("content-type") ?? "").toLowerCase().includes("application/json")) {
    return json({ error: "Solicitud no válida." }, 415);
  }

  let cuerpo: unknown;
  try {
    const texto = await req.text();
    if (texto.length > LIMITES.cuerpoBytes) return json({ error: "Solicitud no válida." }, 413);
    cuerpo = JSON.parse(texto);
  } catch {
    return json({ error: "Solicitud no válida." }, 400);
  }

  const resultado = validarSolicitud(cuerpo);

  // Bot detectado: respuesta de aceptación sin guardar, sin notificar y sin conversión.
  if (resultado.tipo === "honeypot") return json({ success: true, medir: false });
  if (resultado.tipo === "invalida") return json({ error: resultado.error }, 400);
  const datos = resultado.datos;

  try {
    await asegurarEsquema();

    // Reintento del mismo envío: no crea otra solicitud ni consume cupo; solo reintenta la notificación pendiente.
    if (await existente(datos.idSolicitud)) {
      await notificarSolicitud(datos.idSolicitud);
      return json({ success: true, medir: false });
    }
  } catch (err) {
    console.error("[contacto] Base de datos no disponible:", err instanceof Error ? err.name : "desconocido");
    return json({ error: ERROR_GUARDADO }, 503);
  }

  // Límite de frecuencia. Si el contador falla no se bloquea al visitante: el guardado decide el resultado.
  try {
    const estado = await consumirLimite(ipDelVisitante(req));
    if (!estado.permitido) {
      const minutos = Math.ceil(estado.reintentarEnS / 60);
      return json(
        {
          error: `Recibimos varios envíos desde tu conexión en poco tiempo. Intenta de nuevo en ${minutos} ${minutos === 1 ? "minuto" : "minutos"}.`,
          retry_after: estado.reintentarEnS,
        },
        429,
        { "Retry-After": String(estado.reintentarEnS) }
      );
    }
  } catch (err) {
    console.error("[contacto] No se pudo evaluar el límite de frecuencia:", err instanceof Error ? err.name : "desconocido");
  }

  let nueva: boolean;
  try {
    ({ nueva } = await guardarSolicitud(datos));
  } catch (err) {
    console.error("[contacto] No se pudo guardar la solicitud:", err instanceof Error ? err.name : "desconocido");
    return json({ error: ERROR_GUARDADO }, 503);
  }

  // El correo es solo una notificación: si falla, la solicitud ya está guardada y queda marcada para reintento.
  await notificarSolicitud(datos.idSolicitud);

  return json({ success: true, medir: nueva });
}
