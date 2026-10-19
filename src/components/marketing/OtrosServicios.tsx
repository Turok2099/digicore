import CtaLink from "@/components/ui/CtaLink";
import { btnSecondary, container, sectionY } from "@/lib/ui";

const servicios = [
  {
    titulo: "Publicidad y marketing digital",
    texto: "Campañas de búsqueda, conversiones y seguimiento con informes, según tus objetivos.",
    href: "/servicios/ads-marketing-digital",
    cta: "Ver Ads y marketing digital",
  },
  {
    titulo: "Tienda en línea",
    texto: "Catálogo, carrito y cobros en línea para negocios que venden por internet.",
    href: "/servicios/ecommerce",
    cta: "Ver ecommerce",
  },
];

export default function OtrosServicios() {
  return (
    <section className={`${sectionY} scroll-mt-20 border-t border-border`}>
      <div className={container}>
        <h2 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">Otros servicios</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Son proyectos independientes de los paquetes de sitio web y se cotizan según su alcance.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {servicios.map((s) => (
            <article key={s.href} className="flex flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-poppins text-xl font-semibold">{s.titulo}</h3>
              <p className="mt-2 flex-1 text-muted">{s.texto}</p>
              <p className="mt-6">
                <CtaLink href={s.href} ubicacion="otros_servicios" className={`${btnSecondary} min-h-11!`}>
                  {s.cta}
                </CtaLink>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
