"use client";
import React, { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Image,
} from "@nextui-org/react";
import Link from "next/link";

export default function Navbartop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Navitems = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "services",
      link: "/services",
    },
    {
      name: "projects",
      link: "/projects",
    },

    {
      name: "about",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
  ];
  const Navlist = (
    <>
      {Navitems.map((item, i) => (
        <NavbarItem
          key={i}
          className="px-4 capitalize text-sm hover:underline"
          onClick={() => setIsMenuOpen(false)}
        >
          <Link href={item.link}>{item.name}</Link>
        </NavbarItem>
      ))}
    </>
  );

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
        // shouldHideOnScroll
        // isBordered
        variant="sticky"
        className="bg-primary"
      >
        <NavbarContent className="pr-3" justify="start">
          <NavbarBrand>
            <Link
              href={"/"}
              className="font-bold text-2xl md:text-4xl p-2 uppercase"
            >
              Nyande
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex items-center justify-center gap-x-4 font-semibold"
          justify="end"
        >
          {Navlist}
        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem className="md:hidden p-1 rounded-lg mt-2 flex flex-col gap-3 text-center">
            {Navlist}
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
