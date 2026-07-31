import { NextResponse } from "next/server";
import { sql, initDb } from "@/lib/db";

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

    // Insertar en la tabla quiz_submissions
    await sql`
      INSERT INTO quiz_submissions (nombre, correo, whatsapp, respuestas)
      VALUES (${nombre}, ${correo}, ${whatsapp}, ${respuestasJson})
    `;

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
