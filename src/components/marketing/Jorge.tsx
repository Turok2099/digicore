import { container, sectionY } from "@/lib/ui";

const puntos = [
  "Una sola persona diseña, desarrolla y responde tus mensajes.",
  "El alcance y el total se acuerdan por escrito antes del anticipo.",
  "Tus comentarios se consolidan en rondas de revisión para avanzar sin retrasos.",
];

export default function Jorge() {
  return (
    <section id="responsable" className={`${sectionY} scroll-mt-20 border-t border-border bg-surface`}>
      <div className={`${container} grid gap-10 lg:grid-cols-12`}>
        <div className="lg:col-span-6">
          <h2 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">
            Trabajas directamente con quien desarrolla tu sitio
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Digicore Studio es el estudio de Jorge Castro, fundador y responsable directo del desarrollo. Él diseña y
            construye cada sitio y es tu contacto durante todo el proyecto.
          </p>
        </div>
        <ul className="space-y-4 lg:col-span-6">
          {puntos.map((t) => (
            <li key={t} className="rounded-xl border border-border bg-bg p-5 text-base leading-relaxed">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
