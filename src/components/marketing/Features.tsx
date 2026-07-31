"use client";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  Layout,
  ShoppingBag,
  CreditCard,
  Cpu,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function Features() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const solutions = [
    {
      id: 1,
      title: "Posicionamiento SEO & Marketing",
      subtitle: "Consigue más clientes y visibilidad online.",
      badgeText: "SEO & Marketing",
      icon: Search,
      href: "/soluciones/posicionamiento-seo",
      ctaText: "Explorar Estrategia SEO",
      bullets: [
        "Optimización SEO para posicionarte sin pagar publicidad.",
        "Estrategia de marketing para conectar con clientes.",
        "Autoridad web y optimización de conversión (CRO)."
      ],
      gradient: "from-[#39FF14] to-[#15B800]",
      shadow: "shadow-[0_20px_40px_rgba(57,255,20,0.35)]"
    },
    {
      id: 2,
      title: "Sitios Web para Profesionales",
      subtitle: "Proyecta autoridad en tu sector y atrae nuevos clientes con una presencia digital que genera confianza.",
      badgeText: "Presencia & Captación",
      icon: Layout,
      href: "/soluciones/sitios-web-profesionales",
      ctaText: "Impulsar mi marca profesional",
      bullets: [
        "Diseño a medida que refleja el prestigio de tus servicios.",
        "Estructura optimizada para captar prospectos 24/7.",
        "Correos corporativos para blindar tu credibilidad."
      ],
      gradient: "from-[#39FF14] to-[#15B800]",
      shadow: "shadow-[0_20px_40px_rgba(57,255,20,0.35)]"
    },
    {
      id: 3,
      title: "E-commerce & Tiendas Online",
      subtitle: "Vende tus productos o servicios en línea de forma segura y sencilla.",
      badgeText: "Ventas Online",
      icon: ShoppingBag,
      href: "/soluciones/e-commerce",
      ctaText: "Conocer Soluciones de E-commerce",
      bullets: [
        "Catálogos de productos optimizados para venta.",
        "Gestión de carritos y catálogos ligeros.",
        "Experiencia de compra rápida y sin fricciones."
      ],
      gradient: "from-[#39FF14] to-[#15B800]",
      shadow: "shadow-[0_20px_40px_rgba(57,255,20,0.35)]"
    },
    {
      id: 4,
      title: "Pasarelas de Pago",
      subtitle: "Integra cobros en línea seguros directo en tu plataforma.",
      badgeText: "Cobros Seguros",
      icon: CreditCard,
      href: "/soluciones/pasarelas-de-pago",
      ctaText: "Ver Integraciones de Pago",
      bullets: [
        "Integración segura de los mejores métodos de pago.",
        "Configuración en tu sitio actual o nuevo.",
        "Suscripciones o pagos únicos."
      ],
      gradient: "from-[#39FF14] to-[#15B800]",
      shadow: "shadow-[0_20px_40px_rgba(57,255,20,0.35)]"
    },
    {
      id: 5,
      title: "Automatización de Procesos",
      subtitle: "Elimina las tareas repetitivas y deja que tu negocio funcione en piloto automático.",
      badgeText: "Eficiencia & IA",
      icon: Cpu,
      href: "/soluciones/automatizacion-de-procesos",
      ctaText: "Descubrir Automatizaciones",
      bullets: [
        "Respuestas automáticas inteligentes para nuevos prospectos.",
        "Conexión directa entre formularios y bases de datos.",
        "Alertas y flujos de trabajo sin intervención manual."
      ],
      gradient: "from-[#39FF14] to-[#15B800]",
      shadow: "shadow-[0_20px_40px_rgba(57,255,20,0.35)]"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Soluciones{" "}
            <span className="text-[#39FF14]">
              tecnológicas reales
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
                className={`group relative flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl overflow-hidden transition-all duration-500 ${isActive
                  ? "-translate-y-2 border-transparent shadow-[0_20px_40px_rgba(57,255,20,0.35)]"
                  : "bg-[#0A0B10] border border-[#0057FF]/30 shadow-[0_10px_30px_rgba(0,87,255,0.25)] hover:-translate-y-2 hover:border-transparent hover:shadow-[0_20px_40px_rgba(57,255,20,0.35)]"
                  }`}
              >
                {/* Background Hover / Scroll Active Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${sol.gradient} transition-opacity duration-500 pointer-events-none ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                />

                {/* Card Internal Layout */}
                <div className="relative z-10 flex flex-col items-center justify-between h-full space-y-5 w-full">
                  {/* Category Badge */}
                  <span
                    className={`text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border font-semibold transition-colors duration-300 ${isActive
                      ? "bg-black/20 border-black/20 text-black"
                      : "bg-[#0057FF]/10 border-[#0057FF]/30 text-[#0057FF] group-hover:bg-black/20 group-hover:border-black/20 group-hover:text-black"
                      }`}
                  >
                    {sol.badgeText}
                  </span>

                  {/* Big Centered Icon */}
                  <div
                    className={`p-4 rounded-2xl border transition-all duration-300 shadow-lg ${isActive
                      ? "bg-black border-black text-[#39FF14] scale-110"
                      : "bg-[#0057FF]/10 border-[#0057FF]/30 text-[#0057FF] group-hover:bg-black group-hover:border-black group-hover:text-[#39FF14] group-hover:scale-110"
                      }`}
                  >
                    <Icon className="size-12 sm:size-14" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-poppins font-extrabold text-lg sm:text-xl transition-colors duration-300 leading-snug ${isActive ? "text-black" : "text-white group-hover:text-black"
                      }`}
                  >
                    {sol.title}
                  </h3>

                  {/* Subtitle / Dolor */}
                  <p
                    className={`font-montserrat text-xs sm:text-sm transition-colors duration-300 leading-relaxed font-medium italic ${isActive ? "text-black/90" : "text-white/70 group-hover:text-black/90"
                      }`}
                  >
                    "{sol.subtitle}"
                  </p>

                  {/* Bullets List */}
                  <div className="w-full text-left space-y-2 pt-3 my-2 border-t border-white/10 group-hover:border-black/15 transition-colors">
                    {sol.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-montserrat font-medium">
                        <CheckCircle2
                          className={`size-3.5 mt-0.5 shrink-0 transition-colors ${isActive ? "text-black" : "text-[#0057FF] group-hover:text-black"
                            }`}
                        />
                        <span
                          className={`leading-tight transition-colors ${isActive ? "text-black/90" : "text-white/80 group-hover:text-black/90"
                            }`}
                        >
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Link / CTA */}
                  <div
                    className={`pt-2 flex items-center justify-center gap-1.5 text-xs font-poppins font-extrabold transition-colors duration-300 ${isActive ? "text-black" : "text-[#0057FF] group-hover:text-black"
                      }`}
                  >
                    <span>{sol.ctaText}</span>
                    <ArrowRight
                      className={`size-4 transition-transform duration-300 ${isActive ? "translate-x-1" : "group-hover:translate-x-1"
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
