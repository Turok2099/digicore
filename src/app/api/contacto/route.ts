import { NextResponse } from "next/server";
import { sql, initDb } from "@/lib/db";
import { sendLeadNotification } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, correo, tipoNegocio, obstaculo } = body;

    if (!nombre || !correo) {
      return NextResponse.json(
        { error: "El nombre y el correo electrónico son obligatorios." },
        { status: 400 }
      );
    }

    // Asegurar que la estructura de la base de datos esté lista
    await initDb();

    // 1. Guardar primero en Neon Postgres
    await sql`
      INSERT INTO leads (nombre, correo, tipo_negocio, obstaculo)
      VALUES (${nombre}, ${correo}, ${tipoNegocio || null}, ${obstaculo || null})
    `;

    // 2. Enviar notificación por correo mediante Resend
    try {
      await sendLeadNotification({ nombre, correo, tipoNegocio, obstaculo });
    } catch (emailErr) {
      console.error("Error no bloqueante al enviar correo con Resend:", emailErr);
    }

    return NextResponse.json({
      success: true,
      message: "Lead registrado correctamente en la base de datos.",
    });
  } catch (error) {
    console.error("Error al guardar lead en Neon Postgres:", error);
    return NextResponse.json(
      { error: "Error en el servidor al guardar los datos." },
      { status: 500 }
    );
  }
}
