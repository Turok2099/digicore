import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const notificationEmail = process.env.NOTIFICATION_EMAIL || "contacto@digicorestudio.com";
const fromEmail = process.env.FROM_EMAIL || "Digicore Studio <onboarding@resend.dev>";

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

function esc(valor: string | undefined): string {
  return (valor ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Devuelve true solo si Resend confirma el envío. Nunca lanza. */
export async function sendLeadNotification(data: SolicitudData): Promise<boolean> {
  if (!resend) {
    console.warn("RESEND_API_KEY no está configurada. Envío de correo omitido.");
    return false;
  }

  const fila = (etiqueta: string, valor: string | undefined) =>
    valor
      ? `<tr><td style="padding:8px 0;color:#667085;width:140px;vertical-align:top;">${etiqueta}</td><td style="padding:8px 0;color:#101828;white-space:pre-wrap;">${esc(valor)}</td></tr>`
      : "";

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#101828;">
      <h2 style="margin:0 0 4px;color:#0B0F14;">Nueva solicitud de propuesta</h2>
      <p style="margin:0 0 20px;color:#667085;font-size:14px;">Recibida desde el sitio de Digicore Studio</p>
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
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [notificationEmail],
      replyTo: data.correo,
      subject: `Nueva solicitud de propuesta: ${data.nombre}${data.paquete ? ` (${data.paquete})` : ""}`.replace(/[\r\n]+/g, " "),
      html,
    });

    if (error) {
      console.error("Resend API Error en sendLeadNotification:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Error imprevisto al enviar correo con Resend:", err);
    return false;
  }
}
