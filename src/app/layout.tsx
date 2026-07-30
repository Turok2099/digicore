import type { Metadata } from "next";
import { Montserrat, Poppins, Orbitron } from "next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const horizon = Orbitron({
  variable: "--font-horizon",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Digicore Studio | Agencia de Desarrollo Web y Diseño Profesional",
  description:
    "Agencia de desarrollo web especializada en la elaboración de páginas web profesionales a medida. Diseñador y desarrollador web experto para empresas y negocios.",
  keywords: [
    "agencia de desarrollo web",
    "desarrollo de paginas web",
    "agencia de diseno web",
    "desarrolladores de sitios web",
    "diseñador y desarrollador web",
    "paginas web profesionales",
    "elaboracion de paginas web",
  ],
  openGraph: {
    title: "Digicore Studio | Agencia de Desarrollo Web",
    description:
      "Desarrollo de páginas web profesionales y soluciones digitales a medida.",
    url: "https://digicorestudio.com",
    siteName: "Digicore Studio",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digicore Studio | Agencia de Desarrollo Web",
    description:
      "Desarrollo de páginas web profesionales y soluciones digitales a medida.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${horizon.variable} font-montserrat antialiased bg-[#030303] text-[#F5F7FF]`}
      >
        {children}
      </body>
    </html>
  );
}
