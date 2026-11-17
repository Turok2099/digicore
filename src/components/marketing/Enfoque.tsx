import { container, sectionY } from "@/lib/ui";

const pilares = [
  {
    titulo: "Estrategia",
    texto: "Definimos el objetivo, el público y la estructura del sitio antes de diseñar una sola página.",
  },
  {
    titulo: "Diseño",
    texto: "Una interfaz clara, adaptada a tu identidad y pensada para que tus clientes encuentren lo que buscan.",
  },
  {
    titulo: "Desarrollo",
    texto: "Construimos, medimos y publicamos tu sitio con un alcance, un plazo y un costo acordados por escrito.",
  },
];

export default function Enfoque() {
  return (
    <section id="enfoque" className={`${sectionY} scroll-mt-20 border-t border-border bg-surface`}>
      <div className={container}>
        <p className="font-poppins text-sm font-medium text-accent">Estrategia · Diseño · Desarrollo</p>
        <h2 className="mt-2 font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">
          Un estudio de desarrollo web enfocado en proceso y entregables claros
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {pilares.map((p) => (
            <li key={p.titulo} className="revelar rounded-2xl border border-border bg-bg p-6">
              <h3 className="font-poppins text-xl font-semibold">{p.titulo}</h3>
              <p className="mt-2 text-muted">{p.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
