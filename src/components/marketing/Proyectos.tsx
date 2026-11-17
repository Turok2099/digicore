import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { container, sectionY } from "@/lib/ui";
import { PROYECTOS } from "@/lib/proyectos";

/** Se muestra solo cuando hay proyectos verificados en src/lib/proyectos.ts. */
export default function Proyectos() {
  if (PROYECTOS.length === 0) return null;

  return (
    <section id="proyectos" className={`${sectionY} scroll-mt-20 border-b border-border`}>
      <div className={container}>
        <h2 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">Sitios que hemos desarrollado</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Proyectos reales en línea. Puedes visitarlos y revisarlos tú mismo.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROYECTOS.map((p) => (
            <li key={p.nombre} className="revelar overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={p.imagen}
                alt={p.imagenAlt}
                width={960}
                height={368}
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full"
              />
              <div className="p-6">
                <p className="font-poppins text-xs font-semibold text-accent">{p.sector}</p>
                <h3 className="mt-1 font-poppins text-xl font-semibold">{p.nombre}</h3>
                <p className="mt-2 text-muted">{p.descripcion}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 font-poppins text-sm font-semibold text-accent hover:text-accent-hover"
                >
                  Visitar {p.nombre}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
