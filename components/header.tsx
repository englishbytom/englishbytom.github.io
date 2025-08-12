'use client';

import * as React from "react"
import Link from "next/link"
import { Button } from "./ui/button";
import Banner from "./banner"
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useState } from "react";

import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Links');

  return (
    <div className="w-full flex flex-col items-center">
      <header className="flex responsive-container py-4 justify-between items-center">
        <nav>
          <NavDrawer />
          <ul className="hidden md:flex flex-row items-center gap-2">
            <li>
              <Link href="/" className="p-4 font-medium">English by Tom</Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">{t('about')}</Link>
            </li>
            <li>
              <Link href="/blog" className="nav-link">{t('blog')}</Link>
            </li>
            <li>
              <Link href="/community" className="nav-link">{t('community')}</Link>
            </li>
            <li>
              <NavMenu />
            </li>
          </ul>
        </nav>
        <Button asChild variant="yellow" className="w-fit">
          <Link href="/contact" >{t('contact')}</Link>
        </Button>
      </header>
      <Banner />
    </div>
  )
}

const NavMenu = () => {
  const t = useTranslations('Links');

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
            {t('classes.classes')}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] p-1">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/classes/group"
                    className="shadcn-navigation-menu-link"
                    onClick={handleLinkClick}
                  >
                    {t('classes.group')}
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/classes/unt"
                    className="shadcn-navigation-menu-link"
                    onClick={handleLinkClick}
                  >
                    {t('classes.unt')}
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/classes/individual"
                    className="shadcn-navigation-menu-link"
                    onClick={handleLinkClick}
                  >
                    {t('classes.individual')}
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

const NavDrawer = () => {
  const t = useTranslations('Links');
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerTrigger asChild>
        <Menu color="black" size={24} className="flex md:hidden" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex flex-row items-center justify-between">

          <DrawerClose className="flex size-[30px] items-center justify-center">
            <Menu color="black" size={24} />
          </DrawerClose>
          <DrawerTitle>Menu</DrawerTitle>
          <div className="w-[30px]" />
        </DrawerHeader>
        <div>
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link href="/" className="nav-link" onClick={handleClose}>{t('home')}</Link>
            </li>
            <li>
              <Link href="/about" className="nav-link" onClick={handleClose}>{t('about')}</Link>
            </li>
            <li>
              <Link href="/blog" className="nav-link" onClick={handleClose}>{t('blog')}</Link>
            </li>
            <li>
              <Link href="/community" className="nav-link" onClick={handleClose}>{t('community')}</Link>
            </li>
            <li>
              <Link href="/classes/group" className="nav-link" onClick={handleClose}>{t('classes.group')}</Link>
            </li>
            <li>
              <Link href="/classes/unt" className="nav-link" onClick={handleClose}>{t('classes.unt')}</Link>
            </li>
            <li>
              <Link href="/classes/individual" className="nav-link" onClick={handleClose}>{t('classes.individual')}</Link>
            </li>
            <li>
              <Button asChild variant="yellow" className="w-fit">
                <Link href="/contact" onClick={handleClose}>{t('contact')}</Link>
              </Button>
            </li>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

