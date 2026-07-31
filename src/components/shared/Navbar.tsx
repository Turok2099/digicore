"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoTextColor = (isScrolled || isOpen) ? "text-white" : "text-black md:text-white";
  const btnTextColor = (isScrolled || isOpen) ? "text-text-muted" : "text-black md:text-text-muted";
  const navBgClass = (isScrolled || isOpen)
    ? "bg-[#030303]/95 backdrop-blur-md border-b border-white/10" 
    : "bg-[#030303]/80 backdrop-blur-md border-b border-white/10";

  const soluciones = [
    { label: "Consigue más clientes", href: "/soluciones/consigue-mas-clientes" },
    { label: "Vende por Internet", href: "/soluciones/vende-por-internet" },
    { label: "Automatiza tu negocio", href: "/soluciones/automatiza-tu-negocio" },
    { label: "Haz crecer tu empresa", href: "/soluciones/haz-crecer-tu-empresa" },
    { label: "Nosotros nos encargamos", href: "/soluciones/nosotros-nos-encargamos" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-28 sm:h-32 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${navBgClass}`}>
      
      {/* Brand Logo (Left) */}
      <a href="/" className="flex items-center gap-4">
        <div className="w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-full overflow-hidden flex items-center justify-center shrink-0">
          <img src="/logo_DS.png" alt="Digicore Studio Logo" className="size-full object-cover" />
        </div>
        <span className="font-orbitron font-black tracking-wider text-2xl sm:text-3xl md:text-4xl">
          <span className="text-[#39FF14]">DIGICORE</span>
          <span className="text-[#00E5FF] ml-1.5">STUDIO</span>
        </span>
      </a>

      {/* Desktop Nav Links (Aligned to the Right) */}
      <div className="hidden md:flex items-center gap-10">
        {/* Dropdown for Soluciones */}
        <div className="relative group">
          <button className="flex items-center gap-2 font-poppins text-xl md:text-2xl font-semibold text-[#F5F7FF]/80 hover:text-[#39FF14] transition-colors duration-200 py-2 cursor-pointer">
            Soluciones
            <ChevronDown className="size-6 group-hover:rotate-180 transition-transform duration-200" />
          </button>
          
          {/* Dropdown Menu aligned to the right of the button */}
          <div className="absolute top-full right-0 mt-1 w-72 bg-[#030303] border border-white/10 rounded-xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col gap-1.5 backdrop-blur-md">
            {soluciones.map((sol) => (
              <a
                key={sol.label}
                href={sol.href}
                className="font-montserrat text-lg text-[#F5F7FF]/80 hover:text-[#39FF14] hover:bg-white/[0.04] px-4 py-3 rounded-lg transition-colors border border-transparent hover:border-white/5"
              >
                {sol.label}
              </a>
            ))}
          </div>
        </div>

        <a href="/#paquetes" className="font-poppins text-xl md:text-2xl font-semibold text-[#F5F7FF]/80 hover:text-[#39FF14] transition-colors duration-200">
          Paquetes
        </a>
        <a href="/contacto" className="font-poppins text-xl md:text-2xl font-semibold text-[#F5F7FF]/80 hover:text-[#39FF14] transition-colors duration-200">
          Contacto
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-[#F5F7FF] hover:text-[#39FF14] transition-colors duration-300"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="size-9" /> : <Menu className="size-9" />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-28 sm:top-32 left-0 right-0 bg-[#030303]/95 backdrop-blur-md border-b border-white/10 flex flex-col p-6 gap-6 md:hidden animate-fade-in max-h-[calc(100vh-7rem)] overflow-y-auto">
          {/* Soluciones Accordion */}
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => setMobileSolOpen(!mobileSolOpen)}
              className="flex items-center justify-between font-poppins text-2xl font-bold text-[#F5F7FF]/80 hover:text-[#39FF14] w-full py-1 text-left"
            >
              <span>Soluciones</span>
              <ChevronDown className={`size-7 transition-transform duration-200 ${mobileSolOpen ? 'rotate-180 text-[#39FF14]' : ''}`} />
            </button>
            
            {mobileSolOpen && (
              <div className="flex flex-col pl-4 border-l-2 border-white/10 gap-3 mt-2">
                {soluciones.map((sol) => (
                  <a
                    key={sol.label}
                    href={sol.href}
                    onClick={() => setIsOpen(false)}
                    className="font-montserrat text-lg font-medium text-[#F5F7FF]/80 hover:text-[#39FF14] transition-colors py-1.5"
                  >
                    {sol.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/#paquetes"
            onClick={() => setIsOpen(false)}
            className="font-poppins text-2xl font-bold text-[#F5F7FF]/80 hover:text-[#39FF14] transition-colors py-1"
          >
            Paquetes
          </a>
          <a
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="font-poppins text-2xl font-bold text-[#F5F7FF]/80 hover:text-[#39FF14] transition-colors py-1 border-t border-white/10 pt-4"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
