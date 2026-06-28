"use client";

import { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  ShoppingBag,
  Cpu,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Globe,
  Search,
  MessageSquare,
  DollarSign,
  Workflow,
  Database,
  Layers,
  Activity,
  HardDrive,
  Cloud,
  Zap,
  Rocket,
  ShoppingCart,
  Settings,
  Wrench,
  ChevronRight
} from "lucide-react";

export default function Features() {
  const [activeId, setActiveId] = useState(1);
  const [displayId, setDisplayId] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const solutions = [
    {
      id: 1,
      title: "Consigue más clientes",
      tagline: "SITIOS DE ALTA CONVERSIÓN & TRÁFICO",
      icon: TrendingUp,
      accentColor: "text-neon-cyan",
      borderColor: "group-hover:border-neon-cyan/30",
      hoverClass: "neon-border",
      badgeText: "Crecimiento",
      badgeIcon: Rocket,
      href: "/soluciones/consigue-mas-clientes",
      features: [
        { label: "Sitios web enfocados en conversión", icon: Globe },
        { label: "Posicionamiento SEO local y nacional", icon: Search },
        { label: "Optimización de Google Business Profile", icon: Activity },
        { label: "Embudos & Captura cualificada de leads", icon: Workflow }
      ],
      description: "Creamos la infraestructura de marketing digital que tu negocio necesita para capturar y nutrir prospectos de forma constante."
    },
    {
      id: 2,
      title: "Vende por Internet",
      tagline: "E-COMMERCE & PROCESAMIENTO",
      icon: ShoppingBag,
      accentColor: "text-neon-emerald",
      borderColor: "group-hover:border-neon-emerald/30",
      hoverClass: "neon-border-emerald",
      badgeText: "Monetización",
      badgeIcon: ShoppingCart,
      href: "/soluciones/vende-por-internet",
      features: [
        { label: "Tiendas en línea & Catálogos digitales", icon: Globe },
        { label: "Cobra desde tu sitio web", icon: DollarSign },
        { label: "Checkout ultra rápido sin fricción", icon: Zap },
        { label: "Flujos de facturación automáticos", icon: Database }
      ],
      description: "Digitaliza tus canales de venta y automatiza el procesamiento y cobro de tus productos o servicios de forma 100% segura."
    },
    {
      id: 3,
      title: "Automatiza tu negocio",
      tagline: "INTEGRACIONES & BOT DE WHATSAPP CON IA",
      icon: Cpu,
      accentColor: "text-neon-cyan",
      hoverClass: "neon-border",
      badgeText: "Eficiencia",
      badgeIcon: Settings,
      href: "/soluciones/automatiza-tu-negocio",
      features: [
        { label: "Bots de WhatsApp impulsados por IA", icon: MessageSquare },
        { label: "Sincronización bidireccional con CRM", icon: Database },
        { label: "Flujos automatizados de email marketing", icon: Workflow },
        { label: "Generación automática de presupuestos", icon: DollarSign }
      ],
      description: "Libera a tu equipo de tareas repetitivas y responde a tus prospectos en segundos usando agentes de Inteligencia Artificial."
    },
    {
      id: 4,
      title: "Haz crecer tu empresa",
      tagline: "SOFTWARE A MEDIDA & ANALÍTICA",
      icon: BarChart3,
      accentColor: "text-neon-emerald",
      hoverClass: "neon-border-emerald",
      badgeText: "Escala",
      badgeIcon: TrendingUp,
      href: "/soluciones/haz-crecer-tu-empresa",
      features: [
        { label: "Plataformas web & Software a medida", icon: Layers },
        { label: "Dashboards y paneles de control internos", icon: BarChart3 },
        { label: "Arquitectura Cloud e Infraestructura DevOps", icon: Cloud },
        { label: "Auditoría de rendimiento de sistemas", icon: Activity }
      ],
      description: "Construimos herramientas internas de negocio adaptadas exactamente a tus necesidades operativas, control y métricas."
    },
    {
      id: 5,
      title: "Nosotros nos encargamos",
      tagline: "SOPORTE, SEGURIDAD & MANTENIMIENTO",
      icon: ShieldCheck,
      accentColor: "text-neon-cyan",
      hoverClass: "neon-border",
      badgeText: "Tranquilidad",
      badgeIcon: Wrench,
      href: "/soluciones/nosotros-nos-encargamos",
      features: [
        { label: "Hosting premium de alta velocidad", icon: Globe },
        { label: "Monitoreo de caídas en tiempo real", icon: Activity },
        { label: "Respaldos diarios automáticos", icon: HardDrive },
        { label: "Actualizaciones de seguridad continuas", icon: ShieldCheck }
      ],
      description: "Nos convertimos en tu departamento de tecnología. Mantenemos tus sistemas al día mientras tú haces crecer tu marca."
    }
  ];

  // Auto-play cycling effect with smooth fade cross-over
  useEffect(() => {
    if (isPaused) return;

    autoplayTimer.current = setInterval(() => {
      const nextId = activeId + 1 > solutions.length ? 1 : activeId + 1;

      // Start fade out
      setIsFading(true);

      setTimeout(() => {
        setDisplayId(nextId);
        setActiveId(nextId);
        // Start fade in
        setIsFading(false);
      }, 300); // duration of fade-out transition

    }, 5000); // 5 seconds per slide

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [isPaused, activeId, solutions.length]);

  const selectSolution = (id: number) => {
    if (id === displayId || isFading) return;

    // Reset autoplay timer
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    setIsPaused(true);

    // Start fade out
    setIsFading(true);

    setTimeout(() => {
      setDisplayId(id);
      setActiveId(id);
      setIsFading(false);
    }, 250);

    // Resume autoplay after 12 seconds of inactivity
    setTimeout(() => {
      setIsPaused(false);
    }, 12000);
  };

  const displaySolution = solutions.find((sol) => sol.id === displayId) || solutions[0];
  const DisplayIcon = displaySolution.icon;

  return (
    <section id="soluciones" className="px-6 py-24 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan"></span>
            <span className="text-xs font-mono text-neon-cyan uppercase tracking-widest">Nuestras Soluciones</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Estructuras sólidas para <br />
            <span className="text-neon-cyan">
              problemas reales de negocio.
            </span>
          </h2>
        </div>
        {/* Layout: Split Menu List on Left, Active Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column: Vertical Menu List on Desktop, Horizontal Scroll on Mobile */}
          <div className="lg:col-span-5 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-3 lg:space-y-3 lg:gap-0 order-1 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0 scroll-smooth">
            {solutions.map((sol) => {
              const isSelected = sol.id === activeId;
              const isEmerald = sol.id === 2 || sol.id === 4;

              // Dynamic neon hover and active styles
              const activeTextClass = isSelected
                ? isEmerald
                  ? "text-neon-emerald font-black border-b-2 border-b-neon-emerald lg:border-b-0 lg:border-l-2 lg:border-l-neon-emerald pl-1 lg:pl-4"
                  : "text-neon-cyan font-black border-b-2 border-b-neon-cyan lg:border-b-0 lg:border-l-2 lg:border-l-neon-cyan pl-1 lg:pl-4"
                : "text-white/40 hover:text-white/80 border-b-2 border-transparent lg:border-b-0 lg:border-l-2 lg:border-l-transparent pl-1 lg:hover:pl-2";

              return (
                <button
                  key={sol.id}
                  onClick={() => selectSolution(sol.id)}
                  className={`shrink-0 py-3 lg:py-4 px-3 rounded-lg flex items-center justify-between transition-all duration-300 group cursor-pointer text-left ${activeTextClass}`}
                >
                  <div className="flex items-center gap-2 lg:gap-4">
                    <span className="text-xs font-mono opacity-50">0{sol.id}</span>
                    <span className="text-sm sm:text-base lg:text-lg tracking-wide whitespace-nowrap lg:whitespace-normal">{sol.title}</span>
                  </div>
                  <ChevronRight
                    className={`hidden lg:block size-4 transition-all duration-300 opacity-0 group-hover:opacity-100 ${isSelected ? "opacity-100 translate-x-1 text-inherit" : "text-white/40"
                      }`}
                  />
                </button>
              );
            })}
          </div>          {/* Right Column: Display Active Card with smooth fade-in */}
          <div
            className="lg:col-span-7 flex flex-col justify-center order-2 h-full min-h-[400px] lg:min-h-[460px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* The transition CSS handles the smooth opacity and scale fade */}
            <div
              className={`w-full h-full bg-bg-card rounded-2xl p-6 sm:p-10 border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between transition-all duration-300 ease-in-out ${isFading ? "opacity-0 scale-[0.985] blur-[2px]" : "opacity-100 scale-100 blur-0"
                }`}
            >
              {/* Top border accent line */}
              <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-${displaySolution.accentColor === 'text-neon-cyan' ? 'neon-cyan/30' : 'neon-emerald/30'} to-transparent`}></div>

              <div className="space-y-6">
                {/* Tagline & Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/5">
                  <span className="text-[12px] sm:text-xs font-mono tracking-widest text-text-muted">{displaySolution.tagline}</span>
                  <span className="text-[12px] sm:text-xs px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-white/90 flex items-center gap-1.5 font-semibold font-mono uppercase tracking-wider w-fit">
                    <displaySolution.badgeIcon className="size-3.5" />
                    {displaySolution.badgeText}
                  </span>
                </div>

                {/* Main Card Icon and Title */}
                <div className="flex items-center gap-4">
                  <div className={`p-4 bg-black border border-white/10 rounded-xl ${displaySolution.accentColor} shadow-[0_0_15px_rgba(255,255,255,0.02)]`}>
                    <DisplayIcon className="size-8" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white">
                    {displaySolution.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-text-muted leading-relaxed font-light">
                  {displaySolution.description}
                </p>

                {/* Sub Features Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {displaySolution.features.map((feat, idx) => {
                    const FeatIcon = feat.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3 bg-black/30 border border-white/[0.02] p-3 sm:p-4 rounded-lg">
                        <FeatIcon className="size-5 text-text-muted shrink-0" />
                        <span className="text-sm sm:text-base text-white/90 font-light">{feat.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom CTA to subpage */}
              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-text-muted">Desarrollo Profesional</span>
                <a
                  href={displaySolution.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-bold text-base transition-all duration-300 hover:bg-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                >
                  Explorar Solución
                  <ArrowRight className="size-5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
