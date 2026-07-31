"use client";

import { useState } from "react";
import { CheckCircle, Loader2, Check } from "lucide-react";

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    tipoNegocio: "Profesionista",
    obstaculo: "Conseguir clientes",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Ocurrió un error al enviar tu solicitud.");
      }

      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "Error al conectar con el servidor.");
      setStatus("error");
    }
  };

  const businessTypes = ["Profesionista", "PYME", "Empresa"];
  const obstacles = [
    { value: "Conseguir clientes", label: "Conseguir más clientes" },
    { value: "Procesos manuales lentos", label: "Procesos manuales lentos / Operación ineficiente" },
    { value: "No tengo sistema de cobros", label: "No tengo pasarelas de pago o cobros automáticos" },
    { value: "Mi web actual es lenta", label: "Mi sitio web actual es lento / No vende" }
  ];

  return (
    <section id="contacto" className="px-6 py-24 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">

        {/* Highlithed Brand Blue Card Container (#0057FF) */}
        <div className="bg-[#0057FF] rounded-3xl p-8 sm:p-12 text-white shadow-[0_20px_60px_rgba(0,87,255,0.45)] border border-white/20 relative overflow-hidden">

          {/* Form Header Info (Integrated inside Card) */}
          <div className="space-y-4 mb-8 text-left">
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-white tracking-wide leading-tight">
              ¿Hablamos sobre cómo escalar tu negocio?
            </h2>
            <p className="text-white/90 font-montserrat text-sm sm:text-base font-medium leading-relaxed">
              Cuéntanos brevemente sobre tu proyecto y tu mayor desafío actual. Analizaremos tu caso sin costo y te diremos exactamente qué necesitas para atraer más clientes y automatizar tu operación.
            </p>

            {/* Bullet Points */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="flex items-center gap-2 bg-black/20 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-montserrat font-bold text-white border border-white/10">
                <Check className="size-4 text-[#39FF14] shrink-0" />
                <span>Sin costo inicial ni ataduras.</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-montserrat font-bold text-white border border-white/10">
                <Check className="size-4 text-[#39FF14] shrink-0" />
                <span>Propuesta clara adaptada a tu presupuesto y metas.</span>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/20 my-8" />

          {/* Success State vs Active Form */}
          {status === "success" ? (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="size-16 bg-white text-[#0057FF] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="size-8 text-[#0057FF]" />
              </div>
              <h3 className="text-2xl font-poppins font-black text-white">¡Solicitud Recibida!</h3>
              <p className="text-sm sm:text-base text-white/90 max-w-md mx-auto font-montserrat font-medium leading-relaxed">
                Gracias por tu interés, <strong className="text-white">{formData.nombre}</strong>. Analizaremos tu obstáculo actual ("{formData.obstaculo}") y te contactaremos a <strong className="text-white">{formData.correo}</strong> muy pronto.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setFormData({ nombre: "", correo: "", tipoNegocio: "Profesionista", obstaculo: "Conseguir clientes" });
                }}
                className="mt-6 text-sm text-[#39FF14] underline font-mono font-bold hover:text-white cursor-pointer"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm font-montserrat">
                  {errorMessage}
                </div>
              )}
              {/* Name field */}
              <div className="space-y-2">
                <label htmlFor="nombre" className="text-xs uppercase tracking-widest text-white/90 font-extrabold block">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  placeholder="Ej. Carlos Mendoza"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full h-14 px-4 rounded-xl bg-black/30 border border-white/20 focus:border-white focus:bg-black/50 text-white font-medium text-base transition-all placeholder:text-white/40 focus:outline-none"
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label htmlFor="correo" className="text-xs uppercase tracking-widest text-white/90 font-extrabold block">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  required
                  placeholder="carlos@miempresa.com"
                  value={formData.correo}
                  onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                  className="w-full h-14 px-4 rounded-xl bg-black/30 border border-white/20 focus:border-white focus:bg-black/50 text-white font-medium text-base transition-all placeholder:text-white/40 focus:outline-none"
                />
              </div>

              {/* Business Type selector */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/90 font-extrabold block">
                  Tipo de Negocio
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {businessTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, tipoNegocio: type })}
                      className={`h-12 rounded-xl border text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                        formData.tipoNegocio === type
                          ? "bg-white text-[#0057FF] border-white shadow-md"
                          : "bg-black/30 text-white border-white/20 hover:bg-black/40"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Obstacle selector */}
              <div className="space-y-2">
                <label htmlFor="obstaculo" className="text-xs uppercase tracking-widest text-white/90 font-extrabold block">
                  ¿Cuál es tu mayor obstáculo actual?
                </label>
                <select
                  id="obstaculo"
                  value={formData.obstaculo}
                  onChange={(e) => setFormData({ ...formData, obstaculo: e.target.value })}
                  className="w-full h-14 px-4 rounded-xl bg-black/30 border border-white/20 focus:border-white focus:bg-black/50 text-white font-medium text-base transition-all appearance-none focus:outline-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.25rem',
                    backgroundRepeat: 'no-repeat',
                    paddingRight: '2.5rem'
                  }}
                >
                  {obstacles.map((obs) => (
                    <option key={obs.value} value={obs.value} className="bg-[#0057FF] text-white">
                      {obs.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-16 bg-[#39FF14] hover:bg-white text-black font-poppins font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_30px_rgba(57,255,20,0.35)] hover:shadow-[0_0_40px_rgba(57,255,20,0.55)] disabled:opacity-50 text-base sm:text-lg cursor-pointer"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="size-5.5 animate-spin text-black" />
                    Procesando Solicitud...
                  </>
                ) : (
                  <span>Agendar Auditoría Tecnológica</span>
                )}
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
