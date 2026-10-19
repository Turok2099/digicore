import type { Metadata } from "next";
import ServicioPagina from "@/components/marketing/ServicioPagina";
import { ECOMMERCE } from "@/lib/servicios";

export const metadata: Metadata = {
  title: "Tienda en línea y ecommerce | Digicore Studio",
  description:
    "Catálogo, carrito y cobros en línea para negocios que venden por internet. Cotización según alcance, con costos explicados antes de contratar.",
  alternates: { canonical: "/servicios/ecommerce" },
};

export default function EcommercePage() {
  return <ServicioPagina s={ECOMMERCE} />;
}
