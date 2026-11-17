"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, CircleAlert, Loader2 } from "lucide-react";
import { btnPrimary, container, sectionY } from "@/lib/ui";
import WhatsAppLink from "@/components/ui/WhatsAppLink";
import { CORREO_CONTACTO, WHATSAPP_VISIBLE } from "@/lib/contacto";
import { esInteresId } from "@/lib/paquetes";
import { trackEvent } from "@/lib/analytics";
import { useErroresFormulario } from "@/lib/use-errores-formulario";

type Estado = "idle" | "loading" | "success" | "error";

const campo =
  "mt-2 block w-full min-h-12 rounded-lg border border-border-strong bg-bg px-4 py-3 text-base text-text placeholder:text-muted focus:border-accent";
const etiqueta = "block font-poppins text-sm font-medium text-text";

type Variante = "desarrollo-web";

/** Error de un campo: solo se ve cuando el campo anterior es :user-invalid (ver globals.css). */
function MensajeError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="campo-error">
      <CircleAlert role="img" aria-label="Error" className="mt-0.5 size-4 shrink-0" />
      <span>{children}</span>
    </p>
  );
}

function Formulario({ variante }: { variante?: Variante }) {
  const dw = variante === "desarrollo-web";
  const params = useSearchParams();
  const [paquete, setPaquete] = useState("no-se");
  const [estado, setEstado] = useState<Estado>("idle");
  const [error, setError] = useState<string | null>(null);
  const [anuncio, setAnuncio] = useState("");
  const formulario = useRef<HTMLFormElement>(null);
  const exito = useRef<HTMLDivElement>(null);

  useErroresFormulario(formulario, setAnuncio);

  // Al enviar, el formulario desaparece: el foco pasa al mensaje de éxito para no perderlo.
  useEffect(() => {
    if (estado === "success") exito.current?.focus();
  }, [estado]);

  useEffect(() => {
    const p = params.get("paquete");
    if (esInteresId(p)) setPaquete(p);
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
          tiene_web: form.get("tiene_web"),
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
      <div ref={exito} tabIndex={-1} role="status" className="rounded-2xl border border-border bg-surface p-8 text-center outline-none">
        <CheckCircle2 className="mx-auto size-10 text-success" aria-hidden="true" />
        <h3 className="mt-4 font-poppins text-2xl font-semibold">Recibimos tu solicitud</h3>
        <p className="mt-2 text-muted">
          Revisaremos tus datos y te escribiremos al correo que indicaste con los siguientes pasos.
        </p>
      </div>
    );
  }

  return (
    <form ref={formulario} onSubmit={enviar} className="form-validable space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      {/* Región única donde se anuncian los errores que aparecen al salir de un campo. */}
      <div aria-live="polite" className="sr-only">{anuncio}</div>
      {/* Campo trampa para bots: las personas no lo ven ni lo llenan. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          No llenar este campo
          <input type="text" name="sitio_web" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="nombre" className={etiqueta}>Nombre</label>
        <input id="nombre" name="nombre" type="text" required minLength={2} maxLength={100} autoComplete="name" data-error="nombre-error" className={campo} />
        <MensajeError id="nombre-error">Escribe tu nombre (mínimo 2 caracteres).</MensajeError>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="correo" className={etiqueta}>Correo electrónico</label>
          <input id="correo" name="correo" type="email" required maxLength={254} autoComplete="email" data-error="correo-error" className={campo} />
          <MensajeError id="correo-error">Escribe un correo con el formato tu@correo.com.</MensajeError>
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
          <label htmlFor="profesion" className={etiqueta}>
            {dw ? "¿A qué se dedica tu negocio?" : "Tu profesión o negocio"}
          </label>
          <input
            id="profesion"
            name="profesion"
            type="text"
            required
            maxLength={100}
            // "Profesión" puede autocompletarse como cargo; "a qué se dedica tu negocio" no tiene valor de autofill correcto.
            autoComplete={dw ? "off" : "organization-title"}
            data-error="profesion-error"
            placeholder={
              dw ? "Por ejemplo: despacho contable, taller, clínica" : "Por ejemplo: abogada, dentista, estudio contable"
            }
            className={campo}
          />
          <MensajeError id="profesion-error">
            {dw ? "Cuéntanos a qué se dedica tu negocio." : "Indica tu profesión o negocio."}
          </MensajeError>
        </div>
        <div>
          <label htmlFor="paquete" className={etiqueta}>
            {dw ? "¿Qué necesitas?" : "Servicio o paquete de interés"}
          </label>
          <select id="paquete" name="paquete" value={paquete} onChange={(e) => setPaquete(e.target.value)} className={campo}>
            {dw ? (
              <>
                <option value="presencia">Una página: $5,900 + IVA</option>
                <option value="profesional">Sitio empresarial: $14,900 + IVA</option>
                <option value="mayor-alcance">Proyecto de mayor alcance: cotización personalizada</option>
                <option value="no-se">Aún no lo sé</option>
              </>
            ) : (
              <>
            <optgroup label="Sitios web">
              <option value="presencia">Presencia: $5,900 + IVA</option>
              <option value="profesional">Profesional: $14,900 + IVA</option>
              <option value="crecimiento">Crecimiento: $22,900 + IVA y $3,900 + IVA al mes</option>
            </optgroup>
            <optgroup label="Otros servicios">
              <option value="ads-marketing">Ads y marketing digital: cotización según alcance</option>
              <option value="ecommerce">Ecommerce: cotización según alcance</option>
            </optgroup>
            <option value="no-se">Aún no lo sé</option>
              </>
            )}
          </select>
        </div>
      </div>

      {dw && (
        <div>
          <label htmlFor="tiene_web" className={etiqueta}>
            ¿Ya tienes página web? <span className="font-normal text-muted">(opcional)</span>
          </label>
          <select id="tiene_web" name="tiene_web" defaultValue="" className={campo}>
            <option value="">Prefiero no indicarlo</option>
            <option value="no">No, sería mi primera página</option>
            <option value="si-renovar">Sí, quiero renovarla</option>
            <option value="si-ampliar">Sí, quiero ampliarla</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="mensaje" className={etiqueta}>
          {dw ? "¿Qué servicios o productos quieres presentar?" : "¿Qué quieres presentar en tu sitio?"} <span className="font-normal text-muted">(opcional)</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          maxLength={1000}
          placeholder={dw ? "Menciona los servicios principales y, si lo tienes, el enlace de tu sitio actual." : undefined}
          className={`${campo} resize-y`}
        />
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
          dw ? "Solicitar cotización" : "Solicitar propuesta"
        )}
      </button>

      <p className="text-sm leading-relaxed text-muted">
        Usamos tus datos únicamente para responder esta solicitud. {dw ? "Recibirás una cotización" : "Recibirás una propuesta"}; no es una cita ni un
        compromiso de compra.
      </p>
    </form>
  );
}

export default function ContactForm({
  titulo = "Solicita tu propuesta",
  intro = "Cuéntanos qué haces y qué quieres presentar. Te responderemos por correo con el alcance, el total con impuestos y la cotización del dominio.",
  variante,
}: {
  titulo?: string;
  intro?: string;
  /** Textos y opciones propios de la página de desarrollo web. Sin valor, el formulario no cambia. */
  variante?: Variante;
}) {
  return (
    <section id="contacto" className={`${sectionY} scroll-mt-20 border-t border-border`}>
      <div className={`${container} max-w-3xl`}>
        <h2 className="font-poppins text-3xl font-semibold tracking-tight sm:text-4xl">{titulo}</h2>
        <p className="mt-3 text-lg text-muted">{intro}</p>
        <div className="mt-8">
          <Suspense fallback={<div className="h-96 rounded-2xl border border-border bg-surface" />}>
            <Formulario variante={variante} />
          </Suspense>
        </div>
        {variante === "desarrollo-web" && (
          <p className="mt-6 text-sm leading-relaxed text-muted">
            También puedes escribirnos a{" "}
            <a href={`mailto:${CORREO_CONTACTO}`} className="font-medium text-accent hover:text-accent-hover">
              {CORREO_CONTACTO}
            </a>{" "}
            o por{" "}
            <WhatsAppLink ubicacion="formulario_desarrollo_web" className="font-medium text-accent hover:text-accent-hover">
              WhatsApp ({WHATSAPP_VISIBLE})
            </WhatsAppLink>
            . Abrir WhatsApp no registra una solicitud: la cotización se atiende cuando recibimos el formulario o tu
            mensaje.
          </p>
        )}
      </div>
    </section>
  );
}
