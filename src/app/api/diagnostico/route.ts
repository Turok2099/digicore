import { NextResponse } from "next/server";
import { sql, initDb } from "@/lib/db";
import { sendQuizNotification } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, correo, whatsapp, respuestas } = body;

    if (!nombre || !correo || !whatsapp) {
      return NextResponse.json(
        { error: "Nombre, correo y WhatsApp son obligatorios." },
        { status: 400 }
      );
    }

    // Asegurar que la estructura de la base de datos esté lista
    await initDb();

    // Convertir objeto de respuestas a string JSON para la columna JSONB
    const respuestasJson = JSON.stringify(respuestas || {});

    // 1. Guardar primero en Neon Postgres
    await sql`
      INSERT INTO quiz_submissions (nombre, correo, whatsapp, respuestas)
      VALUES (${nombre}, ${correo}, ${whatsapp}, ${respuestasJson})
    `;

    // 2. Enviar notificación por correo mediante Resend
    try {
      await sendQuizNotification({
        nombre,
        correo,
        whatsapp,
        respuestas: respuestas || {},
      });
    } catch (emailErr) {
      console.error("Error no bloqueante al enviar correo con Resend:", emailErr);
    }

    return NextResponse.json({
      success: true,
      message: "Diagnóstico registrado correctamente en la base de datos.",
    });
  } catch (error) {
    console.error("Error al guardar diagnóstico en Neon Postgres:", error);
    return NextResponse.json(
      { error: "Error en el servidor al guardar los datos del diagnóstico." },
      { status: 500 }
    );
  }
}
