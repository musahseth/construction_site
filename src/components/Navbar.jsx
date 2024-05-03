"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { getCookie, deleteCookie } from "cookies-next";
import { usePathname } from "next/navigation";

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
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setTheme("light");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  ];
  const Navlist = (
    <>
      {Navitems.map((item, i) => (
        <NavbarItem
          key={i}
          className="px-4 capitalize text- text-copy hover:underline"
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
