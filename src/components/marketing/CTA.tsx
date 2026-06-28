"use client";

import { useState } from "react";
import { Send, CheckCircle, Sparkles, Loader2 } from "lucide-react";

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    tipoNegocio: "Profesionista",
    obstaculo: "Conseguir clientes",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simular envío de datos a backend / CRM
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  const businessTypes = ["Profesionista", "PYME", "Empresa"];
  const obstacles = [
    { value: "Conseguir clientes", label: "Conseguir más clientes" },
    { value: "Procesos manuales lentos", label: "Procesos manuales lentos / Operación ineficiente" },
    { value: "No tengo sistema de cobros", label: "No tengo pasarelas de pago o cobros automáticos" },
    { value: "Mi web actual es lenta", label: "Mi sitio web actual es lento / No vende" }
  ];

  return (
    <section id="contacto" className="px-6 py-24 bg-black relative border-t border-white/5">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">

            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              ¿Listo para dar el salto digital?
            </h2>
            <p className="text-text-muted text-base leading-relaxed font-light">
              Cuéntanos brevemente sobre tu negocio y tu mayor obstáculo. Nuestro equipo analizará tu caso sin costo y te enviaremos una propuesta de arquitectura tecnológica e IA a la medida.
            </p>
            <div className="space-y-3 text-sm text-text-muted">
              <div className="flex items-center gap-2.5">
                <div className="size-2 rounded-full bg-neon-emerald"></div>
                <span>Auditoría estratégica en menos de 48 horas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="size-2 rounded-full bg-neon-emerald"></div>
                <span>100% personalizado para tu tipo de negocio</span>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="bg-bg-card border border-white/5 p-8 rounded-2xl relative overflow-hidden shadow-2xl">
              {/* Glossy top border */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent"></div>

              {status === "success" ? (
                <div className="text-center py-10 space-y-4 animate-fade-in">
                  <div className="size-16 bg-neon-emerald/10 border border-neon-emerald/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-neon-emerald size-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¡Solicitud Recibida!</h3>
                  <p className="text-base text-text-muted max-w-sm mx-auto leading-relaxed">
                    Gracias por tu interés, <strong className="text-white">{formData.nombre}</strong>. Analizaremos tu obstáculo actual ("{formData.obstaculo}") y te contactaremos a <strong className="text-white">{formData.correo}</strong> muy pronto.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ nombre: "", correo: "", tipoNegocio: "Profesionista", obstaculo: "Conseguir clientes" });
                    }}
                    className="mt-6 text-sm text-neon-cyan hover:underline font-mono"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm uppercase tracking-widest text-text-muted font-bold block">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      placeholder="Ej. Carlos Mendoza"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full h-14 px-4 rounded-lg bg-black border border-white/10 hover:border-white/20 focus:border-neon-cyan focus:outline-none text-white text-base transition-all placeholder:text-white/20"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="correo" className="text-sm uppercase tracking-widest text-text-muted font-bold block">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="correo"
                      required
                      placeholder="carlos@miempresa.com"
                      value={formData.correo}
                      onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                      className="w-full h-14 px-4 rounded-lg bg-black border border-white/10 hover:border-white/20 focus:border-neon-cyan focus:outline-none text-white text-base transition-all placeholder:text-white/20"
                    />
                  </div>

                  {/* Business Type selector */}
                  <div className="space-y-2">
                    <label className="text-sm uppercase tracking-widest text-text-muted font-bold block">
                      Tipo de Negocio
                    </label>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {businessTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, tipoNegocio: type })}
                          className={`h-12 rounded-lg border text-xs sm:text-sm font-bold transition-all ${formData.tipoNegocio === type
                              ? "bg-white text-black border-white"
                              : "bg-black text-text-muted border-white/10 hover:border-white/20 hover:text-white"
                            }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Obstacle selector */}
                  <div className="space-y-2">
                    <label htmlFor="obstaculo" className="text-sm uppercase tracking-widest text-text-muted font-bold block">
                      ¿Cuál es tu mayor obstáculo actual?
                    </label>
                    <select
                      id="obstaculo"
                      value={formData.obstaculo}
                      onChange={(e) => setFormData({ ...formData, obstaculo: e.target.value })}
                      className="w-full h-14 px-4 rounded-lg bg-black border border-white/10 focus:border-neon-cyan focus:outline-none text-white text-base transition-all appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.25rem',
                        backgroundRepeat: 'no-repeat',
                        paddingRight: '2.5rem'
                      }}
                    >
                      {obstacles.map((obs) => (
                        <option key={obs.value} value={obs.value} className="bg-black text-white">
                          {obs.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full h-16 bg-neon-cyan text-black font-extrabold rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] disabled:opacity-50 text-base"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-5.5 animate-spin" />
                        Procesando Solicitud...
                      </>
                    ) : (
                      <>
                        <span>Agendar Auditoría Tecnológica</span>
                        <Send className="size-4.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
