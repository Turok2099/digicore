import Link from "next/link";
import { Check, X } from "lucide-react";
import CtaLink from "@/components/ui/CtaLink";
import HeroOferta from "@/components/marketing/HeroOferta";
import { btnPrimary, btnSecondary, container, hrefSolicitar, sectionY } from "@/lib/ui";
import { RENOVACION, RENOVACION_INCLUYE } from "@/lib/paquetes";
import {
  COSTOS_POSTERIORES,
  CONDICION_PLAZOS,
  INCLUYE_SITIO,
  NECESIDADES,
  OPCIONES,
  PASOS_WEB,
  PREPARACION,
  RELACION_SERVICIOS,
  SE_COTIZA_APARTE_WEB,
} from "@/lib/desarrollo-web";

const BASE = "/sitios-web";
const h2 = "font-poppins text-3xl font-semibold tracking-tight sm:text-4xl";

export function HeroWeb() {
  return (
    <HeroOferta
      precio={OPCIONES[0].precio}
      aclaracion={
        <>
          Dominio y costos posteriores:{" "}
          <a
            href="#costos-posteriores"
            className="font-medium text-text underline decoration-border-strong underline-offset-4 hover:decoration-accent"
          >
            ver detalles
          </a>
        </>
      }
      cta={{ href: hrefSolicitar(BASE), ubicacion: "hero_desarrollo_web" }}
      secundario={{ href: "#opciones", ubicacion: "hero_opciones_precios", texto: "Ver opciones y precios" }}
    />
  );
}

