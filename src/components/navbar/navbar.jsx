import { useState, useEffect, useRef } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuItem,
  NavbarMenu,
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
  const navRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
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
    <Navbar
      ref={navRef}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="border-b border-gray-300 sticky top-0 z-50 shadow-soft"
      classNames={{
        base: "bg-gray-200/75 backdrop-blur-lg",
        wrapper: "px-4 sm:px-6 lg:px-8",
        brand: "gap-3",
        item: "data-[active=true]:text-brand-600",
      }}>
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

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <a href="/">
            <img
              src={"/images/logoTermotronic.png"}
              alt="Termotronic"
              width={200}
              className="mb-2"
            />
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <a href="/">
            <img
              src={"/images/logoTermotronic.png"}
              alt="Termotronic"
              width={200}
              className="mb-2"
            />
          </a>
        </NavbarBrand>
      </NavbarContent>
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
            <DropdownItem
              key="termotronic"
              description="Duradero y confiable"
              href="/productos/termotronic">
              Calentador Termotronic
            </DropdownItem>
            <DropdownItem
              key="cbx"
              description="Ecónomico y rendidor"
              href="/productos/cbx">
              Calentador CBX
            </DropdownItem>
            <DropdownItem
              key="kit"
              description="Para una instalación perfecta"
              href="/productos/kit">
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
            <DropdownItem
              description="Centros de servicio certificado"
              key="servicios"
              href="/servicios">
              Servicios
            </DropdownItem>
            <DropdownItem
              key="garantia"
              description="Donde hacer efectiva su garantía"
              href="/garantias">
              Garantia
            </DropdownItem>
            <DropdownItem
              key="manuales"
              description="Manuales y catálogos de nuestros productos"
              href="/manuales">
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

      <NavbarMenu className="bg-gray-200/75 backdrop-blur-lg pt-6">
        <NavbarMenuItem>
          <Link className="hover:text-brand-600 font-semibold transition-colors duration-300 text-lg py-2" color="foreground" href="/">
            Inicio
          </Link>
        </NavbarMenuItem>
        <Dropdown classNames={{ content: "p-0 bg-transparent shadow-none border-0" }}>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Link className="hover:text-brand-600 font-semibold transition-colors duration-300 text-lg py-2" color="foreground" href="#" onClick={(e) => e.preventDefault()}>
                Productos
              </Link>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu
            className="w-[340px] bg-white shadow-lg border border-gray-200 rounded-xl outline-none focus:outline-none"
            classNames={{ list: "outline-none focus:outline-none" }}
            itemClasses={{
              base: "gap-4 py-2 border-b border-gray-100 last:border-0 outline-none focus:outline-none data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-0 data-[hover=true]:bg-gray-100 rounded-lg transition-colors duration-200",
              title: "text-gray-900 font-bold mb-0.5 group-hover:text-brand-600 transition-colors duration-200",
              description: "text-gray-400 font-normal text-xs",
            }}>
            <DropdownItem
              key="termotronic"
              description="Duradero y confiable"
              href="/productos/termotronic">
              Calentador Termotronic
            </DropdownItem>
            <DropdownItem
              key="cbx"
              description="Económico y rendidor"
              href="/productos/cbx">
              Calentador CBX
            </DropdownItem>
            <DropdownItem
              key="kit"
              description="Para una instalación perfecta"
              href="/productos/kit">
              Kit de Instalación
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarMenuItem>
          <Link
            className="hover:text-brand-600 font-semibold transition-colors duration-300 text-lg py-2"
            color="foreground"
            href="/informacion">
            Información
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="hover:text-brand-600 font-semibold transition-colors duration-300 text-lg py-2" color="foreground" href="/faq">
            FAQ
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="hover:text-brand-600 font-semibold transition-colors duration-300 text-lg py-2"
            color="foreground"
            href="/aliados">
            Aliados
          </Link>
        </NavbarMenuItem>
        <Dropdown classNames={{ content: "p-0 bg-transparent shadow-none border-0" }}>
          <NavbarItem>
            <DropdownTrigger>
              <Link className="hover:text-brand-600 font-semibold transition-colors duration-300 text-lg py-2" color="foreground" href="#" onClick={(e) => e.preventDefault()}>
                Soporte
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-[340px] bg-white shadow-lg border border-gray-200 rounded-xl outline-none focus:outline-none"
            classNames={{ list: "outline-none focus:outline-none" }}
            itemClasses={{
              base: "gap-4 py-2 border-b border-gray-100 last:border-0 outline-none focus:outline-none data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-0 data-[hover=true]:bg-gray-100 rounded-lg transition-colors duration-200",
              title: "text-gray-900 font-bold mb-0.5 group-hover:text-brand-600 transition-colors duration-200",
              description: "text-gray-400 font-normal text-xs",
            }}>
            <DropdownItem
              description="Centros de servicio certificado"
              key="servicios"
              href="/servicios">
              Servicios
            </DropdownItem>
            <DropdownItem
              key="garantia"
              description="Donde hacer efectiva su garantía"
              href="/garantias">
              Garantia
            </DropdownItem>
            <DropdownItem
              key="manuales"
              description="Manuales y catálogos de nuestros productos"
              href="/manuales">
              Manuales
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarMenuItem>
          <Link
            className="bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold px-4 py-2 rounded-lg hover:shadow-medium transition-all duration-300 inline-block mt-4"
            href="https://shop.termotronic.com">
            Tienda
          </Link>
        </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
}
