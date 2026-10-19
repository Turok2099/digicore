import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CtaLink from "@/components/ui/CtaLink";
import { container, sectionY } from "@/lib/ui";

const servicios = [
  {
    etiqueta: "Publicidad y medición",
    titulo: "Ads y marketing digital",
    texto: "Campañas de búsqueda y seguimiento de conversiones, con una estrategia acorde a tus objetivos.",
    href: "/servicios/ads-marketing-digital",
    cta: "Explorar marketing digital",
    imagen: "/images/otros-servicios-ads.webp",
    alt: "Ilustración de paneles de campañas de búsqueda y métricas de publicidad digital",
  },
  {
    etiqueta: "Ventas en línea",
    titulo: "Ecommerce",
    texto: "Una tienda con catálogo, carrito y pagos en línea, definida alrededor de tu operación.",
    href: "/servicios/ecommerce",
    cta: "Explorar ecommerce",
    imagen: "/images/otros-servicios-ecommerce.webp",
    alt: "Ilustración de una tienda en línea con catálogo, carrito y pago, en escritorio y celular",
  },
];

export default function OtrosServicios() {
  return (
    <section id="otros-servicios" className={`${sectionY} scroll-mt-20 border-t border-border`}>
      <div className={container}>
        <div className="text-center">
          <p className="font-poppins text-xs font-medium uppercase tracking-[0.25em] text-accent sm:text-sm">
            Soluciones especializadas
          </p>
          <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Más posibilidades para tu negocio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Complementa tu presencia digital con publicidad o una tienda en línea.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {servicios.map((s) => (
            <li key={s.href} className="flex flex-col rounded-2xl border border-border bg-surface p-4 sm:p-5">
              <Image
                src={s.imagen}
                alt={s.alt}
                width={1200}
                height={800}
                sizes="(min-width: 1240px) 580px, (min-width: 768px) 46vw, 100vw"
                className="aspect-[16/10] w-full rounded-xl object-cover"
              />
              <div className="flex flex-1 flex-col px-2 pb-3 pt-6 sm:px-3">
                <p className="font-poppins text-xs font-medium uppercase tracking-[0.2em] text-muted">{s.etiqueta}</p>
                <h3 className="mt-2 font-poppins text-2xl font-bold tracking-tight sm:text-3xl">{s.titulo}</h3>
                <p className="mt-3 flex-1 text-lg leading-relaxed text-muted">{s.texto}</p>

                <p className="mt-6">
                  <span className="inline-flex min-h-11 items-center rounded-full border border-accent px-5 font-poppins text-sm font-semibold text-accent">
                    Cotización según alcance
                  </span>
                </p>

                <CtaLink
                  href={s.href}
                  ubicacion="otros_servicios"
                  className="mt-5 inline-flex items-center gap-2 self-start font-poppins text-base font-semibold text-accent hover:text-accent-hover"
                >
                  {s.cta}
                  <ArrowRight className="size-5" aria-hidden="true" />
                </CtaLink>
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted">
          Servicios independientes de los paquetes de sitio web. La inversión publicitaria y los servicios externos se
          cotizan por separado.
        </p>
      </div>
    </section>
  );
}
