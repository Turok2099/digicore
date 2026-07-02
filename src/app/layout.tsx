import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Digicore Studio - Alta Adquisición Tecnológica",
  description: "Soluciones de digitalización, automatización e Inteligencia Artificial. Maximizamos el rendimiento de tu negocio.",
  openGraph: {
    title: "Digicore Studio - Alta Adquisición Tecnológica",
    description: "Soluciones de digitalización, automatización e Inteligencia Artificial. Maximizamos el rendimiento de tu negocio.",
    url: "https://digicorestudio.com",
    siteName: "Digicore Studio",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digicore Studio - Alta Adquisición Tecnológica",
    description: "Soluciones de digitalización, automatización e Inteligencia Artificial. Maximizamos el rendimiento de tu negocio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
