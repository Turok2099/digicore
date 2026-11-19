import { NextResponse } from "next/server";
import { reactivarAgotadas, reintentarPendientes } from "@/lib/solicitudes";

export const dynamic = "force-dynamic";

function autorizado(req: Request): boolean {
  const secreto = process.env.CRON_SECRET;
  return Boolean(secreto) && req.headers.get("authorization") === `Bearer ${secreto}`;
}

/**
 * GET: reintenta las notificaciones pendientes o fallidas y, si hay solicitudes "agotadas", registra una alerta y
 * envía un resumen con los datos para atenderlas a mano. Lo invoca Vercel Cron (vercel.json) con
 * `Authorization: Bearer $CRON_SECRET`. Sin CRON_SECRET configurado el endpoint queda cerrado.
 */
export async function GET(req: Request) {
  if (!autorizado(req)) return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  try {
    return NextResponse.json(await reintentarPendientes());
  } catch (err) {
    console.error("[cron] Fallo al reintentar notificaciones:", err instanceof Error ? err.name : "desconocido");
    return NextResponse.json({ error: "Error al procesar." }, { status: 500 });
  }
}

/** POST: devuelve las solicitudes "agotadas" a la cola (después de corregir la causa) y las reintenta. */
export async function POST(req: Request) {
  if (!autorizado(req)) return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  try {
    const reactivadas = await reactivarAgotadas();
    return NextResponse.json({ reactivadas, ...(await reintentarPendientes()) });
  } catch (err) {
    console.error("[cron] Fallo al reactivar notificaciones:", err instanceof Error ? err.name : "desconocido");
    return NextResponse.json({ error: "Error al procesar." }, { status: 500 });
  }
}
