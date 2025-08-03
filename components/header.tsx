'use client';

import * as React from "react"
import { useState } from "react";
import Link from "next/link"
import { Button } from "./ui/button";
import Banner from "./banner"
import { Menu } from "lucide-react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useRouter } from "next/navigation";


export default function Header() {
  return (
    <div className="w-full flex flex-col items-center">
      <header className="flex responsive-container py-4 justify-between items-center">

        <Link href="/" className="p-2">
          <h6>English by Tom</h6>
        </Link>

        <nav>
          <Menu color="black" size={24} className="flex md:hidden" />
          <ul className="hidden md:flex flex-row items-center gap-2">
            <li>
              <Link href="/" className="nav-link">Inicio</Link>
            </li>
            <li>
              <Link href="/sobre" className="nav-link">Sobre Mi</Link>
            </li>
            {/* <li>
              <Link href="/" className="py-2 px-4">Blog</Link>
            </li> */}
            <li>
              <NavMenu />
            </li>
            <li>
              <Button asChild variant="yellow" className="w-fit">
                <Link href="/contacto" >Contacto</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <Banner />
    </div>
  )
}

const NavMenu = () => {
const handleLinkClick = () => {
    // Let the Radix internal menu close after click
    setTimeout(() => {
      const trigger = document.activeElement as HTMLElement
      if (trigger && trigger.blur) trigger.blur()
    }, 0)
  }

  return (
  <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Clases Online
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] p-1">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/cursos-grupales"
                    className="shadcn-navigation-menu-link"
                    onClick={handleLinkClick}
                  >
                    Cursos Grupales
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/cursos-para-la-unt"
                    className="shadcn-navigation-menu-link"
                    onClick={handleLinkClick}
                  >
                    Cursos para la UNT
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/clases-individuales"
                    className="shadcn-navigation-menu-link"
                    onClick={handleLinkClick}
                  >
                    Clases Individuales
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}



