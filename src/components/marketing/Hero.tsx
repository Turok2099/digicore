import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const heroImageUrl = "https://res.cloudinary.com/dxbtafe9u/image/upload/v1785445816/portada-3_oo0pom.svg";

  return (
    <>
      {/* Mobile Hero (lg:hidden) - Exact replica of reference design */}
      <section 
        className="lg:hidden relative w-full min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-12 bg-[#030303] text-[#F5F7FF] overflow-hidden"
      >
        {/* Ambient Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#39FF14]/10 blur-[100px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-[#00E5FF]/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-stretch space-y-6 my-auto">
          {/* Top Brand Header Block */}
          <div className="w-full text-left">
            <h2 className="font-orbitron text-4xl sm:text-5xl font-black text-[#39FF14] tracking-wider leading-none">
              DIGICORE
            </h2>
            <h2 className="font-orbitron text-4xl sm:text-5xl font-black text-[#00E5FF] tracking-wider leading-none mt-1">
              STUDIO
            </h2>
            
            {/* Divider Line */}
            <div className="w-full h-[1.5px] bg-[#F5F7FF]/40 my-3" />

            <p className="font-poppins text-xs sm:text-sm font-bold text-[#39FF14] tracking-widest uppercase">
              AGENCIA DE DESARROLLO WEB
            </p>
          </div>

          {/* Central Image Card with White Outline Frame */}
          <div className="relative w-full my-2">
            <div className="relative rounded-tl-[36px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[16px] border-2 border-white/90 p-2 bg-[#030303]/60 backdrop-blur-sm shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
              <img
                src={heroImageUrl}
                alt="Agencia de Desarrollo Web - Digicore Studio"
                className="w-full h-auto object-contain rounded-tl-[28px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px]"
              />
            </div>
          </div>

          {/* Bottom Heading & Description Block */}
          <div className="w-full text-right space-y-3 pt-2">
            <h1 className="font-poppins text-2xl sm:text-3xl font-bold text-[#F5F7FF] leading-tight">
              Páginas Web Profesionales <br />
              <span className="text-[#00E5FF]">Soluciones a Medida</span>
            </h1>
            
            <p className="font-montserrat text-sm text-[#F5F7FF]/90 font-medium leading-relaxed max-w-sm ml-auto">
              En DigicoreStudio somos un equipo de expertos y desarrollo web. Creamos sitios ultra-rapidos optimizados para SEO y conversión.
            </p>

            {/* CTA Button in #00E5FF */}
            <div className="pt-3 flex justify-end">
              <a
                href="#contacto"
                className="h-14 px-6 bg-[#00E5FF] hover:bg-white text-black font-poppins font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_25px_rgba(0,229,255,0.45)] hover:shadow-[0_0_35px_rgba(0,229,255,0.65)] text-sm sm:text-base cursor-pointer"
              >
                Solicita tu propuesta gratuita
                <ArrowRight className="size-4.5 text-black" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Hero (hidden lg:flex) */}
      <section className="hidden lg:flex relative min-h-screen items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-[#030303] text-[#F5F7FF]">
        {/* Background Neon Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)] animate-pulse-slow"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping" />
              <span className="font-poppins text-xs font-bold text-[#39FF14] tracking-widest uppercase">
                Agencia de desarrollo web
              </span>
            </div>

            <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl font-black text-[#F5F7FF] leading-[1.1] tracking-tight">
              Páginas Web Profesionales{" "}
              <span className="text-[#00E5FF]">
                y Soluciones a Medida.
              </span>
            </h1>

            <p className="font-montserrat text-xl text-[#F5F7FF]/80 max-w-xl leading-relaxed">
              En DigicoreStudio somos un equipo de expertos y desarrollo web. Creamos sitios ultra-rápidos optimizados para SEO y conversión.
            </p>

            {/* Quick bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Páginas web optimizadas para conversión",
                "SEO técnico e infraestructura ultra rápida",
                "Integraciones de cobro, CRMs e IA 24/7",
                "Soporte y mantenimiento continuo",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4.5 text-[#39FF14] shrink-0" />
                  <span className="font-montserrat text-base font-semibold text-[#F5F7FF]">{text}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contacto"
                className="h-16 px-8 bg-[#00E5FF] hover:bg-white text-black font-poppins font-extrabold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_30px_rgba(0,229,255,0.45)] hover:shadow-[0_0_40px_rgba(0,229,255,0.65)] hover:-translate-y-0.5 text-base cursor-pointer"
              >
                Solicita tu propuesta gratuita
                <ArrowRight className="size-5 text-black" />
              </a>
              <a
                href="#soluciones"
                className="h-16 px-8 bg-transparent text-[#F5F7FF] font-poppins font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-white/5 border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-300 hover:-translate-y-0.5 text-base"
              >
                Explorar Soluciones
              </a>
            </div>
          </div>

          {/* Right Column: Framed SVG Image with Slide-in Transition */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-slide-in-right">
            {/* Subtle glow behind the frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/20 to-[#39FF14]/10 blur-3xl rounded-full pointer-events-none"></div>

            {/* White/Cyan Outline Wrap Frame */}
            <div className="relative w-full max-w-lg bg-[#030303]/60 border-2 border-white/80 rounded-tl-[40px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md overflow-hidden">
              <img
                src={heroImageUrl}
                alt="Diseño Digicore Studio"
                className="w-full h-auto rounded-tl-[30px] rounded-br-[12px] rounded-tr-[12px] rounded-bl-[12px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
