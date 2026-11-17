import Link from "next/link";
import { Check } from "lucide-react";
import HeroOferta from "@/components/marketing/HeroOferta";
import { hrefSolicitar } from "@/lib/ui";
import { PRECIO_INICIAL } from "@/lib/paquetes";

interface Props {
  /** Página que contiene el formulario: "/contacto" o la propia página. */
  formBase: string;
}

const beneficios = ["Adaptado a celulares", "WhatsApp y formulario"];

export default function Hero({ formBase }: Props) {
  return (
    <HeroOferta
      precio={PRECIO_INICIAL}
      aclaracion={
        <>
          Dominio por separado.{" "}
          <Link href="/planes#renovacion" className="underline underline-offset-2 hover:text-text">
            Consulta alcance y renovación.
          </Link>
        </>
      }
      // En móvil basta una línea: el detalle (dominio por separado y renovación) está en la sección de precios.
      aclaracionMovil={
        <>
          Dominio por separado.{" "}
          <a href="#paquetes" className="underline underline-offset-2 hover:text-text">
            Ver detalles
          </a>
        </>
      }
      cta={{ href: hrefSolicitar(formBase), ubicacion: "hero" }}
      secundario={{ href: "#paquetes", ubicacion: "hero_paquetes", texto: "Ver opciones y precios" }}
      extras={
        <>
          <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-8">
            {beneficios.map((b) => (
              <li key={b} className="flex items-center gap-2 text-base text-text">
                <Check className="size-4 shrink-0 text-success" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-xs border-t border-border pt-4 font-poppins text-sm text-muted">
            Estrategia · Diseño · Desarrollo
          </p>
        </>
      }
    />
  );
}
