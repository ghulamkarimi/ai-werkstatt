"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import MaxWithWrapper from "./MaxWithWrapper";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-2 sticky top-0 z-50">
      <MaxWithWrapper className="w-full flex justify-between items-center">
        {/* Logo und Name */}
        <div className="flex items-center space-x-3">
          <Image
            className="rounded-full"
            src="/webkraft.png"
            alt="AI-Werkstatt"
            width={40}
            height={40}
          />
          <Link href="/" className="text-2xl font-bold text-gray-900">
            AI-Werkstatt
          </Link>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="flex justify-end">
          <NavigationMenuList className="flex space-x-10 text-black">
            {/* Features Dropdown */}
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="text-gray-700 hover:text-indigo-600 transition">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute bg-white shadow-lg rounded-lg p-4 w-[800px]">
                <div className="flex justify-between gap-4">
                  <Link
                    href="/features/terminbuchung"
                    className="flex flex-col items-center gap-4 p-6 rounded hover:bg-gray-50 transition flex-1"
                  >
                    <span className="text-xs lg:text-sm font-bold">
                      Online-Terminbuchung
                    </span>
                    <Image
                      className="rounded-lg"
                      src="/termin.jpg"
                      alt="Online-Terminbuchung"
                      width={100}
                      height={140}
                    />
                  </Link>
                  <Link
                    href="/features/rechnungen"
                    className="flex flex-col items-center gap-4 p-6 rounded hover:bg-gray-50 transition flex-1"
                  >
                    <span className="text-xs lg:text-sm font-bold">
                      Rechnungen & Zahlungen
                    </span>
                    <Image
                      className="rounded-lg"
                      src="/zahlung.jpg"
                      alt="Rechnungen & Zahlungen"
                      width={100}
                      height={100}
                    />
                  </Link>
                  <Link
                    href="/features/kundenverwaltung"
                    className="flex flex-col items-center gap-4 p-6 rounded hover:bg-gray-50 transition flex-1"
                  >
                    <span className="text-xs lg:text-sm font-bold">
                      Kundenverwaltung
                    </span>
                    <Image
                      className="rounded-lg"
                      src="/kundenverwaltung.jpg"
                      alt="Kundenverwaltung"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Preise */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/preise"
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                Preise
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Kontakt */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/kontakt"
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                Kontakt
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </MaxWithWrapper>
    </nav>
  );
};

export default Navbar;