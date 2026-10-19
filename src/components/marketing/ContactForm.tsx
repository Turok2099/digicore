"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { btnPrimary, container, sectionY } from "@/lib/ui";
import { esPaqueteId } from "@/lib/paquetes";
import { trackEvent } from "@/lib/analytics";

type Estado = "idle" | "loading" | "success" | "error";

const campo =
  "mt-2 block w-full min-h-12 rounded-lg border border-border-strong bg-bg px-4 py-3 text-base text-text placeholder:text-muted focus:border-accent";
const etiqueta = "block font-poppins text-sm font-medium text-text";

function Formulario() {
  const params = useSearchParams();
  const [paquete, setPaquete] = useState("no-se");
  const [estado, setEstado] = useState<Estado>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const p = params.get("paquete");
    if (esPaqueteId(p)) setPaquete(p);
  }, [params]);

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (estado === "loading") return;
    const form = new FormData(e.currentTarget);
    setEstado("loading");
    setError(null);

    const origen = {
      pagina: window.location.pathname,
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
      utm_term: params.get("utm_term") ?? "",
    };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.get("nombre"),
          correo: form.get("correo"),
          telefono: form.get("telefono"),
          profesion: form.get("profesion"),
          paquete,
          mensaje: form.get("mensaje"),
          sitio_web: form.get("sitio_web"),
          origen,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.error || "No pudimos enviar tu solicitud. Intenta de nuevo.");
      }
      // Solo se mide cuando el servidor confirma la recepción. Sin datos personales.
      trackEvent("generate_lead", { paquete, pagina: origen.pagina });
      setEstado("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No pudimos enviar tu solicitud. Intenta de nuevo.");
      setEstado("error");
    }
  }

  if (estado === "success") {
    return (
      <div role="status" className="rounded-2xl border border-border bg-surface p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-success" aria-hidden="true" />
        <h3 className="mt-4 font-poppins text-2xl font-semibold">Recibimos tu solicitud</h3>
        <p className="mt-2 text-muted">
          Jorge revisará tus datos y te escribirá al correo que indicaste con los siguientes pasos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      {/* Campo trampa para bots: las personas no lo ven ni lo llenan. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          No llenar este campo
          <input type="text" name="sitio_web" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="nombre" className={etiqueta}>Nombre</label>
        <input id="nombre" name="nombre" type="text" required minLength={2} maxLength={100} autoComplete="name" className={campo} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="correo" className={etiqueta}>Correo electrónico</label>
          <input id="correo" name="correo" type="email" required maxLength={254} autoComplete="email" className={campo} />
        </div>
        <div>
          <label htmlFor="telefono" className={etiqueta}>
            WhatsApp o teléfono <span className="font-normal text-muted">(opcional)</span>
          </label>
          <input id="telefono" name="telefono" type="tel" maxLength={20} autoComplete="tel" className={campo} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="profesion" className={etiqueta}>Tu profesión o negocio</label>
          <input
            id="profesion"
            name="profesion"
            type="text"
            required
            maxLength={100}
            placeholder="Por ejemplo: abogada, dentista, estudio contable"
            className={campo}
          />
        </div>
        <div>
          <label htmlFor="paquete" className={etiqueta}>Paquete de interés</label>
          <select id="paquete" name="paquete" value={paquete} onChange={(e) => setPaquete(e.target.value)} className={campo}>
            <option value="presencia">Presencia: desde $5,900 + IVA</option>
            <option value="profesional">Profesional: $14,900 + IVA</option>
            <option value="no-se">Aún no lo sé</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className={etiqueta}>
          ¿Qué quieres presentar en tu sitio? <span className="font-normal text-muted">(opcional)</span>
        </label>
        <textarea id="mensaje" name="mensaje" rows={4} maxLength={1000} className={`${campo} resize-y`} />
      </div>

      {estado === "error" && error && (
        <p role="alert" className="rounded-lg border border-danger/50 p-4 text-danger">
          {error}
        </p>
      )}

      <button type="submit" disabled={estado === "loading"} className={`${btnPrimary} w-full disabled:opacity-70`}>
        {estado === "loading" ? (
          <>
            <Loader2 className="size-5 animate-spin motion-reduce:animate-none" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          "Solicitar propuesta"
        )}
      </button>

      <p className="text-sm leading-relaxed text-muted">
        Usamos tus datos únicamente para responder esta solicitud. Recibirás una propuesta; no es una cita ni un
        compromiso de compra.
      </p>
    </form>
  );
}

export default function ContactForm() {
  return (
    <section id="contacto" className={`${sectionY} scroll-mt-20 border-t border-border`}>
      <div className={`${container} max-w-3xl`}>
        <h2 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">Solicita tu propuesta</h2>
        <p className="mt-3 text-lg text-muted">
          Cuéntanos qué haces y qué quieres presentar. Jorge te responderá por correo con el alcance, el total con
          impuestos y la cotización del dominio.
        </p>
        <div className="mt-8">
          <Suspense fallback={<div className="h-96 rounded-2xl border border-border bg-surface" />}>
            <Formulario />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
