import { Check, X } from "lucide-react";
import { container, sectionY } from "@/lib/ui";
import { RENOVACION, RENOVACION_INCLUYE, RENOVACION_NO_INCLUYE } from "@/lib/paquetes";

export default function Renovacion() {
  return (
    <section id="renovacion" className={`${sectionY} scroll-mt-20 border-t border-border`}>
      <div className={container}>
        <h2 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">
          Renovación desde el segundo año
        </h2>
        <p className="mt-3 max-w-3xl text-lg text-muted">
          En Presencia y Profesional, desde {RENOVACION} + IVA al año por alojamiento administrado y gestión técnica
          básica. Los recursos incluidos y cualquier necesidad adicional se especifican antes de contratar. En
          Crecimiento no hay renovación anual mientras la mensualidad esté activa.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-poppins text-lg font-semibold">Incluye</h3>
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
            <h3 className="font-poppins text-lg font-semibold">No incluye</h3>
            <ul className="mt-4 space-y-3">
              {RENOVACION_NO_INCLUYE.map((t) => (
                <li key={t} className="flex gap-3 text-muted">
                  <X className="mt-1 size-4 shrink-0" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted">El dominio se cotiza por separado, con su tarifa vigente.</p>
      </div>
    </section>
  );
}