export function NecesidadesWeb() {
  return (
    <section id="necesidades" className={`${sectionY} scroll-mt-20 border-b border-border`}>
      <div className={container}>
        <h2 className={h2}>Páginas web para empresas y negocios, según lo que necesitas</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          No todos los negocios necesitan el mismo sitio. Estas son las situaciones más comunes y la opción que suele
          encajar en cada una.
        </p>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {NECESIDADES.map((n) => (
            <li key={n.titulo} className="flex flex-col revelar rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-poppins text-lg font-semibold">{n.titulo}</h3>
              <p className="mt-2 flex-1 text-muted">{n.texto}</p>
              <p className="mt-4 font-poppins text-sm font-medium text-accent">{n.opcion}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function OpcionesWeb() {
  return (
    <section id="opciones" className={`${sectionY} scroll-mt-20`}>
      <div className={container}>
        <h2 className={h2}>Opciones y precio de una página web</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Importes en pesos mexicanos más IVA. Dominio y correo empresarial se cotizan por separado. En tu cotización
          verás el total antes de contratar.
        </p>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[1fr_1.2fr_1fr]">
          {OPCIONES.map((o) => (
            <article
              key={o.id}
              className={`flex flex-col revelar rounded-2xl border bg-surface p-6 sm:p-8 ${
                o.destacada ? "order-first border-2 border-accent lg:order-none lg:p-10" : "border-border"
              }`}
            >
              <h3 className="font-poppins text-2xl font-semibold">{o.nombre}</h3>
              <p className="mt-2 text-muted">{o.para}</p>

              {o.precio ? (
                <p className="mt-6 font-poppins text-4xl font-bold">
                  {o.precio} <span className="text-base font-medium text-muted">MXN + IVA</span>
                </p>
              ) : (
                <p className="mt-6 font-poppins text-2xl font-bold">Cotización personalizada</p>
              )}
              <p className="mt-1 text-sm text-muted">{o.nota}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {o.items.map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-success" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CtaLink
                  href={hrefSolicitar(BASE, o.id)}
                  ubicacion="opcion_desarrollo_web"
                  paquete={o.id}
                  className={`${o.destacada ? btnPrimary : btnSecondary} w-full`}
                >
                  {o.cta}
                </CtaLink>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm text-muted">{CONDICION_PLAZOS}</p>
      </div>
    </section>
  );
}

export function PreparacionWeb() {
  return (
    <section id="incluye" className={`${sectionY} scroll-mt-20 border-t border-border bg-surface`}>
      <div className={container}>
        <h2 className={h2}>Qué incluye y cómo preparamos el contenido</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Un buen sitio parte de información real de tu negocio. Así nos repartimos el trabajo.
        </p>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {PREPARACION.map((p, i) => (
            <li key={p.titulo} className="revelar rounded-2xl border border-border bg-bg p-6">
              <span className="font-poppins text-sm font-semibold text-accent">{i + 1}</span>
              <h3 className="mt-2 font-poppins text-lg font-semibold">{p.titulo}</h3>
              <p className="mt-2 text-muted">{p.texto}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-bg p-6">
            <h3 className="font-poppins text-lg font-semibold">Incluido en Una página y Sitio empresarial</h3>
            <ul className="mt-4 space-y-3">
              {INCLUYE_SITIO.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-success" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-bg p-6">
            <h3 className="font-poppins text-lg font-semibold">Se cotiza aparte</h3>
            <ul className="mt-4 space-y-3">
              {SE_COTIZA_APARTE_WEB.map((t) => (
                <li key={t} className="flex gap-3 text-muted">
                  <X className="mt-1 size-4 shrink-0" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-muted">
          <strong className="font-semibold text-text">Importante:</strong> estos paquetes no incluyen un panel de edición.
          El sitio no es autoadministrable; los cambios posteriores se cotizan antes de realizarse.
        </p>
      </div>
    </section>
  );
}

export function CostosPosterioresWeb() {
  return (
    <section id="costos-posteriores" className={`${sectionY} scroll-mt-20 border-t border-border`}>
      <div className={container}>
        <h2 className={h2}>Costos después de publicar</h2>
        <p className="mt-3 max-w-3xl text-lg text-muted">
          Sin sorpresas: esto es lo que sigue después de la entrega. No hay una mensualidad obligatoria.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="font-poppins text-sm font-medium text-muted">Primer año</p>
            <p className="mt-1 font-poppins text-2xl font-bold">Alojamiento incluido</p>
            <p className="mt-3 text-muted">{COSTOS_POSTERIORES.primerAnio}</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="font-poppins text-sm font-medium text-muted">Desde el segundo año</p>
            <p className="mt-1 font-poppins text-2xl font-bold">
              Desde {RENOVACION} <span className="text-base font-medium text-muted">MXN + IVA al año</span>
            </p>
            <ul className="mt-4 space-y-3">
              {RENOVACION_INCLUYE.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-success" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="font-poppins text-sm font-medium text-muted">No incluido en la renovación</p>
            <ul className="mt-4 space-y-3">
              {COSTOS_POSTERIORES.noIncluye.map((t) => (
                <li key={t} className="flex gap-3 text-muted">
                  <X className="mt-1 size-4 shrink-0" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">{COSTOS_POSTERIORES.cambios}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcesoWeb() {
  return (
    <section id="proceso" className={`${sectionY} scroll-mt-20 border-t border-border bg-surface`}>
      <div className={container}>
        <h2 className={h2}>Cómo trabajamos</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Como agencia de diseño web, trabajamos por etapas, con alcance, pagos y revisiones claros desde el inicio.
        </p>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PASOS_WEB.map((p, i) => (
            <li key={p.titulo} className="revelar rounded-2xl border border-border bg-bg p-6">
              <span className="font-poppins text-sm font-semibold text-accent">Paso {i + 1}</span>
              <h3 className="mt-2 font-poppins text-lg font-semibold">{p.titulo}</h3>
              <p className="mt-2 text-muted">{p.texto}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl text-sm text-muted">{CONDICION_PLAZOS}</p>
      </div>
    </section>
  );
}

export function RelacionServiciosWeb() {
  return (
    <section id="otros-servicios" className={`${sectionY} scroll-mt-20 border-t border-border`}>
      <div className={container}>
        <h2 className={h2}>Cómo se relaciona con otros servicios</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Un sitio web es la base. Estos servicios lo complementan, pero son distintos y se cotizan por separado.
        </p>
        <dl className="mt-10 grid gap-5 md:grid-cols-2">
          {RELACION_SERVICIOS.map((r) => (
            <div
              key={r.titulo}
              className={`revelar rounded-2xl border bg-surface p-6 ${r.actual ? "border-accent" : "border-border"}`}
            >
              <dt className="font-poppins text-lg font-semibold">{r.titulo}</dt>
              <dd className="mt-2 text-muted">
                {r.texto}
                {r.href && (
                  <>
                    {" "}
                    <Link href={r.href} className="font-medium text-accent hover:text-accent-hover">
                      {r.enlace}
                    </Link>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
