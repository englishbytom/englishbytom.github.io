"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

export default function Nav({ Content }: any) {
  const components = {
    ul: (props: any) => (
      <ul
        className="flex flex-col items-center md:flex-row list-none m-0!"
        {...props}
      />
    ),
    li: (props: any) => <li className="p-0! m-0!" {...props} />,
    a: (props: any) => (
      <a
        className="cursor-pointer py-2 px-4 font-medium text-sm rounded-md hover:bg-accent focus:bg-accent disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px]"
        {...props}
      />
    ),
  };

  return (
    <header className="flex container-fluid py-5 justify-between items-center">
      <Link href="/" className="font-shantell text-md">
          English by Tom
        </Link>
      <nav className="flex flex-row">
        <div className="hidden md:flex">
          <Content components={components} />
        </div>
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Menu color="black" size={24} className="flex md:hidden" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="flex flex-row items-center justify-between">
              <div className="w-[30px]" />
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerClose className="flex size-[30px] items-center justify-center">
                <Menu color="black" size={24} />
              </DrawerClose>
            </DrawerHeader>
            <Content components={components} />
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
}
