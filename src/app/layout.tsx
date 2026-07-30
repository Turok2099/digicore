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

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const logoUrl = "https://res.cloudinary.com/dxbtafe9u/image/upload/v1785450043/logo_digicore_cwddqe.svg";

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
  icons: {
    icon: logoUrl,
    shortcut: logoUrl,
    apple: logoUrl,
  },
  openGraph: {
    title: "Digicore Studio | Agencia de Desarrollo Web",
    description:
      "Desarrollo de páginas web profesionales y soluciones digitales a medida.",
    url: "https://digicorestudio.com",
    siteName: "Digicore Studio",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: "Digicore Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digicore Studio | Agencia de Desarrollo Web",
    description:
      "Desarrollo de páginas web profesionales y soluciones digitales a medida.",
    images: [logoUrl],
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
          rel="icon"
          href={logoUrl}
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href={logoUrl}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${orbitron.variable} font-montserrat antialiased bg-[#030303] text-[#F5F7FF]`}
      >
        {children}
      </body>
    </html>
  );
}
