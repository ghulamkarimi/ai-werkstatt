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
    <nav className="w-full bg-white shadow-md p-4">
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

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6 text-black">
            {/* Features Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 hover:text-indigo-600 transition">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-lg rounded-lg p-4 w-full">
                <div className="flex flex-col space-y-3">
                  <Link href="/features/terminbuchung" className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded">
                    <Calendar className="w-6 h-6 text-indigo-500" />
                    <span>Online-Terminbuchung</span>
                  </Link>
                  <Link href="/features/rechnungen" className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded">
                    <CreditCard className="w-6 h-6 text-indigo-500" />
                    <span>Rechnungen & Zahlungen</span>
                  </Link>
                  <Link href="/features/kundenverwaltung" className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded">
                    <Users className="w-6 h-6 text-indigo-500" />
                    <span>Kundenverwaltung</span>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Preise */}
            <NavigationMenuItem>
              <NavigationMenuLink href="/preise" className="text-gray-700 hover:text-indigo-600 transition">
                Preise
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Kontakt */}
            <NavigationMenuItem>
              <NavigationMenuLink href="/kontakt" className="text-gray-700 hover:text-indigo-600 transition">
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