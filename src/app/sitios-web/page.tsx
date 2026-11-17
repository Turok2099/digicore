import type { Metadata } from "next";
import Proyectos from "@/components/marketing/Proyectos";
import Faq from "@/components/marketing/Faq";
import ContactForm from "@/components/marketing/ContactForm";
import {
  CostosPosterioresWeb,
  HeroWeb,
  NecesidadesWeb,
  OpcionesWeb,
  PreparacionWeb,
  ProcesoWeb,
  RelacionServiciosWeb,
} from "@/components/marketing/DesarrolloWebSecciones";
import { OPCIONES, PREGUNTAS_WEB } from "@/lib/desarrollo-web";

export const metadata: Metadata = {
  title: "Diseño y desarrollo de páginas web para empresas | Digicore Studio",
  description:
    "Diseño y desarrollo de páginas web para empresas y negocios en México. Una página desde $5,900 MXN + IVA. Solicita tu cotización.",
  alternates: { canonical: "/sitios-web" },
};

// Datos estructurados: solo contenido visible en la página (precios y preguntas frecuentes).
const datosEstructurados = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Diseño y desarrollo de páginas web",
      serviceType: "Desarrollo web",
      provider: { "@type": "Organization", name: "Digicore Studio", url: "https://digicorestudio.com" },
      areaServed: { "@type": "Country", name: "México" },
      url: "https://digicorestudio.com/sitios-web",
      offers: OPCIONES.filter((o) => o.precio).map((o) => ({
        "@type": "Offer",
        name: o.nombre,
        priceCurrency: "MXN",
        price: o.precio.replace(/[$,]/g, ""),
        description: `${o.nombre}: ${o.precio} MXN más IVA.`,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: PREGUNTAS_WEB.map((q) => ({
        "@type": "Question",
        name: q.p,
        acceptedAnswer: { "@type": "Answer", text: q.r },
      })),
    },
  ],
};

export default function SitiosWebPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados).replace(/</g, "\\u003c") }}
      />
      <HeroWeb />
      <NecesidadesWeb />
      <Proyectos />
      <OpcionesWeb />
      <PreparacionWeb />
      <CostosPosterioresWeb />
      <ProcesoWeb />
      <RelacionServiciosWeb />
      <Faq preguntas={PREGUNTAS_WEB} />
      <ContactForm
        variante="desarrollo-web"
        titulo="Solicita la cotización de tu página web"
        intro="Cuéntanos a qué se dedica tu negocio y qué necesitas. Te responderemos por correo con el alcance y el total con impuestos antes de que decidas."
      />
    </>
  );
}
