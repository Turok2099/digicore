import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CtaLink from "@/components/ui/CtaLink";
import { btnPrimary, container } from "@/lib/ui";

// En móvil, el segundo destino es un enlace discreto; desde sm vuelve a ser el botón secundario.
const enlaceSecundario =
  "inline-flex min-h-11 items-center justify-center font-poppins text-sm font-medium text-muted underline decoration-border-strong underline-offset-4 transition-colors hover:text-text sm:min-h-12 sm:gap-2 sm:rounded-lg sm:border sm:border-border-strong sm:px-6 sm:py-3 sm:text-base sm:font-semibold sm:text-text sm:no-underline sm:hover:border-accent sm:hover:text-accent";

interface Props {
  /** Importe base sin IVA, por ejemplo "$5,900". */
  precio: string;
  /** Aclaración bajo el precio (dominio y costos posteriores) con su enlace a más detalle. Solo desde sm: en móvil el detalle vive en la sección de precios. */
  aclaracion: React.ReactNode;
  cta: { href: string; ubicacion: string };
  secundario: { href: string; ubicacion: string; texto: string };
  /** Contenido extra que solo se muestra desde sm: en móvil resta espacio a la oferta y a la imagen. */
  extras?: React.ReactNode;
}

/**
 * Hero de oferta compartido por la página de inicio y /sitios-web.
 * Jerarquía: oferta, explicación breve, precio, acción. El logo vive en el navbar.
 * WhatsAppFloat observa el id para no taparlo en móvil mientras se ve el hero.
 */
export default function HeroOferta({ precio, aclaracion, cta, secundario, extras }: Props) {
  return (
    <section id="hero-oferta" className="relative overflow-hidden sm:border-b sm:border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-accent/10 blur-3xl sm:size-[560px]"
      />
      <div
        className={`${container} relative grid items-center gap-0 py-5 sm:gap-12 sm:py-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-12 lg:py-20`}
      >
        <div className="flex flex-col items-start text-left">
          <p className="font-poppins text-xs font-medium tracking-[0.2em] text-muted sm:text-sm">
            DESARROLLO WEB EN MÉXICO
          </p>
          <h1 className="mt-2 text-balance font-poppins text-[2rem] font-bold leading-[1.1] tracking-tight min-[400px]:text-4xl sm:mt-4 sm:text-5xl lg:text-[2.5rem] xl:text-[3.25rem]">
            <span className="text-accent">Páginas web</span> para tu negocio
          </h1>
          <p className="mt-2 max-w-xl text-pretty text-base leading-normal text-muted sm:mt-5 sm:text-lg sm:leading-relaxed">
            Presenta tus servicios con un sitio profesional, adaptado a celular.
          </p>

          <p className="mt-2 font-poppins text-base text-muted sm:mt-6 sm:text-lg">
            Desde{" "}
            <span className="whitespace-nowrap">
              <span className="text-2xl font-bold text-text sm:text-3xl">{precio}</span> MXN + IVA
            </span>
          </p>
          <p className="mt-1 hidden text-sm text-muted sm:block">{aclaracion}</p>

          <div className="mt-4 flex w-full flex-col items-stretch gap-1 sm:mt-6 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
            <CtaLink href={cta.href} ubicacion={cta.ubicacion} className={btnPrimary}>
              Solicitar cotización
              <ArrowRight className="size-5" aria-hidden="true" />
            </CtaLink>
            <CtaLink href={secundario.href} ubicacion={secundario.ubicacion} className={enlaceSecundario}>
              {secundario.texto}
            </CtaLink>
          </div>

          {extras && <div className="hidden w-full sm:block">{extras}</div>}
        </div>

        <figure className="mx-auto mt-1 w-full max-w-2xl sm:mt-0 lg:-ml-10 lg:-mr-6 lg:w-auto lg:max-w-none">
          <Image
            src="/images/hero-demo-arquitectura-ajustada.webp"
            alt="Ejemplo ilustrativo de un sitio de arquitectura adaptado a escritorio y celular"
            width={1400}
            height={940}
            sizes="(min-width: 1024px) 660px, (min-width: 672px) 672px, calc(100vw - 2.5rem)"
            preload
            className="h-auto w-full"
          />
        </figure>
      </div>

      {/* Solo móvil: separador con la sección siguiente (en lugar de la línea completa). Decorativo. */}
      <div aria-hidden="true" className={`${container} pb-2 pt-6 sm:hidden`}>
        <div className="mx-auto grid max-w-xs grid-cols-[3fr_2fr_3fr] items-center gap-2">
          <span className="h-px bg-border-strong/60" />
          <span className="h-[3px] rounded-full bg-accent" />
          <span className="h-px bg-border-strong/60" />
        </div>
      </div>
    </section>
  );
}
