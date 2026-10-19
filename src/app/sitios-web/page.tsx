import type { Metadata } from "next";
import Hero from "@/components/marketing/Hero";
import Proyectos from "@/components/marketing/Proyectos";
import Paquetes from "@/components/marketing/Paquetes";
import Comparacion from "@/components/marketing/Comparacion";
import Incluye from "@/components/marketing/Incluye";
import Enfoque from "@/components/marketing/Enfoque";
import Renovacion from "@/components/marketing/Renovacion";
import OtrosServicios from "@/components/marketing/OtrosServicios";
import Proceso from "@/components/marketing/Proceso";
import Faq from "@/components/marketing/Faq";
import ContactForm from "@/components/marketing/ContactForm";

export const metadata: Metadata = {
  title: "Páginas web para profesionistas | Digicore Studio",
  description:
    "Sitio web profesional desde $5,900 MXN + IVA. Compara paquetes, revisa qué incluye y qué se cotiza aparte, y solicita una propuesta con el total antes de contratar.",
  alternates: { canonical: "/sitios-web" },
};

export default function SitiosWebPage() {
  return (
    <>
      <Hero formBase="/sitios-web" />
      <Proyectos />
      <Paquetes formBase="/sitios-web" />
      <Comparacion />
      <Incluye />
      <Renovacion />
      <Enfoque />
      <Proceso />
      <Faq />
      <OtrosServicios />
      <ContactForm />
    </>
  );
}
