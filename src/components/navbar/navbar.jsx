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
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

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
              src={
                "images/logoSlogan.png"
              }
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
              src={
                "images/logoSlogan.png"
              }
              alt="Termotronic"
              width={200}
            />
          </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent hover:text-red-400"
                endContent={icons.chevron}
                radius="sm"
                variant="light">
                Productos
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}>
            <DropdownItem
              key="termotronic"
              description="Instalacion del Calentador de agua TERMOTRONIC."
              startContent={icons.scale}
              href="/products/termotronic">
              Termotronic
            </DropdownItem>
            <DropdownItem
              key="cbx"
              description="Instalacion del Calentador de agua CBX."
              startContent={icons.activity}
              href="/products/cbx">
              CBX
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link className="hover:text-red-400" color="foreground" href="/information">
            Información
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-red-400" color="foreground" href="/faq">
            FAQ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:text-red-400"
            color="foreground"
            href="/aliados">
            Aliados
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <Dropdown>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent hover:text-red-400"
                endContent={icons.chevron}
                radius="sm"
                variant="light">
                Productos
              </Button>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}>
            <DropdownItem
              key="termotronic"
              description="Instalacion del Calentador de agua TERMOTRONIC."
              startContent={icons.scale}
              href="/products/termotronic">
              Termotronic
            </DropdownItem>
            <DropdownItem
              key="cbx"
              description="Instalacion del Calentador de agua CBX."
              startContent={icons.activity}
              href="/products/cbx">
              CBX
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarMenuItem>
          <Link className="hover:text-red-400" color="foreground" href="/information">
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
      </NavbarMenu>
    </Navbar>
  );
}
