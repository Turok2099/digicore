import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
        className={`${manrope.variable} font-display antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
