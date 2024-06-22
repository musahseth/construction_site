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
  Button,
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
        variant="sticky"
        className="bg-white"
      >
        <NavbarContent className="pr-3" justify="start">
          <NavbarBrand>
            <Link
              href={"/"}
              className="font-bold text-2xl md:text-4xl p-2 uppercase"
            >
              {/* Nyande */}
              <Image src="/logo.png" alt="Nyande Logo" className="h-14" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex items-center justify-center gap-x-4 font-semibold"
          justify="center"
        >
          {Navlist}
        </NavbarContent>
        <NavbarContent
          className="hidden sm:flex items-center justify-center gap-x-4 font-semibold"
          justify="end"
        >
          <Button as={Link} href="/contact" color="primary" variant="ghost">
            contact
          </Button>{" "}
        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem className="md:hidden p-1 rounded-lg mt-2 flex flex-col gap-3 text-center">
            {Navlist}{" "}
            <Button as={Link} href="/contact" color="primary" variant="ghost">
              contact
            </Button>{" "}
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
