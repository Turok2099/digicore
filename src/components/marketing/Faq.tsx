import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { container, sectionY } from "@/lib/ui";
import { PREGUNTAS } from "@/lib/paquetes";

export default function Faq() {
  return (
    <section id="preguntas" className={`${sectionY} scroll-mt-20 border-t border-border bg-surface`}>
      <div className={`${container} max-w-3xl`}>
        <h2 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">Preguntas frecuentes</h2>

        <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-bg">
          {PREGUNTAS.map((q) => (
            <details key={q.p} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-poppins text-base font-semibold [&::-webkit-details-marker]:hidden">
                {q.p}
                <ChevronDown
                  className="size-5 shrink-0 text-muted transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-muted">
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
