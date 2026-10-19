import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import CtaLink from "@/components/ui/CtaLink";
import { btnPrimary, btnSecondary, container, hrefSolicitar } from "@/lib/ui";
import { PRECIO_INICIAL } from "@/lib/paquetes";

interface Props {
  /** Página que contiene el formulario: "/contacto" o la propia página. */
  formBase: string;
}

const beneficios = ["Adaptado a celulares", "WhatsApp y formulario"];

export default function Hero({ formBase }: Props) {
  return (
    <section className="border-b border-border">
      <div
        className={`${container} grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-12 lg:py-20`}
      >
        <div>
          <p className="font-poppins text-xs font-medium tracking-[0.2em] text-muted sm:text-sm">
            DESARROLLO WEB EN MÉXICO
          </p>

          <h1 className="mt-4 font-poppins text-[1.8rem] font-bold leading-[1.1] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-[2.5rem] xl:text-[3.5rem]">
            <span className="block">Tu negocio merece</span>
            <span className="block">
              una <span className="text-accent">web profesional.</span>
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Diseño y desarrollo web para negocios que quieren dar el siguiente paso. De la estrategia a la publicación,
            con un proceso claro.
          </p>

          <p className="mt-6 font-poppins text-lg text-muted">
            Desde <span className="text-2xl font-bold text-text sm:text-3xl">{PRECIO_INICIAL} MXN</span> + IVA
          </p>
          <p className="mt-1 text-sm text-muted">
            Dominio por separado.{" "}
            <Link href="/planes#renovacion" className="underline underline-offset-2 hover:text-text">
              Consulta alcance y renovación.
            </Link>
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={hrefSolicitar(formBase)} ubicacion="hero" className={btnPrimary}>
              Solicitar propuesta
              <ArrowRight className="size-5" aria-hidden="true" />
            </CtaLink>
            <CtaLink href="#paquetes" ubicacion="hero_paquetes" className={btnSecondary}>
              Ver paquetes
            </CtaLink>
          </div>

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
        </div>

        <figure className="mx-auto w-full max-w-2xl lg:-ml-10 lg:-mr-6 lg:w-auto lg:max-w-none">
          <Image
            src="/images/hero-demo-arquitectura-ajustada.webp"
            alt="Ejemplo ilustrativo de un sitio de arquitectura adaptado a escritorio y celular"
            width={1400}
            height={940}
            sizes="(min-width: 1024px) 660px, (min-width: 640px) 672px, 100vw"
            preload
            className="h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
}
