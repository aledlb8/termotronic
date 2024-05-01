import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale, SearchIcon} from "./Icons.jsx";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <a href="/">
            <img src={"https://media.discordapp.net/attachments/1145915543346479255/1235002378084941905/logoSlogan.png?ex=6632c918&is=66317798&hm=bd481d9369a135556c443d0082607c38affee272ef75e6182665e71d8f834fd8&=&format=webp&quality=lossless"} alt="Termotronic" width={200} />
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand >
          <a href="/">
            <img src={"https://media.discordapp.net/attachments/1145915543346479255/1235002378084941905/logoSlogan.png?ex=6632c918&is=66317798&hm=bd481d9369a135556c443d0082607c38affee272ef75e6182665e71d8f834fd8&=&format=webp&quality=lossless"} alt="Termotronic" width={200} />
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
      variant="light"
    >
      Productos
    </Button>
  </DropdownTrigger>
</NavbarItem>
<DropdownMenu
  className="w-[340px]"
  itemClasses={{
    base: "gap-4",
  }}
>
  <DropdownItem
    key="termotronic"
    description="Instalacion del Calentador de agua TERMOTRONIC."
    startContent={icons.scale}
    href="/products/termotronic"
  >
    Termotronic
  </DropdownItem>
  <DropdownItem
    key="cbx"
    description="Instalacion del Calentador de agua CBX."
    startContent={icons.activity}
    href="/products/cbx"
  >
    CBX
  </DropdownItem>
  <DropdownItem
    key="kit"
    description="Kit de Conexión de plomería para TERMOTRONIC y CBX."
    startContent={icons.flash}
    href="/products/kit"
  >
    Kit de Instalacion
  </DropdownItem>
</DropdownMenu>
</Dropdown>
        <NavbarItem>
          <Link className="hover:text-red-400" color="foreground" href="/pricing">
            Precios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-red-400" color="foreground" href="/blog">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-red-400" color="foreground" href="/contact">
            Contactanos
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
      variant="light"
    >
      Productos
    </Button>
  </DropdownTrigger>
</NavbarMenuItem>
<DropdownMenu
  className="w-[340px]"
  itemClasses={{
    base: "gap-4",
  }}
>
  <DropdownItem
    key="termotronic"
    description="Instalacion del Calentador de agua TERMOTRONIC."
    startContent={icons.scale}
    href="/products/termotronic"
  >
    Termotronic
  </DropdownItem>
  <DropdownItem
    key="cbx"
    description="Instalacion del Calentador de agua CBX."
    startContent={icons.activity}
    href="/products/cbx"
  >
    CBX
  </DropdownItem>
  <DropdownItem
    key="kit"
    description="Kit de Conexión de plomería para TERMOTRONIC y CBX."
    startContent={icons.flash}
    href="/products/kit"
  >
    Kit de Instalacion
  </DropdownItem>
</DropdownMenu>
</Dropdown>
        <NavbarMenuItem>
          <Link className="hover:text-red-400" color="foreground" href="/pricing">
            Precios
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="hover:text-red-400" color="foreground" href="/blog">
            Blog
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="hover:text-red-400" color="foreground" href="/contact">
            Contactanos
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}