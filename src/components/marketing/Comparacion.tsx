import { container, sectionY } from "@/lib/ui";
import { COMPARACION } from "@/lib/paquetes";

interface Props {
  /** Incluye filas de alcance detallado (para /planes). */
  detalle?: boolean;
}

const columnas = ["Presencia", "Profesional", "Crecimiento"];

export default function Comparacion({ detalle = false }: Props) {
  const filas = COMPARACION.filter((f) => detalle || !f.detalle);

  return (
    <section id="comparacion" className={`${sectionY} scroll-mt-20 border-t border-border bg-surface`}>
      <div className={container}>
        <h2 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">Comparación de paquetes</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Precios en MXN más IVA. Los plazos cuentan desde el anticipo, con materiales y accesos completos.
        </p>

        {/* Móvil: una tarjeta por concepto */}
        <dl className="mt-8 space-y-4 md:hidden">
          {filas.map((f) => (
            <div key={f.concepto} className="rounded-xl border border-border bg-bg p-4">
              <dt className="font-poppins text-sm font-semibold text-accent">{f.concepto}</dt>
              <dd className="mt-3 space-y-3">
                {columnas.map((c, i) => (
                  <p key={c}>
                    <span className="block font-poppins text-xs font-semibold text-muted">{c}</span>
                    {f.valores[i]}
                  </p>
                ))}
              </dd>
            </div>
          ))}
        </dl>

        {/* Escritorio: tabla */}
        <div className="mt-8 hidden overflow-x-auto rounded-2xl border border-border bg-bg md:block">
          <table className="w-full border-collapse text-left text-base">
            <caption className="sr-only">Comparación entre los paquetes Presencia, Profesional y Crecimiento</caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="p-4 font-poppins text-sm font-semibold text-muted">
                  Concepto
                </th>
                {columnas.map((c) => (
                  <th key={c} scope="col" className="p-4 font-poppins text-base font-semibold">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filas.map((f) => (
                <tr key={f.concepto} className="border-b border-border last:border-b-0">
                  <th scope="row" className="p-4 align-top font-poppins text-sm font-medium text-muted">
                    {f.concepto}
                  </th>
                  {f.valores.map((v, i) => (
                    <td key={columnas[i]} className="p-4 align-top">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
