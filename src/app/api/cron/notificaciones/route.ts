import { NextResponse } from "next/server";
import { reintentarPendientes } from "@/lib/solicitudes";

export const dynamic = "force-dynamic";

/**
 * Reintenta las notificaciones de solicitudes cuyo correo falló. Lo invoca Vercel Cron (vercel.json), que envía
 * `Authorization: Bearer $CRON_SECRET`. Sin CRON_SECRET configurado el endpoint queda cerrado.
 */
export async function GET(req: Request) {
  const secreto = process.env.CRON_SECRET;
  if (!secreto || req.headers.get("authorization") !== `Bearer ${secreto}`) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }
  try {
    return NextResponse.json(await reintentarPendientes());
  } catch (err) {
    console.error("[cron] Fallo al reintentar notificaciones:", err instanceof Error ? err.name : "desconocido");
    return NextResponse.json({ error: "Error al procesar." }, { status: 500 });
  }
}
