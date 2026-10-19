import { Check } from "lucide-react";
import CtaLink from "@/components/ui/CtaLink";
import { btnPrimary, btnSecondary, container, hrefSolicitar, sectionY } from "@/lib/ui";
import { PAQUETES } from "@/lib/paquetes";

interface Props {
  formBase: string;
  /** Muestra el enlace al detalle en /planes (no aplica dentro de /planes). */
  enlaceDetalle?: boolean;
}

export default function Paquetes({ formBase, enlaceDetalle = true }: Props) {
  return (
    <section id="paquetes" className={`${sectionY} scroll-mt-20`}>
      <div className={container}>
        <h2 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">
          Elige el sitio que necesita tu práctica profesional
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Compara el costo inicial, lo que incluye y lo que pagarás después. Los precios son en pesos mexicanos más
          IVA; el dominio se cotiza por separado.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PAQUETES.map((p) => (
            <article
              key={p.id}
              className={`flex flex-col rounded-2xl border bg-surface p-6 sm:p-8 ${
                p.recomendado ? "border-accent" : "border-border"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-poppins text-2xl font-semibold">{p.nombre}</h3>
                {p.recomendado && (
                  <span className="rounded-full border border-accent px-3 py-1 font-poppins text-xs font-semibold text-accent">
                    Recomendado
                  </span>
                )}
              </div>
              <p className="mt-2 text-muted">{p.para}</p>

              <p className="mt-6 font-poppins text-4xl font-bold">
                {p.creacion} <span className="text-base font-medium text-muted">MXN + IVA</span>
              </p>
              <p className="mt-1 text-sm text-muted">
                Creación. Desde el segundo año, renovación de alojamiento y correo: {p.renovacion} + IVA al año.
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {p.resumen.map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-success" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink
                  href={hrefSolicitar(formBase, p.id)}
                  ubicacion="tarjeta_paquete"
                  paquete={p.id}
                  className={btnPrimary}
                >
                  Solicitar {p.nombre}
                </CtaLink>
              </div>
            </article>
          ))}
        </div>

        {enlaceDetalle && (
          <p className="mt-8">
            <CtaLink href="/planes" ubicacion="ver_alcance_completo" className={`${btnSecondary} !min-h-11`}>
              Ver el alcance completo de cada paquete
            </CtaLink>
          </p>
        )}
      </div>
    </section>
  );
}
