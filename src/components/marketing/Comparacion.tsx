import { container, sectionY } from "@/lib/ui";
import { COMPARACION } from "@/lib/paquetes";

interface Props {
  /** Incluye filas de alcance detallado (para /planes). */
  detalle?: boolean;
}

export default function Comparacion({ detalle = false }: Props) {
  const filas = COMPARACION.filter((f) => detalle || !f.detalle);

  return (
    <section id="comparacion" className={`${sectionY} scroll-mt-20 border-t border-border bg-surface`}>
      <div className={container}>
        <h2 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">Comparación de paquetes</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Precios en MXN más IVA. Los plazos cuentan desde el anticipo, con materiales y accesos completos.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-bg">
          <table className="w-full min-w-[560px] border-collapse text-left text-base">
            <caption className="sr-only">Comparación entre los paquetes Presencia y Profesional</caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="p-4 font-poppins text-sm font-semibold text-muted">
                  Concepto
                </th>
                <th scope="col" className="p-4 font-poppins text-base font-semibold">
                  Presencia
                </th>
                <th scope="col" className="p-4 font-poppins text-base font-semibold">
                  Profesional
                </th>
              </tr>
            </thead>
            <tbody>
              {filas.map((f) => (
                <tr key={f.concepto} className="border-b border-border last:border-b-0">
                  <th scope="row" className="p-4 align-top font-poppins text-sm font-medium text-muted">
                    {f.concepto}
                  </th>
                  <td className="p-4 align-top">{f.presencia}</td>
                  <td className="p-4 align-top">{f.profesional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
