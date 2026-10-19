/* eslint-disable @next/next/no-img-element -- SVG local ya optimizado; next/image no aporta aquí */
export default function Logo({ className = "h-10 w-auto min-[400px]:h-11 sm:h-14" }: { className?: string }) {
  return (
    <img
      src="/brand/DigiCore-Studio-transparente.svg"
      alt="DigiCore Studio"
      width={1210}
      height={430}
      className={className}
    />
  );
}
