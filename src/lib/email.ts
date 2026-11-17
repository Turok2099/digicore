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
