"use client";

import { Check, Sparkles } from "lucide-react";

export default function PricingContent() {
  const packages = [
    {
      name: "Consigue más clientes",
      tagline: "MARKETING & LEAD GEN",
      description: "Creamos la infraestructura de marketing digital que tu negocio necesita para capturar prospectos de forma constante.",
      cta: "Cotizar Solución",
      highlight: true,
      badge: "Más Solicitado",
      accentColor: "border-neon-cyan/30 bg-black shadow-[0_0_30px_rgba(0,240,255,0.05)] hover:-translate-y-2",
      btnClass: "bg-neon-cyan text-black hover:bg-white hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]",
      features: [
        "Sitio Web Profesional o Landing Page",
        "Diseño a medida & optimización móvil",
        "Posicionamiento SEO local y nacional",
        "Configuración de Google Business Profile",
        "Embudos y captura cualificada de leads"
      ]
    },
    {
      name: "Vende por Internet",
      tagline: "E-COMMERCE & PROCESAMIENTO",
      description: "Digitaliza tus canales de venta y automatiza el procesamiento y cobro de tus productos de forma segura.",
      cta: "Cotizar Solución",
      highlight: false,
      badge: "",
      accentColor: "border-white/5 bg-bg-card hover:border-neon-emerald/20 hover:-translate-y-2",
      btnClass: "bg-white text-black hover:bg-neon-emerald hover:shadow-[0_0_20px_rgba(0,255,135,0.3)]",
      features: [
        "Tiendas en línea y catálogos digitales",
        "Integración para cobrar desde tu sitio",
        "Checkout ultra rápido sin fricción",
        "Flujos de facturación automáticos",
        "Gestión de inventario y pedidos"
      ]
    },
    {
      name: "Automatiza tu negocio",
      tagline: "IA & INTEGRACIONES",
      description: "Libera a tu equipo de tareas repetitivas y responde a tus prospectos al instante con Inteligencia Artificial.",
      cta: "Cotizar Solución",
      highlight: false,
      badge: "",
      accentColor: "border-white/5 bg-bg-card hover:border-neon-emerald/20 hover:-translate-y-2",
      btnClass: "bg-white text-black hover:bg-neon-emerald hover:shadow-[0_0_20px_rgba(0,255,135,0.3)]",
      features: [
        "Agentes Chatbot de WhatsApp con IA",
        "Integración bidireccional con CRM",
        "Flujos automatizados de email marketing",
        "Cotizadores automáticos y APIs",
        "Generación de reportes automáticos"
      ]
    },
    {
      name: "Haz crecer tu empresa",
      tagline: "SOFTWARE & ANALÍTICA",
      description: "Construimos herramientas internas de negocio adaptadas exactamente a tus necesidades operativas y métricas.",
      cta: "Cotizar Solución",
      highlight: false,
      badge: "",
      accentColor: "border-white/5 bg-bg-card hover:border-neon-emerald/20 hover:-translate-y-2",
      btnClass: "bg-white text-black hover:bg-neon-emerald hover:shadow-[0_0_20px_rgba(0,255,135,0.3)]",
      features: [
        "Plataformas web y software a medida",
        "Dashboards y paneles de control internos",
        "Arquitectura Cloud escalable",
        "Infraestructura DevOps",
        "Auditoría de rendimiento de sistemas"
      ]
    },
    {
      name: "Nosotros nos encargamos",
      tagline: "SOPORTE & MANTENIMIENTO",
      description: "Nos convertimos en tu departamento de tecnología. Mantenemos tus sistemas al día mientras tú creces.",
      cta: "Cotizar Solución",
      highlight: false,
      badge: "",
      accentColor: "border-white/5 bg-bg-card hover:border-neon-emerald/20 hover:-translate-y-2",
      btnClass: "bg-white text-black hover:bg-neon-emerald hover:shadow-[0_0_20px_rgba(0,255,135,0.3)]",
      features: [
        "Hosting premium de alta velocidad",
        "Monitoreo de caídas en tiempo real",
        "Respaldos diarios automáticos",
        "Actualizaciones de seguridad continuas",
        "Soporte técnico y mantenimiento directo"
      ]
    }
  ];

  return (
    <section id="paquetes" className="px-6 py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan"></span>
            <span className="text-xs font-mono text-neon-cyan uppercase tracking-widest">Lo que incluyen</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            Nuestros <br />
            <span className="text-neon-cyan">
              Paquetes de Soluciones.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-text-muted max-w-xl mx-auto font-light">
            Explora las características y entregables clave que conforman cada una de nuestras soluciones tecnológicas.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 ${pkg.accentColor}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-neon-cyan text-black text-xs font-black uppercase tracking-[0.15em] px-4 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="size-3" />
                  {pkg.badge}
                </div>
              )}

              <div>
                {/* Header Card */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className={`text-xs font-mono tracking-widest uppercase block mb-1 ${pkg.highlight ? 'text-neon-cyan' : 'text-neon-emerald'}`}>
                      {pkg.tagline}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{pkg.name}</h3>
                  </div>
                </div>

                <p className="text-base text-text-muted font-light mb-8 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full p-0.5 bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                        <Check className="size-3 text-neon-emerald" />
                      </div>
                      <span className="text-base text-white/90 font-light leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href="#contacto"
                className={`w-full h-14 rounded-lg flex items-center justify-center font-bold text-base transition-all duration-300 ${pkg.btnClass}`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
