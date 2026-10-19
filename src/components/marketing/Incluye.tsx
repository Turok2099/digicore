import { Check } from "lucide-react";
import { container, sectionY } from "@/lib/ui";
import { INCLUIDO_EN_TODOS, SE_COTIZA_APARTE } from "@/lib/paquetes";

export default function Incluye() {
  return (
    <section id="incluye" className={`${sectionY} scroll-mt-20`}>
      <div className={`${container} grid gap-12 lg:grid-cols-2`}>
        <div>
          <h2 className="font-poppins text-3xl font-semibold tracking-tight">Incluido en todos los paquetes</h2>
          <ul className="mt-6 space-y-3">
            {INCLUIDO_EN_TODOS.map((t) => (
              <li key={t} className="flex gap-3">
                <Check className="mt-1 size-4 shrink-0 text-success" aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div id="ampliaciones" className="scroll-mt-20">
          <h2 className="font-poppins text-3xl font-semibold tracking-tight">Lo que se cotiza aparte</h2>
          <p className="mt-3 text-muted">
            Nada de esto se cobra sin que lo apruebes antes. Te explicamos el motivo, el costo y cada cuánto se paga.
          </p>
          <dl className="mt-6 space-y-5">
            {SE_COTIZA_APARTE.map((i) => (
              <div key={i.titulo}>
                <dt className="font-poppins text-base font-semibold">{i.titulo}</dt>
                <dd className="mt-1 text-muted">{i.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
