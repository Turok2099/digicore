import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 md:px-12 overflow-hidden bg-black">
      {/* Background Neon Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)] animate-pulse-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & Value Proposition */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Consigue{" "}
            <span className="text-neon-cyan">
              nuevos clientes
            </span>{" "}
            y automatiza tus procesos.
          </h1>

          <p className="text-xl text-text-muted max-w-xl leading-relaxed">
            Diseñamos, integramos y mantenemos la infraestructura digital de profesionistas independientes y PYMEs. Delega toda la complejidad técnica y concéntrate en hacer crecer tu negocio.
          </p>

          {/* Quick bullet points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Bots e IA de atención 24/7",
              "Embudos de venta automatizados",
              "Integraciones de cobro y CRMs",
              "Soporte y optimización continua",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="size-4.5 text-neon-emerald shrink-0" />
                <span className="text-base font-semibold text-white/95">{text}</span>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contacto"
              className="h-16 px-8 bg-neon-cyan text-black font-extrabold rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:-translate-y-0.5 text-base"
            >
              Cotiza tu proyecto
              <ArrowRight className="size-5" />
            </a>
            <a
              href="#soluciones"
              className="h-16 px-8 bg-transparent text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 text-base"
            >
              Explorar Soluciones
            </a>
          </div>
        </div>

        {/* Right Column: Framed SVG Image with Slide-in Transition */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-slide-in-right">
          {/* Subtle glow behind the frame */}
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/15 to-transparent blur-3xl rounded-full pointer-events-none"></div>

          {/* Neon Border Wrap (Matches the old console frame style) */}
          <div className="relative w-full max-w-lg bg-black/40 border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md overflow-hidden">
            {/* Glossy top decoration */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent"></div>

            <img
              src="/Diseño sin título.svg"
              alt="Diseño Digicore Studio"
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
