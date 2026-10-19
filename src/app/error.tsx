"use client";

import Link from "next/link";
import { btnPrimary, btnSecondary, container } from "@/lib/ui";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className={`${container} py-24 sm:py-32`}>
      <p className="font-poppins text-sm font-medium text-accent">Algo salió mal</p>
      <h1 className="mt-3 font-poppins text-4xl font-bold tracking-tight sm:text-5xl">No pudimos cargar esta página</h1>
      <p className="mt-5 max-w-xl text-lg text-muted">
        Intenta de nuevo. Si el problema continúa, escríbenos a{" "}
        <a href="mailto:contacto@digicorestudio.com" className="text-accent hover:text-accent-hover">
          contacto@digicorestudio.com
        </a>
        .
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={reset} className={btnPrimary}>
          Intentar de nuevo
        </button>
        <Link href="/" className={btnSecondary}>
          Ir al inicio
        </Link>
      </div>
    </section>
  );
}
