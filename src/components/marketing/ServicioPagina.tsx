import { ArrowRight, Check } from "lucide-react";
import CtaLink from "@/components/ui/CtaLink";
import ContactForm from "@/components/marketing/ContactForm";
import { btnPrimary, btnSecondary, container, sectionY } from "@/lib/ui";
import type { Servicio } from "@/lib/servicios";

export default function ServicioPagina({ s }: { s: Servicio }) {
  const base = `/servicios/${s.slug}`;
  const href = `${base}?paquete=${s.interes}#contacto`;

  return (
    <>
      <section className="border-b border-border">
        <div className={`${container} grid gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:items-center`}>
          <div className="lg:col-span-7">
            <p className="mb-4 font-poppins text-sm font-medium text-accent">{s.eyebrow}</p>
            <h1 className="font-poppins text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{s.h1}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{s.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={href} ubicacion={`hero_${s.interes}`} paquete={s.interes} className={btnPrimary}>
                {s.cta}
                <ArrowRight className="size-5" aria-hidden="true" />
              </CtaLink>
              <CtaLink href="/planes" ubicacion={`${s.interes}_ver_paquetes`} className={btnSecondary}>
                Ver paquetes de sitios web
              </CtaLink>
            </div>
          </div>
          <aside className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:col-span-5" aria-label="Precio">
            <p className="font-poppins text-sm font-medium text-muted">Precio</p>
            <p className="mt-1 font-poppins text-3xl font-bold">Cotización según alcance</p>
            <p className="mt-4 text-muted">
              Revisamos tu caso y te enviamos una propuesta con el alcance, los entregables y el total con impuestos
              antes de que decidas.
            </p>
          </aside>
        </div>
      </section>

      <section className={`${sectionY} scroll-mt-20`}>
        <div className={`${container} grid gap-12 lg:grid-cols-2`}>
          <div>
            <h2 className="font-poppins text-3xl font-semibold tracking-tight">{s.contratable.titulo}</h2>
            <ul className="mt-6 space-y-3">
              {s.contratable.items.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-success" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-poppins text-3xl font-semibold tracking-tight">{s.noIncluido.titulo}</h2>
            <p className="mt-6 leading-relaxed text-muted">{s.noIncluido.texto}</p>
          </div>
        </div>
      </section>

      <section id="proceso" className={`${sectionY} scroll-mt-20 border-t border-border bg-surface`}>
        <div className={container}>
          <h2 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">Nuestro proceso</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {s.fases.map((f, i) => (
              <li key={f.titulo} className="rounded-2xl border border-border bg-bg p-6">
                <span className="font-poppins text-sm font-semibold text-accent">Fase {i + 1}</span>
                <h3 className="mt-2 font-poppins text-lg font-semibold">{f.titulo}</h3>
                <p className="mt-2 text-muted">{f.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${sectionY} scroll-mt-20`}>
        <div className={container}>
          <h2 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">Para que quede claro</h2>
          <dl className="mt-8 grid gap-6 md:grid-cols-3">
            {s.aclaraciones.map((a) => (
              <div key={a.titulo} className="rounded-2xl border border-border bg-surface p-6">
                <dt className="font-poppins text-lg font-semibold">{a.titulo}</dt>
                <dd className="mt-2 text-muted">{a.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactForm titulo={s.contactoTitulo} intro={s.contactoIntro} />
    </>
  );
}
