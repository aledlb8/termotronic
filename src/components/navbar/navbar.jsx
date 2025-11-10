import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="border-b border-gray-300 sticky top-0 z-50 shadow-soft"
      classNames={{
        base: "bg-gray-100/95 backdrop-blur-lg",
        wrapper: "px-4 sm:px-6 lg:px-8",
        brand: "gap-3",
        item: "data-[active=true]:text-brand-600",
      }}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <a href="/">
            <img
              src={"/images/logoTermotronic.png"}
              alt="Termotronic"
              width={200}
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
        <Dropdown isOpen={isDropdownOpen}>
          <NavbarItem>
            <DropdownTrigger
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}>
              <Link
                className="hover:text-brand-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
                color="foreground"
                href="#">
                Productos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
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
        <Dropdown isOpen={isDropdownOpen2}>
          <NavbarItem>
            <DropdownTrigger
              onMouseEnter={() => setIsDropdownOpen2(true)}
              onMouseLeave={() => setIsDropdownOpen2(false)}>
              <Link
                className="hover:text-brand-600 font-semibold transition-all duration-300 hover:scale-105 relative group"
                color="foreground"
                href="#">
                Soporte
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            onMouseEnter={() => setIsDropdownOpen2(true)}
            onMouseLeave={() => setIsDropdownOpen2(false)}
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
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

      <NavbarMenu className="bg-gray-100/95 backdrop-blur-lg pt-6">
        <NavbarMenuItem>
          <Link className="hover:text-brand-600 font-semibold transition-colors duration-300 text-lg py-2" color="foreground" href="/">
            Inicio
          </Link>
        </NavbarMenuItem>
        <Dropdown>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Link className="hover:text-brand-600 font-semibold transition-colors duration-300 text-lg py-2" color="foreground" href="#">
                Productos
              </Link>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
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
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Link className="hover:text-brand-600 font-semibold transition-colors duration-300 text-lg py-2" color="foreground" href="#">
                Soporte
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
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
