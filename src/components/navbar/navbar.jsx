import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [navHeight, setNavHeight] = useState(64);
  const [mobileProductosOpen, setMobileProductosOpen] = useState(false);
  const [mobileSoporteOpen, setMobileSoporteOpen] = useState(false);

  useEffect(() => {
    const el = document.getElementById("main-navbar");
    if (!el) return;
    setNavHeight(el.offsetHeight);
    const observer = new ResizeObserver(() => setNavHeight(el.offsetHeight));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClick = (e) => {
      const navbar = document.getElementById("main-navbar");
      const mobileMenu = document.getElementById("mobile-menu");
      if (
        navbar && !navbar.contains(e.target) &&
        mobileMenu && !mobileMenu.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    const id = setTimeout(() => document.addEventListener("pointerdown", handleClick), 10);
    return () => {
      clearTimeout(id);
      document.removeEventListener("pointerdown", handleClick);
    };
  }, [isMenuOpen]);

  return (
    <>
      <Navbar
        id="main-navbar"
        maxWidth="full"
        className="border-b border-gray-300 sticky top-0 z-50 shadow-soft"
        classNames={{
          base: "bg-gray-200/75 [-webkit-backdrop-filter:blur(16px)] [backdrop-filter:blur(16px)] [transform:translateZ(0)]",
          wrapper: "px-4 sm:px-6 lg:px-8",
          brand: "gap-3",
          item: "data-[active=true]:text-brand-600",
        }}>

        {/* Mobile: hamburger */}
        <NavbarContent className="sm:hidden" justify="start">
          <button
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-gray-200 transition-colors duration-200">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </NavbarContent>

        {/* Mobile: logo centrado */}
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <a href="/">
              <img src={"/images/logoTermotronic.png"} alt="Termotronic" width={200} className="mb-2" />
            </a>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop: logo */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <a href="/">
              <img src={"/images/logoTermotronic.png"} alt="Termotronic" width={200} className="mb-2" />
            </a>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop: nav items */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link
              className="hover:text-brand-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
              color="foreground"
              href="/">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </NavbarItem>
          <Dropdown isOpen={isDropdownOpen} classNames={{ content: "p-0 bg-transparent shadow-none border-0" }}>
            <NavbarItem>
              <DropdownTrigger
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}>
                <Link
                  className="hover:text-brand-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
                  color="foreground"
                  href="#"
                  onClick={(e) => e.preventDefault()}>
                  Productos
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="w-[340px] bg-white shadow-lg border border-gray-200 rounded-xl outline-none focus:outline-none"
              classNames={{ list: "outline-none focus:outline-none" }}
              itemClasses={{
                base: "gap-4 py-2 border-b border-gray-100 last:border-0 outline-none focus:outline-none data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-0 data-[hover=true]:bg-gray-100 rounded-lg transition-colors duration-200",
                title: "text-gray-900 font-bold mb-0.5 group-hover:text-brand-600 transition-colors duration-200",
                description: "text-gray-400 font-normal text-xs",
              }}>
              <DropdownItem key="termotronic" description="Duradero y confiable" href="/productos/termotronic">
                Calentador Termotronic
              </DropdownItem>
              <DropdownItem key="cbx" description="Ecónomico y rendidor" href="/productos/cbx">
                Calentador CBX
              </DropdownItem>
              <DropdownItem key="kit" description="Para una instalación perfecta" href="/productos/kit">
                Kit de Instalación
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link
              className="hover:text-brand-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
              color="foreground"
              href="/informacion">
              Información
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hover:text-brand-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
              color="foreground"
              href="/faq">
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hover:text-brand-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
              color="foreground"
              href="/aliados">
              Aliados
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </NavbarItem>
          <Dropdown isOpen={isDropdownOpen2} classNames={{ content: "p-0 bg-transparent shadow-none border-0" }}>
            <NavbarItem>
              <DropdownTrigger
                onMouseEnter={() => setIsDropdownOpen2(true)}
                onMouseLeave={() => setIsDropdownOpen2(false)}>
                <Link
                  className="hover:text-brand-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
                  color="foreground"
                  href="#"
                  onClick={(e) => e.preventDefault()}>
                  Soporte
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              onMouseEnter={() => setIsDropdownOpen2(true)}
              onMouseLeave={() => setIsDropdownOpen2(false)}
              className="w-[340px] bg-white shadow-lg border border-gray-200 rounded-xl outline-none focus:outline-none"
              classNames={{ list: "outline-none focus:outline-none" }}
              itemClasses={{
                base: "gap-4 py-2 border-b border-gray-100 last:border-0 outline-none focus:outline-none data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-0 data-[hover=true]:bg-gray-100 rounded-lg transition-colors duration-200",
                title: "text-gray-900 font-bold mb-0.5 group-hover:text-brand-600 transition-colors duration-200",
                description: "text-gray-400 font-normal text-xs",
              }}>
              <DropdownItem description="Centros de servicio certificado" key="servicios" href="/servicios">
                Servicios
              </DropdownItem>
              <DropdownItem key="garantia" description="Donde hacer efectiva su garantía" href="/garantias">
                Garantia
              </DropdownItem>
              <DropdownItem key="manuales" description="Manuales y catálogos de nuestros productos" href="/manuales">
                Manuales
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link
              className="bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold px-4 py-2 rounded-lg hover:shadow-medium transition-all duration-300 hover:scale-105"
              href="https://shop.termotronic.com" target="_blank" rel="noopener noreferrer">
              Tienda
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* ── Menú móvil personalizado ── */}
      <div className="sm:hidden">
        {/* Fondo oscuro al abrir */}
        <div
          className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Panel que se desliza desde la izquierda, centrado verticalmente */}
        <div
          id="mobile-menu"
          className={`fixed left-0 z-50 flex items-center transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ top: navHeight, bottom: 0 }}>

          <div className="bg-white shadow-2xl rounded-r-2xl py-5 px-4 flex flex-col gap-1 min-w-[220px]">

            <a href="/" className="text-gray-800 font-semibold text-base py-2 px-3 rounded-lg hover:bg-gray-100 hover:text-brand-600 transition-colors">
              Inicio
            </a>

            {/* Productos acordeón */}
            <div>
              <button
                onClick={() => { setMobileProductosOpen(!mobileProductosOpen); setMobileSoporteOpen(false); }}
                className="w-full flex items-center justify-between text-gray-800 font-semibold text-base py-2 px-3 rounded-lg hover:bg-gray-100 hover:text-brand-600 transition-colors">
                <span>Productos</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileProductosOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileProductosOpen && (
                <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l-2 border-brand-200 pl-3">
                  <a href="/productos/termotronic" className="py-1.5 px-2 rounded hover:bg-gray-50 hover:text-brand-600 transition-colors">
                    <span className="block text-sm font-semibold text-gray-800">Calentador Termotronic</span>
                    <span className="block text-xs text-gray-400">Duradero y confiable</span>
                  </a>
                  <a href="/productos/cbx" className="py-1.5 px-2 rounded hover:bg-gray-50 hover:text-brand-600 transition-colors">
                    <span className="block text-sm font-semibold text-gray-800">Calentador CBX</span>
                    <span className="block text-xs text-gray-400">Económico y rendidor</span>
                  </a>
                  <a href="/productos/kit" className="py-1.5 px-2 rounded hover:bg-gray-50 hover:text-brand-600 transition-colors">
                    <span className="block text-sm font-semibold text-gray-800">Kit de Instalación</span>
                    <span className="block text-xs text-gray-400">Para una instalación perfecta</span>
                  </a>
                </div>
              )}
            </div>

            <a href="/informacion" className="text-gray-800 font-semibold text-base py-2 px-3 rounded-lg hover:bg-gray-100 hover:text-brand-600 transition-colors">
              Información
            </a>

            <a href="/faq" className="text-gray-800 font-semibold text-base py-2 px-3 rounded-lg hover:bg-gray-100 hover:text-brand-600 transition-colors">
              FAQ
            </a>

            <a href="/aliados" className="text-gray-800 font-semibold text-base py-2 px-3 rounded-lg hover:bg-gray-100 hover:text-brand-600 transition-colors">
              Aliados
            </a>

            {/* Soporte acordeón */}
            <div>
              <button
                onClick={() => { setMobileSoporteOpen(!mobileSoporteOpen); setMobileProductosOpen(false); }}
                className="w-full flex items-center justify-between text-gray-800 font-semibold text-base py-2 px-3 rounded-lg hover:bg-gray-100 hover:text-brand-600 transition-colors">
                <span>Soporte</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileSoporteOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSoporteOpen && (
                <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l-2 border-brand-200 pl-3">
                  <a href="/servicios" className="py-1.5 px-2 rounded hover:bg-gray-50 hover:text-brand-600 transition-colors">
                    <span className="block text-sm font-semibold text-gray-800">Servicios</span>
                    <span className="block text-xs text-gray-400">Centros de servicio certificado</span>
                  </a>
                  <a href="/garantias" className="py-1.5 px-2 rounded hover:bg-gray-50 hover:text-brand-600 transition-colors">
                    <span className="block text-sm font-semibold text-gray-800">Garantía</span>
                    <span className="block text-xs text-gray-400">Donde hacer efectiva su garantía</span>
                  </a>
                  <a href="/manuales" className="py-1.5 px-2 rounded hover:bg-gray-50 hover:text-brand-600 transition-colors">
                    <span className="block text-sm font-semibold text-gray-800">Manuales</span>
                    <span className="block text-xs text-gray-400">Manuales y catálogos de nuestros productos</span>
                  </a>
                </div>
              )}
            </div>

            <a
              href="https://shop.termotronic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold px-4 py-2 rounded-lg text-center text-sm hover:shadow-md transition-all duration-300">
              Tienda
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
