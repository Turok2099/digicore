import type { Metadata } from "next";
import ServicioPagina from "@/components/marketing/ServicioPagina";
import { ADS } from "@/lib/servicios";

export const metadata: Metadata = {
  title: "Publicidad y marketing digital para negocios | Digicore Studio",
  description:
    "Campañas de búsqueda en Google Ads, conversiones y seguimiento con informes, con alcance y precio personalizados. Solicita una propuesta de marketing.",
  alternates: { canonical: "/servicios/ads-marketing-digital" },
};

export default function AdsMarketingPage() {
  return <ServicioPagina s={ADS} />;
}
