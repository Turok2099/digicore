import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const notificationEmail = process.env.NOTIFICATION_EMAIL || "contacto@digicorestudio.com";
const fromEmail = process.env.FROM_EMAIL || "Digicore Studio <onboarding@resend.dev>";

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

interface ContactLeadData {
  nombre: string;
  correo: string;
  tipoNegocio?: string;
  obstaculo?: string;
}

interface QuizSubmissionData {
  nombre: string;
  correo: string;
  whatsapp: string;
  respuestas: Record<number, string>;
}

export async function sendLeadNotification(data: ContactLeadData) {
  if (!resend) {
    console.warn("RESEND_API_KEY no está configurada. Envío de correo omitido.");
    return;
  }

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; background-color: #0a0b10; color: #ffffff; padding: 28px; border-radius: 16px; max-width: 600px; margin: 0 auto; border: 1px solid #0057FF;">
      <div style="border-bottom: 2px solid #0057FF; padding-bottom: 16px; margin-bottom: 20px;">
        <h2 style="color: #00E5FF; margin: 0; font-size: 24px; font-weight: bold;">🚀 Nuevo Lead de Contacto</h2>
        <p style="color: #a0a0a0; margin-top: 6px; font-size: 14px;">Solicitud recibida desde la plataforma Digicore Studio</p>
      </div>

      <table style="width: 100%; text-align: left; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; color: #888888; font-weight: bold; width: 140px;">Nombre:</td>
          <td style="padding: 10px 0; color: #ffffff; font-size: 16px;"><strong>${data.nombre}</strong></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #888888; font-weight: bold;">Correo:</td>
          <td style="padding: 10px 0; color: #39FF14;"><a href="mailto:${data.correo}" style="color: #39FF14; text-decoration: none; font-weight: bold;">${data.correo}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #888888; font-weight: bold;">Tipo de Negocio:</td>
          <td style="padding: 10px 0; color: #ffffff;">${data.tipoNegocio || "No especificado"}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #888888; font-weight: bold;">Obstáculo Actual:</td>
          <td style="padding: 10px 0; color: #00E5FF; font-weight: bold;">${data.obstaculo || "No especificado"}</td>
        </tr>
      </table>

      <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #1e2029; text-align: center; color: #666666; font-size: 12px;">
        Digicore Studio System Notification • Auto-Generated Email
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [notificationEmail],
      subject: `🔥 Nuevo Lead: ${data.nombre} (${data.tipoNegocio || "Contacto"})`,
      html: htmlContent,
    });
  } catch (error) {
    console.error("Error al enviar correo con Resend:", error);
  }
}

export async function sendQuizNotification(data: QuizSubmissionData) {
  if (!resend) {
    console.warn("RESEND_API_KEY no está configurada. Envío de correo omitido.");
    return;
  }

  const questionLabels: Record<number, string> = {
    1: "¿Sitio web profesional?",
    2: "¿Cómo llegan clientes?",
    3: "¿Ventas/contactos semanales?",
    4: "Tipo de correo",
    5: "Prioridad principales meses",
  };

  const optionLabels: Record<string, string> = {
    lento_anticuado: "Sí, pero es lento o anticuado",
    sin_web: "No tengo sitio web",
    solo_redes: "Solo redes sociales (Instagram / Facebook)",
    boca_a_boca: "Por recomendación o boca a boca",
    redes_sociales: "Por redes sociales",
    sin_flujo: "No tengo un flujo constante de clientes",
    sin_ventas: "No me trae nada de prospectos",
    ocasional: "A veces trae alguno ocasional",
    gmail: "Gmail o correo personal",
    hotmail: "Hotmail / Yahoo personal",
    quiero_corporativo: "Quiero un correo corporativo profesional (@miempresa.com)",
    clientes_google: "Conseguir más clientes por Google sin pagar anuncios eternos",
    automatizar: "Automatizar procesos y ahorrar horas de trabajo",
    vender_online: "Vender mis productos o servicios en línea 24/7",
  };

  const answersList = Object.entries(data.respuestas)
    .map(([qId, val]) => {
      const qText = questionLabels[Number(qId)] || `Pregunta ${qId}`;
      const valText = optionLabels[val] || val;
      return `<li style="margin-bottom: 10px;"><strong style="color: #00E5FF;">${qText}:</strong> <span style="color: #ffffff;">${valText}</span></li>`;
    })
    .join("");

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; background-color: #0a0b10; color: #ffffff; padding: 28px; border-radius: 16px; max-width: 600px; margin: 0 auto; border: 1px solid #39FF14;">
      <div style="border-bottom: 2px solid #39FF14; padding-bottom: 16px; margin-bottom: 20px;">
        <h2 style="color: #39FF14; margin: 0; font-size: 24px; font-weight: bold;">📊 Nuevo Diagnóstico Completado</h2>
        <p style="color: #a0a0a0; margin-top: 6px; font-size: 14px;">Diagnóstico técnico desde Digicore Studio</p>
      </div>

      <table style="width: 100%; text-align: left; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 10px 0; color: #888888; font-weight: bold; width: 140px;">Nombre:</td>
          <td style="padding: 10px 0; color: #ffffff; font-size: 16px;"><strong>${data.nombre}</strong></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #888888; font-weight: bold;">Correo:</td>
          <td style="padding: 10px 0; color: #39FF14;"><a href="mailto:${data.correo}" style="color: #39FF14; text-decoration: none; font-weight: bold;">${data.correo}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #888888; font-weight: bold;">WhatsApp / Tel:</td>
          <td style="padding: 10px 0; color: #00E5FF; font-weight: bold;"><a href="https://wa.me/${data.whatsapp.replace(/\D/g, '')}" style="color: #00E5FF; text-decoration: none;">${data.whatsapp}</a></td>
        </tr>
      </table>

      <div style="background-color: #12141d; padding: 20px; border-radius: 12px; border: 1px solid #1e2029;">
        <h3 style="color: #39FF14; margin-top: 0; font-size: 16px; border-bottom: 1px solid #2a2d3d; padding-bottom: 10px; margin-bottom: 14px;">Respuestas del Quiz Diagnóstico:</h3>
        <ul style="padding-left: 20px; font-size: 14px; margin-bottom: 0;">
          ${answersList}
        </ul>
      </div>

      <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #1e2029; text-align: center; color: #666666; font-size: 12px;">
        Digicore Studio System Notification • Auto-Generated Email
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [notificationEmail],
      subject: `⚡ Nuevo Diagnóstico Quiz: ${data.nombre}`,
      html: htmlContent,
    });
  } catch (error) {
    console.error("Error al enviar correo con Resend:", error);
  }
}
