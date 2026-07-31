"use client";

import { useState } from "react";
import {
  Sparkles,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Send,
  HelpCircle,
  BarChart2,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Mail,
  User,
  Phone
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: { label: string; value: string }[];
}

export default function DiagnosticQuiz() {
  const [step, setStep] = useState<number>(0); // 0 = Intro, 1-5 = Questions, 6 = Analyzing, 7 = Results/Lead Form, 8 = Success
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [leadForm, setLeadForm] = useState({ nombre: "", correo: "", whatsapp: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "¿Actualmente tu negocio cuenta con un sitio web profesional?",
      options: [
        { label: "Sí, pero es lento o anticuado", value: "lento_anticuado" },
        { label: "No tengo sitio web", value: "sin_web" },
        { label: "Solo uso redes sociales (Instagram / Facebook)", value: "solo_redes" },
      ],
    },
    {
      id: 2,
      question: "¿Cómo llegan la mayoría de tus clientes hoy en día?",
      options: [
        { label: "Por recomendación o boca a boca", value: "boca_a_boca" },
        { label: "Por redes sociales", value: "redes_sociales" },
        { label: "No tengo un flujo constante de clientes", value: "sin_flujo" },
      ],
    },
    {
      id: 3,
      question: "Si tienes web, ¿te genera ventas o contactos automáticos cada semana?",
      options: [
        { label: "No me trae nada de prospectos", value: "sin_ventas" },
        { label: "A veces trae alguno ocasional", value: "ocasional" },
        { label: "No tengo web aún", value: "sin_web" },
      ],
    },
    {
      id: 4,
      question: "¿Qué tipo de correo utilizas para tu marca?",
      options: [
        { label: "Gmail o correo personal", value: "gmail" },
        { label: "Hotmail / Yahoo personal", value: "hotmail" },
        { label: "Quiero un correo corporativo profesional (@miempresa.com)", value: "quiero_corporativo" },
      ],
    },
    {
      id: 5,
      question: "¿Cuál es tu mayor prioridad para los próximos meses?",
      options: [
        { label: "Conseguir más clientes por Google sin pagar anuncios eternos", value: "clientes_google" },
        { label: "Automatizar procesos y ahorrar horas de trabajo", value: "automatizar" },
        { label: "Vender mis productos o servicios en línea 24/7", value: "vender_online" },
      ],
    },
  ];

  const handleSelectOption = (questionId: number, optionValue: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionValue }));
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else if (step === 5) {
      setStep(6); // Go to loader analyzing screen
      setTimeout(() => {
        setStep(7); // Show results & lead form
      }, 1800);
    }
  };

  const handleBack = () => {
    if (step > 1 && step <= 5) {
      setStep(step - 1);
    } else if (step === 1) {
      setStep(0);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(8); // Show final success confirmation
    }, 1500);
  };

  const currentQuestion = questions.find((q) => q.id === step);
  const progressPercentage = (step / 5) * 100;

  return (
    <section id="diagnostico" className="px-6 py-24 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Intro View / Hook Banner (Step 0) */}
        {step === 0 && (
          <div className="bg-[#0A0B10] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {/* Top Accent Gloss */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-[#39FF14]" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-white tracking-wide leading-tight">
              ¿Quieres saber si necesitas un <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#39FF14]">
                sitio web optimizado?
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/70 font-montserrat max-w-xl mx-auto leading-relaxed">
              Lo sabrás en solo <strong className="text-white">5 preguntas rápidas</strong>. Analizaremos tu presencia actual y te entregaremos un informe estratégico sin costo.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setStep(1)}
                className="h-16 px-8 bg-[#00E5FF] hover:bg-white text-black font-poppins font-extrabold rounded-xl inline-flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] hover:-translate-y-0.5 text-base cursor-pointer"
              >
                <span>Iniciar diagnóstico gratuito</span>
                <ChevronRight className="size-5 text-black" />
              </button>
            </div>
          </div>
        )}

        {/* Step 1 to 5: Quiz Questions Flow */}
        {step >= 1 && step <= 5 && currentQuestion && (
          <div className="bg-[#0A0B10] border border-[#0057FF]/30 rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-[0_15px_40px_rgba(0,87,255,0.15)] transition-all duration-300">
            {/* Top Progress Bar */}
            <div className="w-full bg-white/5 h-2 rounded-full mb-8 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00E5FF] to-[#39FF14] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            {/* Step Counter & Back Button */}
            <div className="flex items-center justify-between mb-6 text-xs font-mono">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-[#00E5FF] transition-colors cursor-pointer"
              >
                <ArrowLeft className="size-4" />
                <span>Anterior</span>
              </button>
              <span className="text-[#39FF14] font-semibold tracking-widest uppercase">
                Pregunta {step} de 5
              </span>
            </div>

            {/* Question Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-orbitron font-bold text-white mb-8 leading-snug">
              {currentQuestion.question}
            </h3>

            {/* Multiple Choice Options */}
            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((opt, i) => {
                const isSelected = answers[currentQuestion.id] === opt.value;

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(currentQuestion.id, opt.value)}
                    className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? "bg-[#00E5FF]/10 border-[#00E5FF] text-white shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                        : "bg-white/[0.02] border-white/10 hover:border-white/30 text-white/80 hover:text-white"
                    }`}
                  >
                    <span className="font-montserrat font-medium text-sm sm:text-base pr-4">
                      {opt.label}
                    </span>
                    <div
                      className={`size-6 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#00E5FF] border-[#00E5FF] text-black"
                          : "border-white/20 group-hover:border-[#00E5FF]"
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="size-4 text-black" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Next / Continue Button */}
            <div className="flex justify-end pt-4 border-t border-white/5">
              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
                className="h-14 px-8 bg-[#39FF14] hover:bg-white text-black font-poppins font-extrabold rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] cursor-pointer text-sm sm:text-base"
              >
                <span>{step === 5 ? "Ver Diagnóstico" : "Siguiente pregunta"}</span>
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 6: Loader / Analyzing State */}
        {step === 6 && (
          <div className="bg-[#0A0B10] border border-[#00E5FF]/30 rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,229,255,0.15)]">
            <div className="size-20 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 className="size-10 text-[#00E5FF] animate-spin" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-white mb-3">
              Procesando Diagnóstico...
            </h3>
            <p className="text-white/60 font-montserrat text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Analizando tu presencia digital actual y generando recomendaciones estratégicas personalizadas.
            </p>
          </div>
        )}

        {/* Step 7: Customized Results & Lead Capture Form */}
        {step === 7 && (
          <div className="bg-[#0A0B10] border border-[#39FF14]/30 rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(57,255,20,0.15)]">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#39FF14]" />

            {/* Diagnostic Result Banner */}
            <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl mb-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#39FF14] animate-ping" />
                <span className="text-xs font-mono text-[#39FF14] uppercase tracking-widest font-bold">
                  Diagnóstico Completado
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-orbitron font-bold text-white leading-snug">
                Resultado: Tu negocio está perdiendo prospectos en Google por no contar con una plataforma optimizada.
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-montserrat leading-relaxed">
                Hemos detectado oportunidades clave para acelerar la velocidad de tu sitio, automatizar tus respuestas e integrar un flujo constante de clientes calificados.
              </p>
            </div>

            {/* Form Title */}
            <div className="mb-6">
              <h4 className="text-xl sm:text-2xl font-orbitron font-bold text-white mb-2">
                Recibe tu informe detallado y agéndate con nuestro equipo
              </h4>
              <p className="text-xs sm:text-sm text-white/60 font-montserrat">
                Ingresa tus datos para enviarte la propuesta de arquitectura personalizada sin costo.
              </p>
            </div>

            {/* Clean Lead Capture Form */}
            <form onSubmit={handleLeadSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label htmlFor="quiz-nombre" className="text-xs uppercase tracking-widest text-white/70 font-bold block">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-white/40" />
                  <input
                    type="text"
                    id="quiz-nombre"
                    required
                    placeholder="Ej. Carlos Mendoza"
                    value={leadForm.nombre}
                    onChange={(e) => setLeadForm({ ...leadForm, nombre: e.target.value })}
                    className="w-full h-14 pl-12 pr-4 rounded-xl bg-black border border-white/10 focus:border-[#39FF14] focus:outline-none text-white text-sm sm:text-base transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="quiz-correo" className="text-xs uppercase tracking-widest text-white/70 font-bold block">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-white/40" />
                  <input
                    type="email"
                    id="quiz-correo"
                    required
                    placeholder="carlos@miempresa.com"
                    value={leadForm.correo}
                    onChange={(e) => setLeadForm({ ...leadForm, correo: e.target.value })}
                    className="w-full h-14 pl-12 pr-4 rounded-xl bg-black border border-white/10 focus:border-[#39FF14] focus:outline-none text-white text-sm sm:text-base transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="quiz-whatsapp" className="text-xs uppercase tracking-widest text-white/70 font-bold block">
                  WhatsApp / Teléfono
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-white/40" />
                  <input
                    type="tel"
                    id="quiz-whatsapp"
                    required
                    placeholder="+52 55 1234 5678"
                    value={leadForm.whatsapp}
                    onChange={(e) => setLeadForm({ ...leadForm, whatsapp: e.target.value })}
                    className="w-full h-14 pl-12 pr-4 rounded-xl bg-black border border-white/10 focus:border-[#39FF14] focus:outline-none text-white text-sm sm:text-base transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 mt-4 bg-[#39FF14] hover:bg-white text-black font-poppins font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_30px_rgba(57,255,20,0.35)] hover:shadow-[0_0_40px_rgba(57,255,20,0.55)] cursor-pointer text-sm sm:text-base disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-5 animate-spin text-black" />
                    Generando Asesoría...
                  </>
                ) : (
                  <span>Ver mi informe detallado y agendar asesoría</span>
                )}
              </button>
            </form>
          </div>
        )}

        {/* Step 8: Final Success Confirmation */}
        {step === 8 && (
          <div className="bg-[#0A0B10] border border-[#39FF14]/40 rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(57,255,20,0.2)]">
            <div className="size-16 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="size-8 text-[#39FF14]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-orbitron font-extrabold text-white mb-3">
              ¡Diagnóstico Enviado con Éxito!
            </h3>

            <p className="text-white/70 font-montserrat text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6">
              Gracias, <strong className="text-white">{leadForm.nombre}</strong>. Nuestro equipo de ingenieros ya está revisando tu caso. Te contactaremos vía WhatsApp a <strong className="text-white">{leadForm.whatsapp}</strong> o correo a <strong className="text-white">{leadForm.correo}</strong> en menos de 24 horas.
            </p>

            <button
              onClick={() => {
                setStep(0);
                setAnswers({});
                setLeadForm({ nombre: "", correo: "", whatsapp: "" });
              }}
              className="text-xs font-mono text-[#00E5FF] hover:underline uppercase tracking-widest cursor-pointer"
            >
              Realizar otro diagnóstico
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
