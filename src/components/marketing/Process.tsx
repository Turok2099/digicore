"use client";

import { Eye, Settings, RefreshCw } from "lucide-react";

export default function Process() {
  const steps = [
    {
      stepNumber: "01",
      title: "Consultoría y Auditoría Digital",
      description: "Analizamos a fondo tu negocio, procesos manuales actuales y canales de adquisición para estructurar la estrategia tecnológica que de verdad resuelva tus cuellos de botella.",
      icon: Eye,
      color: "text-neon-cyan",
      borderColor: "group-hover:border-neon-cyan/50",
      shadowColor: "group-hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]",
    },
    {
      stepNumber: "02",
      title: "Arquitectura e Integración",
      description: "Diseñamos y programamos tus sistemas. Conectamos pasarelas de pago, CRMs y configuramos agentes de Inteligencia Artificial para automatizar tus flujos de trabajo sin fricción.",
      icon: Settings,
      color: "text-neon-emerald",
      borderColor: "group-hover:border-neon-emerald/50",
      shadowColor: "group-hover:shadow-[0_0_15px_rgba(0,255,135,0.1)]",
    },
    {
      stepNumber: "03",
      title: "Despliegue, Soporte y Optimización",
      description: "Lanzamos tus plataformas en servidores cloud de alto rendimiento. Monitoreamos de forma activa y realizamos mejoras continuas para asegurar que tu negocio nunca se detenga.",
      icon: RefreshCw,
      color: "text-neon-cyan",
      borderColor: "group-hover:border-neon-cyan/50",
      shadowColor: "group-hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]",
    },
  ];

  return (
    <section id="proceso" className="px-6 py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-emerald"></span>
            <span className="text-xs font-mono text-neon-emerald uppercase tracking-widest">Metodología Estandarizada</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Nuestra Ruta hacia la <br />
            <span className="text-neon-emerald">
              Eficiencia Operativa.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-text-muted max-w-xl mx-auto mt-4 font-light">
            Un proceso de 3 fases diseñado para darte visibilidad completa, evitar retrasos y garantizar software de calidad de producción.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-neon-cyan/20 via-neon-emerald/20 to-neon-cyan/20 -translate-y-12 z-0"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="group relative bg-bg-card border border-white/5 rounded-2xl p-8 hover:bg-black/30 transition-all duration-300 z-10 flex flex-col justify-between"
              >
                {/* Glow effects on hover */}
                <div className={`absolute inset-0 border border-transparent rounded-2xl transition-all duration-300 ${step.borderColor} ${step.shadowColor}`}></div>

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-8 relative">
                    <span className={`text-4xl font-mono font-black ${step.color} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}>
                      {step.stepNumber}
                    </span>
                    <div className="p-3 bg-black border border-white/10 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className={`size-6 ${step.color}`} />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/90">
                    {step.title}
                  </h3>
                  <p className="text-base text-text-muted leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Subtitle indicator */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-text-muted">Fase de entrega</span>
                  <span className={`text-xs font-mono uppercase font-bold tracking-widest ${step.color}`}>Garantizada</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
