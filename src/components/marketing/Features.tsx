"use client";

import { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  ShoppingBag,
  Cpu,
  BarChart3,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

export default function Features() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const solutions = [
    {
      id: 1,
      title: "Consigue más clientes",
      tagline: "SITIOS DE ALTA CONVERSIÓN & TRÁFICO",
      icon: TrendingUp,
      badgeText: "Crecimiento",
      href: "/soluciones/consigue-mas-clientes",
      gradient: "from-[#00E5FF] to-[#0055FF]",
      shadow: "shadow-[0_20px_40px_rgba(0,229,255,0.3)]",
      description: "Creamos la infraestructura de marketing digital que tu negocio necesita para capturar y nutrir prospectos de forma constante."
    },
    {
      id: 2,
      title: "Vende por Internet",
      tagline: "E-COMMERCE & PROCESAMIENTO",
      icon: ShoppingBag,
      badgeText: "Monetización",
      href: "/soluciones/vende-por-internet",
      gradient: "from-[#00E5FF] to-[#0055FF]",
      shadow: "shadow-[0_20px_40px_rgba(0,229,255,0.3)]",
      description: "Digitaliza tus canales de venta y automatiza el procesamiento y cobro de tus productos o servicios de forma 100% segura."
    },
    {
      id: 3,
      title: "Automatiza tu negocio",
      tagline: "INTEGRACIONES & BOT CON IA",
      icon: Cpu,
      badgeText: "Eficiencia",
      href: "/soluciones/automatiza-tu-negocio",
      gradient: "from-[#00E5FF] to-[#0055FF]",
      shadow: "shadow-[0_20px_40px_rgba(0,229,255,0.3)]",
      description: "Libera a tu equipo de tareas repetitivas y responde a tus prospectos en segundos usando agentes de Inteligencia Artificial."
    },
    {
      id: 4,
      title: "Haz crecer tu empresa",
      tagline: "SOFTWARE A MEDIDA & ANALÍTICA",
      icon: BarChart3,
      badgeText: "Escala",
      href: "/soluciones/haz-crecer-tu-empresa",
      gradient: "from-[#00E5FF] to-[#0055FF]",
      shadow: "shadow-[0_20px_40px_rgba(0,229,255,0.3)]",
      description: "Construimos herramientas internas de negocio adaptadas exactamente a tus necesidades operativas, control y métricas."
    },
    {
      id: 5,
      title: "Nosotros nos encargamos",
      tagline: "SOPORTE & MANTENIMIENTO",
      icon: ShieldCheck,
      badgeText: "Tranquilidad",
      href: "/soluciones/nosotros-nos-encargamos",
      gradient: "from-[#00E5FF] to-[#0055FF]",
      shadow: "shadow-[0_20px_40px_rgba(0,229,255,0.3)]",
      description: "Nos convertimos en tu departamento de tecnología. Mantenemos tus sistemas al día mientras tú haces crecer tu marca."
    }
  ];

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    // Scroll-based highlight is exclusively for touch/mobile devices where mouse hover is unavailable
    const isTouchDevice = window.matchMedia("(hover: none)").matches || window.innerWidth < 1024;
    if (!isTouchDevice) {
      setActiveCardId(null);
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0.4
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const idStr = entry.target.getAttribute("data-card-id");
        if (!idStr) return;
        const cardId = Number(idStr);

        if (entry.isIntersecting) {
          setActiveCardId(cardId);
        } else {
          setActiveCardId((prev) => (prev === cardId ? null : prev));
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="soluciones" className="px-6 py-24 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
            <span className="h-2 w-2 rounded-full bg-neon-cyan animate-ping" />
            <span className="text-xs font-mono text-neon-cyan uppercase tracking-widest">Nuestras Soluciones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Estructuras sólidas para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#39FF14]">
              problemas reales de negocio.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 font-montserrat max-w-xl mx-auto">
            Explora nuestros servicios integrales diseñados para impulsar la conversión, automatización y crecimiento continuo de tu empresa.
          </p>
        </div>

        {/* Minicards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 items-stretch">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            const isActive = activeCardId === sol.id;

            return (
              <a
                key={sol.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                data-card-id={sol.id}
                href={sol.href}
                className={`group relative flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl overflow-hidden transition-all duration-500 ${
                  isActive
                    ? `-translate-y-2 border-transparent ${sol.shadow}`
                    : `bg-[#0A0B10] border border-white/10 hover:-translate-y-2 hover:border-transparent ${sol.shadow}`
                }`}
              >
                {/* Background Hover / Scroll Active Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${sol.gradient} transition-opacity duration-500 pointer-events-none ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Card Internal Layout */}
                <div className="relative z-10 flex flex-col items-center justify-between h-full space-y-6 w-full">
                  {/* Category Badge */}
                  <span
                    className={`text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border font-semibold transition-colors duration-300 ${
                      isActive
                        ? "bg-black/20 border-black/20 text-black"
                        : "bg-white/5 border-white/10 text-white/70 group-hover:bg-black/20 group-hover:border-black/20 group-hover:text-black"
                    }`}
                  >
                    {sol.badgeText}
                  </span>

                  {/* Big Centered Icon */}
                  <div
                    className={`p-4 rounded-2xl border transition-all duration-300 shadow-lg ${
                      isActive
                        ? "bg-black border-black text-[#00E5FF] scale-110"
                        : "bg-white/[0.04] border-white/10 text-[#00E5FF] group-hover:bg-black group-hover:border-black group-hover:text-[#00E5FF] group-hover:scale-110"
                    }`}
                  >
                    <Icon className="size-12 sm:size-14" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-poppins font-extrabold text-xl sm:text-2xl transition-colors duration-300 leading-snug ${
                      isActive ? "text-black" : "text-white group-hover:text-black"
                    }`}
                  >
                    {sol.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`font-montserrat text-xs sm:text-sm transition-colors duration-300 leading-relaxed font-normal flex-grow ${
                      isActive ? "text-black/90" : "text-white/70 group-hover:text-black/90"
                    }`}
                  >
                    {sol.description}
                  </p>

                  {/* Link / CTA */}
                  <div
                    className={`pt-2 flex items-center justify-center gap-1.5 text-xs font-poppins font-extrabold transition-colors duration-300 ${
                      isActive ? "text-black" : "text-neon-cyan group-hover:text-black"
                    }`}
                  >
                    <span>Explorar solución</span>
                    <ArrowRight
                      className={`size-4 transition-transform duration-300 ${
                        isActive ? "translate-x-1" : "group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
