"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  EVENTO_CONSENTIMIENTO,
  gpcActivo,
  guardarDecision,
  leerDecision,
  type Decision,
} from "@/lib/consentimiento";
import { capturarOrigen, persistirOrigenDeSesion } from "@/lib/atribucion";
import { btnPrimary, btnSecondary } from "@/lib/ui";

let gaCargado = false;

/** Carga Google Analytics (una sola vez) y solo después de aceptar. */
function cargarAnalytics(gaId: string) {
  if (gaCargado || !gaId) return;
  gaCargado = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    (window.dataLayer as unknown[]).push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", gaId);
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  document.head.appendChild(s);
}

/**
 * Banner de cookies y medición. Aceptar y Rechazar tienen el mismo peso. Sin decisión no se carga Analytics y el
 * origen de campaña solo vive en la sesión. Se puede cambiar la decisión desde el pie ("Preferencias de cookies").
 */
export default function BannerConsentimiento({ gaId }: { gaId: string | null }) {
  const [visible, setVisible] = useState(false);

  const aplicar = useCallback(
    (d: Decision | null) => {
      if (d === "aceptado") {
        persistirOrigenDeSesion();
        capturarOrigen();
        if (gaId) cargarAnalytics(gaId);
      }
      setVisible(d === null && !gpcActivo());
    },
    [gaId]
  );

  useEffect(() => {
    // Lectura tras la hidratación: el servidor no conoce la decisión.
    const cuadro = requestAnimationFrame(() => aplicar(leerDecision()));
    const alCambiar = () => aplicar(leerDecision());
    window.addEventListener(EVENTO_CONSENTIMIENTO, alCambiar);
    return () => {
      cancelAnimationFrame(cuadro);
      window.removeEventListener(EVENTO_CONSENTIMIENTO, alCambiar);
    };
  }, [aplicar]);

  if (!visible) return null;

  return (
    <section
      aria-labelledby="consentimiento-titulo"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border-strong bg-surface p-4 shadow-lg sm:p-5"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <h2 id="consentimiento-titulo" className="font-poppins text-base font-semibold text-text">
            Cookies y medición
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            Usamos Google Analytics y guardamos de qué anuncio o enlace llegaste para saber qué campañas funcionan.
            Solo si aceptas. Si rechazas, el sitio funciona igual y ese dato se borra al cerrar la pestaña. Más en el{" "}
            <Link href="/aviso-de-privacidad#medicion" className="font-medium text-accent underline underline-offset-2 hover:text-accent-hover">
              aviso de privacidad
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
          <button type="button" onClick={() => guardarDecision("rechazado")} className={`${btnSecondary} min-h-11! px-5! py-2! text-sm!`}>
            Rechazar
          </button>
          <button type="button" onClick={() => guardarDecision("aceptado")} className={`${btnPrimary} min-h-11! px-5! py-2! text-sm!`}>
            Aceptar
          </button>
        </div>
      </div>
    </section>
  );
}
