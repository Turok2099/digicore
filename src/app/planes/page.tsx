import type { Metadata } from "next";
import Paquetes from "@/components/marketing/Paquetes";
import Comparacion from "@/components/marketing/Comparacion";
import Incluye from "@/components/marketing/Incluye";
import Faq from "@/components/marketing/Faq";
import Renovacion from "@/components/marketing/Renovacion";
import ContactForm from "@/components/marketing/ContactForm";
import { container } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Paquetes y precios de sitios web | Digicore Studio",
  description:
    "Presencia desde $5,900, Profesional $14,900 y Crecimiento $22,900 MXN + IVA. Alcance, plazos, renovación anual y costos aparte, explicados antes de contratar.",
  alternates: { canonical: "/planes" },
};

export default function PlanesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className={`${container} py-14 sm:py-20`}>
          <h1 className="font-poppins text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Paquetes y precios de sitios web
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Tres paquetes de sitio web con todo el alcance en un solo lugar: qué incluye, cuánto cuesta crearlo, cuánto cuesta
            mantenerlo desde el segundo año y qué se cotiza por separado. Precios en pesos mexicanos más IVA; el
            dominio se cotiza aparte.
          </p>
        </div>
      </section>
      <Paquetes formBase="/planes" enlaceDetalle={false} />
      <Comparacion detalle />
      <Incluye />
      <Renovacion />
      <Faq />
      <ContactForm />
    </>
  );
}
