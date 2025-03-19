"use client";

import React from "react";
import { Calendar, CreditCard, Users } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
<nav className="w-full bg-white shadow-md p-4 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            className="rounded-full"
            src="/webkraft.png"
            alt="AI-Werkstatt"
            width={60}
            height={60}
          />
          <Link href="/" className="text-2xl font-bold text-gray-900">
            AI-Werkstatt
          </Link>
        </div>

        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex space-x-10 text-black w-[60vw] ">
            {/* Features Dropdown */}
            <NavigationMenuItem className="">
              <NavigationMenuTrigger className="text-gray-700 hover:text-indigo-600 transition">
                Features
              </NavigationMenuTrigger >
              <NavigationMenuContent className="bg-transparent/90 h-46 shadow-lg rounded-lg p-4 w-full fixed top-0 z-50">
                <div className="flex justify-start w-[600px]">
                  <Link
                    href="/features/terminbuchung"
                    className="flex flex-col h-45 items-center gap-4 space-x-3  p-6 rounded"
                  >
                    <span className="text-xs lg:text-sm font-bold h-20">Online-Terminbuchung</span>
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
                    className="flex flex-col h-45 items-center gap-4 space-x-3 p-6 rounded"
                  >
                    <span className="text-xs lg:text-sm h-20 font-bold">Rechnungen & Zahlungen</span>
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
                    className="flex flex-col h-45 items-center gap-4 space-x-3  p-6 rounded"
                  >
                    <span className="text-xs lg:text-sm h-20 font-bold">Kundenverwaltung</span>
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

          <NavigationMenuIndicator />
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;