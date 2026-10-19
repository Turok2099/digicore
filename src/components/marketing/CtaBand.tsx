import CtaLink from "@/components/ui/CtaLink";
import { btnPrimary, btnSecondary, container, sectionY } from "@/lib/ui";

export default function CtaBand() {
  return (
    <section className={`${sectionY} border-t border-border bg-surface`}>
      <div className={`${container} flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between`}>
        <div className="max-w-xl">
          <h2 className="font-poppins text-3xl font-semibold tracking-tight">¿Listo para ver tu propuesta?</h2>
          <p className="mt-2 text-lg text-muted">
            Te enviamos el alcance, el total con impuestos y el costo del dominio antes de que decidas.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href="/contacto#contacto" ubicacion="banda_final" className={btnPrimary}>
            Solicitar propuesta
          </CtaLink>
          <CtaLink href="/sitios-web" ubicacion="banda_final_detalle" className={btnSecondary}>
            Ver todo el detalle
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
