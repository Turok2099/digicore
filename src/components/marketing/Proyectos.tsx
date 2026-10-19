import Image from "next/image";
import { container, sectionY } from "@/lib/ui";
import { PROYECTOS } from "@/lib/proyectos";

/** Se muestra solo cuando hay proyectos verificados en src/lib/proyectos.ts. */
export default function Proyectos() {
  if (PROYECTOS.length === 0) return null;

  return (
    <section id="proyectos" className={`${sectionY} scroll-mt-20 border-b border-border`}>
      <div className={container}>
        <h2 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">Proyectos realizados</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PROYECTOS.map((p) => (
            <article key={p.nombre} className="overflow-hidden rounded-2xl border border-border bg-surface">
              <Image src={p.imagen} alt={p.imagenAlt} width={800} height={500} className="h-auto w-full" />
              <div className="p-6">
                <h3 className="font-poppins text-xl font-semibold">{p.nombre}</h3>
                <p className="mt-2 text-muted">{p.descripcion}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-poppins text-sm font-semibold text-accent hover:text-accent-hover"
                >
                  Visitar el sitio
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
