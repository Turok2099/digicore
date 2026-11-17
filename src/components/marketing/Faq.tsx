import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { container, sectionY } from "@/lib/ui";
import { PREGUNTAS, type Pregunta } from "@/lib/paquetes";
import FaqExpandirTodo from "@/components/marketing/FaqExpandirTodo";

export default function Faq({ preguntas = PREGUNTAS }: { preguntas?: Pregunta[] }) {
  return (
    <section
      id="preguntas"
      aria-labelledby="preguntas-titulo"
      className={`${sectionY} scroll-mt-20 border-t border-border bg-surface`}
    >
      <div className={`${container} max-w-3xl`}>
        <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
          <h2 id="preguntas-titulo" className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <FaqExpandirTodo contenedorId="preguntas-lista" />
        </div>

        {/* Los <details> son hijos directos: se animan con ::details-content (ver globals.css). */}
        <div id="preguntas-lista" className="faq-lista mt-6 divide-y divide-border rounded-2xl border border-border bg-bg">
          {preguntas.map((q) => (
            <details key={q.p} className="group">
              {/* Sin encabezados dentro de <summary>: JAWS y TalkBack los descartan.
                  El icono va junto al texto, antes de él, para asociarlo con la pregunta. */}
              <summary className="flex cursor-pointer list-none items-center gap-3 p-5 font-poppins text-base font-semibold [&::-webkit-details-marker]:hidden">
                <ChevronDown
                  className="size-5 shrink-0 -rotate-90 text-muted motion-safe:transition-transform group-open:rotate-0"
                  aria-hidden="true"
                />
                {q.p}
              </summary>
              <p className="pb-5 pl-13 pr-5 leading-relaxed text-muted">
                {q.r}
                {q.href && (
                  <>
                    {" "}
                    <Link href={q.href} className="font-medium text-accent hover:text-accent-hover">
                      {q.enlace}
                    </Link>
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
