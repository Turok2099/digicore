import { container, sectionY } from "@/lib/ui";
import { PASOS } from "@/lib/paquetes";

export default function Proceso() {
  return (
    <section id="proceso" className={`${sectionY} scroll-mt-20`}>
      <div className={container}>
        <h2 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">
          Nuestro proceso
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">Seis pasos para contratar y recibir tu sitio, con lo que pasa y lo que pagas en cada uno.</p>

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PASOS.map((p, i) => (
            <li key={p.titulo} className="revelar rounded-2xl border border-border bg-surface p-6">
              <span className="font-poppins text-sm font-semibold text-accent">Paso {i + 1}</span>
              <h3 className="mt-2 font-poppins text-lg font-semibold">{p.titulo}</h3>
              <p className="mt-2 text-muted">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
