import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const notificationEmail = process.env.NOTIFICATION_EMAIL || "contacto@digicorestudio.com";
// Remitente de las notificaciones. Requiere el dominio digicorestudio.com verificado en Resend (SPF/DKIM).
// El destinatario (NOTIFICATION_EMAIL) necesita un buzón real: Resend solo envía, no recibe respuestas.
const fromEmail = process.env.FROM_EMAIL || "Digicore Studio <contacto@digicorestudio.com>";

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export interface SolicitudData {
  nombre: string;
  correo: string;
  telefono?: string;
  profesion?: string;
  paquete?: string;
  sitioActual?: string;
  mensaje?: string;
  origen?: string;
}

export type ResultadoEnvio = { ok: true } | { ok: false; motivo: string };

function esc(valor: string | undefined): string {
  return (valor ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Envía la notificación. Solo devuelve `ok` si Resend lo confirma. Nunca lanza y `motivo` no contiene datos
 * personales. `idempotencia` evita que Resend duplique el correo si se reintenta la misma solicitud.
 */
export async function sendLeadNotification(data: SolicitudData, idempotencia?: string): Promise<ResultadoEnvio> {
  if (!resend) return { ok: false, motivo: "RESEND_API_KEY no configurada" };

  const fila = (etiqueta: string, valor: string | undefined) =>
    valor
      ? `<tr><td style="padding:8px 0;color:#667085;width:140px;vertical-align:top;">${etiqueta}</td><td style="padding:8px 0;color:#101828;white-space:pre-wrap;">${esc(valor)}</td></tr>`
      : "";

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#101828;">
      <h2 style="margin:0 0 4px;color:#0B0F14;">Nueva solicitud de cotización</h2>
      <p style="margin:0 0 20px;color:#667085;font-size:14px;">Recibida desde el sitio de Digicore Studio. Responder a este correo escribe al prospecto.</p>
      <table style="width:100%;border-collapse:collapse;text-align:left;font-size:15px;">
        ${fila("Nombre", data.nombre)}
        ${fila("Correo", data.correo)}
        ${fila("Teléfono", data.telefono)}
        ${fila("Profesión o negocio", data.profesion)}
        ${fila("Servicio o paquete de interés", data.paquete)}
        ${fila("Sitio web actual", data.sitioActual)}
        ${fila("Mensaje", data.mensaje)}
        ${fila("Origen", data.origen)}
      </table>
    </div>
  `;

  try {
    const { error } = await resend.emails.send(
      {
        from: fromEmail,
        to: [notificationEmail],
        // Responder desde el buzón llega al correo ya validado del prospecto.
        replyTo: data.correo,
        subject: `Nueva solicitud de cotización: ${data.nombre}${data.paquete ? ` (${data.paquete})` : ""}`.replace(/[\r\n]+/g, " "),
        html,
      },
      idempotencia ? { idempotencyKey: idempotencia } : undefined
    );
    if (error) return { ok: false, motivo: `Resend: ${error.name ?? "error"}`.slice(0, 100) };
    return { ok: true };
  } catch (err) {
    return { ok: false, motivo: `Excepción: ${err instanceof Error ? err.name : "desconocida"}` };
  }
}

export interface AgotadaAviso {
  id: number;
  nombre: string;
  correo: string;
  telefono: string | null;
  paquete: string;
  creada: string;
  ultimoError: string | null;
}

/** Resumen para el equipo: solicitudes guardadas cuya notificación individual no pudo enviarse tras varios intentos. */
export async function sendAgotadasAviso(items: AgotadaAviso[], dia: string): Promise<ResultadoEnvio> {
  if (!resend) return { ok: false, motivo: "RESEND_API_KEY no configurada" };
  const celda = "padding:6px 8px 6px 0;";
  const filas = items
    .map(
      (i) =>
        `<tr><td style="${celda}">#${i.id}</td><td style="${celda}">${esc(i.creada.slice(0, 16).replace("T", " "))} UTC</td><td style="${celda}">${esc(i.nombre)}</td><td style="${celda}">${esc(i.correo)}</td><td style="${celda}">${esc(i.telefono ?? "")}</td><td style="padding:6px 0;">${esc(i.paquete)}</td></tr>`
    )
    .join("");
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;padding:24px;color:#101828;">
      <h2 style="margin:0 0 8px;">${items.length} solicitud(es) pendiente(s) de atender</h2>
      <p style="color:#667085;font-size:14px;">Están guardadas en la base de datos, pero su aviso individual falló varias veces (último error: ${esc(items[0]?.ultimoError ?? "desconocido")}). Contáctalas a mano. Tras corregir la causa, reactívalas con POST /api/cron/notificaciones.</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;text-align:left;">${filas}</table>
    </div>`;
  try {
    const { error } = await resend.emails.send(
      {
        from: fromEmail,
        to: [notificationEmail],
        subject: `Atención: ${items.length} solicitud(es) sin notificar`,
        html,
      },
      { idempotencyKey: `agotadas-${dia}-${items.map((i) => i.id).join("-")}`.slice(0, 256) }
    );
    return error ? { ok: false, motivo: `Resend: ${error.name ?? "error"}` } : { ok: true };
  } catch (err) {
    return { ok: false, motivo: `Excepción: ${err instanceof Error ? err.name : "desconocida"}` };
  }
}
