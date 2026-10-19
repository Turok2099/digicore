import type { Metadata } from "next";
import Link from "next/link";
import { btnPrimary, btnSecondary, container } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Página no encontrada | Digicore Studio",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className={`${container} py-24 sm:py-32`}>
      <p className="font-poppins text-sm font-medium text-accent">Error 404</p>
      <h1 className="mt-3 font-poppins text-4xl font-bold tracking-tight sm:text-5xl">No encontramos esa página</h1>
      <p className="mt-5 max-w-xl text-lg text-muted">
        Puede que el enlace haya cambiado o que la dirección esté mal escrita. Estas opciones te llevan a lo
        principal.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={btnPrimary}>
          Ir al inicio
        </Link>
        <Link href="/planes" className={btnSecondary}>
          Ver paquetes y precios
        </Link>
      </div>
    </section>
  );
}
