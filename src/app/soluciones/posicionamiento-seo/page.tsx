import Navigation from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function PosicionamientoSEO() {
  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased flex flex-col justify-between">
      <Navigation />
      <main className="flex-grow pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-[#39FF14]">Posicionamiento SEO & Marketing</h1>
        <p className="text-text-muted text-xl max-w-xl leading-relaxed">
          Haz que tus clientes te encuentren en Google sin pagar anuncios eternos. Optimización SEO Técnico, palabras clave y CRO. Página en construcción.
        </p>
      </main>
      <Footer />
    </div>
  );
}
