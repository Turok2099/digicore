import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import CapturaOrigen from "@/components/shared/CapturaOrigen";
import BannerConsentimiento from "@/components/shared/BannerConsentimiento";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const titulo = "Sitios web desde $5,900 MXN + IVA | Digicore Studio";
const descripcion =
  "Estudio de desarrollo web para profesionistas y pequeños negocios en México. Paquetes con alcance, plazos y costos posteriores claros.";

export const metadata: Metadata = {
  metadataBase: new URL("https://digicorestudio.com"),
  title: titulo,
  description: descripcion,
  openGraph: {
    title: titulo,
    description: descripcion,
    url: "https://digicorestudio.com",
    siteName: "Digicore Studio",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descripcion,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0F14",
};

// Medición opcional: Google Analytics solo se carga si existe el identificador, tiene formato de GA4 y la persona acepta.
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gaValido = gaId && /^G-[A-Z0-9]{4,}$/.test(gaId) ? gaId : null;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className={`${montserrat.variable} ${poppins.variable} flex min-h-dvh flex-col bg-bg font-montserrat text-text antialiased`}>
        <a
          href="#contenido"
          className="sr-only z-60 rounded-lg bg-accent px-4 py-2 font-poppins font-semibold text-on-accent focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido" className="flex-1 pt-16 sm:pt-[72px]">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <CapturaOrigen />
        <BannerConsentimiento gaId={gaValido} />
      </body>
    </html>
  );
}
