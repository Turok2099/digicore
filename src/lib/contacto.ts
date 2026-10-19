// Datos de contacto del estudio. Un solo lugar para el número de WhatsApp.
export const WHATSAPP_NUMERO = "525545210178"; // 52 (México) + 10 dígitos
export const WHATSAPP_VISIBLE = "55 4521 0178";
export const CORREO_CONTACTO = "contacto@digicorestudio.com";

export function whatsappUrl(mensaje = "Hola, quiero solicitar una propuesta de sitio web."): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}
