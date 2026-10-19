import { ArrowRight, Check } from "lucide-react";
import CtaLink from "@/components/ui/CtaLink";
import { btnPrimary, btnSecondary, container, hrefSolicitar } from "@/lib/ui";
import { PAQUETES, PRECIO_INICIAL } from "@/lib/paquetes";

interface Props {
  /** Página que contiene el formulario: "/contacto" o la propia página. */
  formBase: string;
}

export default function Hero({ formBase }: Props) {
  const presencia = PAQUETES[0];

  return (
    <section className="border-b border-border">
      <div className={`${container} grid gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:items-center`}>
        <div className="lg:col-span-7">
          <p className="mb-4 font-poppins text-sm font-medium text-accent">
            Sitios web para profesionistas y pequeños negocios en México
          </p>
          <h1 className="font-poppins text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Un sitio web profesional, con alcance y precio claros
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Antes de contratar sabrás qué incluye, cuánto cuesta y qué pagarás después. Tu sitio lo diseña y desarrolla
            Jorge Castro, fundador de Digicore Studio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={hrefSolicitar(formBase)} ubicacion="hero" className={btnPrimary}>
              Solicitar propuesta
              <ArrowRight className="size-5" aria-hidden="true" />
            </CtaLink>
            <CtaLink href="/planes" ubicacion="hero_paquetes" className={btnSecondary}>
              Ver paquetes y precios
            </CtaLink>
          </div>
        </div>

        <aside
          aria-label={`Paquete ${presencia.nombre}`}
          className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:col-span-5"
        >
          <p className="font-poppins text-sm font-medium text-muted">Paquete {presencia.nombre}, desde</p>
          <p className="mt-1 font-poppins text-4xl font-bold text-text">
            {PRECIO_INICIAL} <span className="text-base font-medium text-muted">MXN + IVA</span>
          </p>
          <ul className="mt-6 space-y-3">
            {presencia.resumen.map((t) => (
              <li key={t} className="flex gap-3 text-base text-text">
                <Check className="mt-1 size-4 shrink-0 text-success" aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            El plazo cuenta desde el anticipo, con tus materiales y accesos completos. El dominio se cotiza por
            separado.
          </p>
        </aside>
      </div>
    </section>
  );
}
