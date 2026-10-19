import { NextResponse } from "next/server";
import { sendLeadNotification } from "@/lib/email";

const PAQUETES: Record<string, string> = {
  presencia: "Presencia",
  profesional: "Profesional",
  crecimiento: "Crecimiento",
  "ads-marketing": "Ads y marketing digital",
  ecommerce: "Ecommerce",
  "no-se": "Aún no lo sabe",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function texto(valor: unknown, max: number): string {
  return typeof valor === "string" ? valor.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud no válida." }, { status: 400 });
  }

  // Campo trampa: si un bot lo llena, se responde como éxito sin guardar nada.
  if (texto(body.sitio_web, 200)) {
    return NextResponse.json({ success: true });
  }

  const nombre = texto(body.nombre, 100);
  const correo = texto(body.correo, 254);
  const profesion = texto(body.profesion, 100);
  const telefono = texto(body.telefono, 20);
  const mensaje = texto(body.mensaje, 1000);
  const paquete = PAQUETES[texto(body.paquete, 30)] ?? PAQUETES["no-se"];

  if (nombre.length < 2) {
    return NextResponse.json({ error: "Escribe tu nombre." }, { status: 400 });
  }
  if (!EMAIL_RE.test(correo)) {
    return NextResponse.json({ error: "Escribe un correo electrónico válido." }, { status: 400 });
  }
  if (!profesion) {
    return NextResponse.json({ error: "Indica tu profesión o negocio." }, { status: 400 });
  }
  if (telefono && !/^[\d\s+()-]{7,20}$/.test(telefono)) {
    return NextResponse.json({ error: "El teléfono solo puede llevar números, espacios y + ( ) -." }, { status: 400 });
  }

  const o = (body.origen && typeof body.origen === "object" ? body.origen : {}) as Record<string, unknown>;
  const origen = [
    `pagina=${texto(o.pagina, 100)}`,
    `utm_source=${texto(o.utm_source, 100)}`,
    `utm_medium=${texto(o.utm_medium, 100)}`,
    `utm_campaign=${texto(o.utm_campaign, 150)}`,
    `utm_term=${texto(o.utm_term, 150)}`,
  ].join(" | ");

  // Se reutilizan las columnas existentes de `leads` (sin cambiar el esquema).
  const detalle = [
    `Paquete: ${paquete}`,
    telefono && `Teléfono: ${telefono}`,
    mensaje && `Mensaje: ${mensaje}`,
    `Origen: ${origen}`,
  ]
    .filter(Boolean)
    .join("\n");

  let guardado = false;
  try {
    const { sql, initDb } = await import("@/lib/db");
    await initDb();
    await sql`
      INSERT INTO leads (nombre, correo, tipo_negocio, obstaculo)
      VALUES (${nombre}, ${correo}, ${profesion}, ${detalle})
    `;
    guardado = true;
  } catch (err) {
    console.error("Error al guardar la solicitud en la base de datos:", err);
  }

  const avisado = await sendLeadNotification({ nombre, correo, telefono, profesion, paquete, mensaje, origen });

  // La solicitud no se pierde en silencio: si falla todo, el visitante lo sabe.
  if (!guardado && !avisado) {
    return NextResponse.json(
      { error: "No pudimos registrar tu solicitud. Intenta de nuevo o escríbenos a contacto@digicorestudio.com." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
