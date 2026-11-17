import Image from "next/image";

// Logo con fondo transparente y letras claras: pensado para fondos oscuros.
export default function Logo({
  className = "h-12 w-auto sm:h-14",
  priority = false,
  sizes = "(min-width: 640px) 152px, 130px",
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src="/brand/logo-digicore-960.webp"
      alt="DigiCore Studio"
      width={1989}
      height={791}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
