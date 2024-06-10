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

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
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
          <Link className="hover:text-red-400 font-bold" color="foreground" href="/">
            Inicio
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Link className="hover:text-red-400 font-bold" color="foreground" href="#">
                Productos
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}>
            <DropdownItem
              key="termotronic"
              description="Agua Caliente para Toda la Vida."
              href="/products/termotronic"
              >
              Termotronic
            </DropdownItem>
            <DropdownItem
              key="cbx"
              description="Básicamente perfecto."
              href="/products/cbx">
              CBX
            </DropdownItem>
            <DropdownItem
              key="kit"
              description="Kit de plomería e instalación."
              href="/products/kit">
              Kit de Instalacion
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link
            className="hover:text-red-400 font-bold"
            color="foreground"
            href="/information">
            Información
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-red-400 font-bold" color="foreground" href="/faq">
            FAQ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:text-red-400 font-bold"
            color="foreground"
            href="/aliados">
            Aliados
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Link className="hover:text-red-400 font-bold" color="foreground" href="#">
                Soporte
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}>
            <DropdownItem key="servicios" href="/servicios">
              Servicios
            </DropdownItem>
            <DropdownItem key="garantia" href="/garantias">
              Garantia
            </DropdownItem>
            <DropdownItem key="manuales" href="/manuales">
              Manuales
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="hover:text-red-400" color="foreground" href="/">
            Inicio
          </Link>
        </NavbarMenuItem>
        <Dropdown>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Link className="hover:text-red-400" color="foreground" href="#">
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
              description="Agua Caliente para Toda la Vida."
              href="/products/termotronic">
              Termotronic
            </DropdownItem>
            <DropdownItem
              key="cbx"
              description="Básicamente perfecto."
              href="/products/cbx">
              CBX
            </DropdownItem>
            <DropdownItem
              key="kit"
              description="Kit de plomería e instalación."
              href="/products/kit">
              Kit de Instalacion
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarMenuItem>
          <Link
            className="hover:text-red-400"
            color="foreground"
            href="/information">
            Información
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="hover:text-red-400" color="foreground" href="/faq">
            FAQ
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="hover:text-red-400"
            color="foreground"
            href="/aliados">
            Aliados
          </Link>
        </NavbarMenuItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Link className="hover:text-red-400" color="foreground" href="#">
                Soporte
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}>
            <DropdownItem key="servicios" href="/servicios">
              Servicios
            </DropdownItem>
            <DropdownItem key="garantia" href="/garantias">
              Garantia
            </DropdownItem>
            <DropdownItem key="manuales" href="/manuales">
              Manuales
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarMenu>
    </Navbar>
  );
}
