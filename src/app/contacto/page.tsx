import type { Metadata } from "next";
import ContactForm from "@/components/marketing/ContactForm";

export const metadata: Metadata = {
  title: "Solicitar propuesta de sitio web | Digicore Studio",
  description:
    "Cuéntanos qué haces y qué quieres presentar. te respondemos por correo con el alcance, el total con impuestos y la cotización del dominio.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return <ContactForm />;
}
