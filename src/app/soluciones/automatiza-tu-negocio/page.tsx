"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Terminal, Bot, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AutomatizaTuNegocio() {
  const [leadsCount, setLeadsCount] = useState(1280);
  const [activeBots, setActiveBots] = useState(4);
  const [savedHours, setSavedHours] = useState(320);

  // Micro-interactividad para los contadores
  useEffect(() => {
    const interval = setInterval(() => {
      setLeadsCount((prev) => prev + (Math.random() > 0.7 ? 1 : 0));
      setSavedHours((prev) => prev + (Math.random() > 0.85 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased flex flex-col justify-between">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Service Details */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-6xl font-black text-neon-cyan">
              Automatiza tu negocio
            </h1>
            <p className="text-xl text-text-muted leading-relaxed font-light">
              Conectamos las herramientas de tu negocio e implementamos Inteligencia Artificial para que trabajen por ti. Deja atrás las tareas manuales repetitivas y responde a tus clientes de inmediato, a cualquier hora.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-white">¿Qué incluye esta solución?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Bots de WhatsApp con IA integrada",
                  "Sincronización automatizada con CRM",
                  "Flujos y secuencias automáticas de Email",
                  "Generación de presupuestos y PDFs automáticos",
                  "Integraciones de APIs y bases de datos",
                  "Notificaciones en tiempo real (Slack/Discord)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-neon-cyan shrink-0" />
                    <span className="text-base sm:text-lg text-white/90 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-extrabold text-base hover:bg-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300"
              >
                Cotizar Automatización
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Console Simulator */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-bg-card border border-white/5 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
              {/* Glossy top decoration */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent"></div>

              {/* Console Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Terminal className="text-neon-cyan size-4.5" />
                  <span className="text-xs font-mono font-bold tracking-wider text-white">DIGICORE_CONSOLE v1.0.4</span>
                </div>
                <div className="flex items-center gap-1.5 bg-neon-emerald/10 px-2.5 py-0.5 rounded-full border border-neon-emerald/20">
                  <span className="size-1.5 rounded-full bg-neon-emerald animate-pulse"></span>
                  <span className="text-[9px] font-mono text-neon-emerald font-bold uppercase tracking-wider">ONLINE</span>
                </div>
              </div>

              {/* Simulated Live KPIs */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-black/40 border border-white/5 p-4 rounded-xl">
                  <p className="text-[10px] text-text-muted font-mono uppercase">Leads Calificados</p>
                  <p className="text-2xl font-black text-white mt-1 font-mono tracking-tight">
                    {leadsCount.toLocaleString()}
                  </p>
                  <div className="text-[10px] text-neon-emerald font-semibold mt-1 flex items-center gap-1">
                    <span>+18.4%</span>
                  </div>
                </div>

                <div className="bg-black/40 border border-white/5 p-4 rounded-xl">
                  <p className="text-[10px] text-text-muted font-mono uppercase">Ahorro Operativo</p>
                  <p className="text-2xl font-black text-white mt-1 font-mono tracking-tight">
                    {savedHours} hrs
                  </p>
                  <div className="text-[10px] text-neon-cyan font-semibold mt-1 flex items-center gap-1">
                    <span>Optimizado</span>
                  </div>
                </div>
              </div>

              {/* Live Chatbot Console Logger */}
              <div className="mt-6 space-y-3 bg-black/80 border border-white/5 p-4 rounded-xl font-mono text-[11px] leading-relaxed relative overflow-hidden">
                <div className="flex items-center justify-between text-[10px] text-text-muted border-b border-white/5 pb-2">
                  <span className="flex items-center gap-1.5"><Bot className="size-3 text-neon-cyan" /> IA WhatsApp Agent</span>
                  <span>Activos: {activeBots}</span>
                </div>
                
                <div className="space-y-2">
                  <p className="text-white/40">&gt; [14:42:01] Iniciando agente de ventas...</p>
                  <p className="text-neon-cyan">&gt; [14:42:05] Chat entrante desde WhatsApp (+52 55...)</p>
                  <p className="text-neon-emerald">&gt; [14:42:08] Bot IA: "Hola, detectamos tu interés en el Paquete Premium..."</p>
                  <p className="text-white">&gt; [14:42:15] Cliente: "Me interesa automatizar mi CRM de clientes"</p>
                  <p className="text-neon-emerald animate-pulse">&gt; [14:42:18] Bot IA: Generando enlace de cotización automática...</p>
                </div>
              </div>

              {/* Technical Perf indicator */}
              <div className="mt-6 flex items-center justify-between text-xs pt-4 border-t border-white/5 text-text-muted">
                <div className="flex items-center gap-2">
                  <Zap className="text-neon-emerald size-4" />
                  <span>Tiempo de respuesta: <strong className="text-white">0.4s</strong></span>
                </div>
                <span className="font-semibold text-white/95">Next.js Turbopack</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
