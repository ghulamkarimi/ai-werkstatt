"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MaxWithWrapper from "./MaxWithWrapper";

const Navbar = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsFeaturesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsFeaturesOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg py-4 sticky top-0 z-50">
      <MaxWithWrapper className="w-full flex justify-between items-center">
        {/* Logo und Name */}
        <div className="flex items-center space-x-4">
          <Image
            className="rounded-full border-2 border-blue-950 p-1"
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
        <div className="flex justify-end">
          <div className="flex space-x-12 text-black">
            {/* Features Dropdown */}
            <div
              className=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-indigo-600 transition text-lg font-medium">
                Features
              </button>
              {isFeaturesOpen && (
                <div className="absolute right-2 bg-white shadow-xl rounded-xl p-8 w-[800px]">
                  <div className="grid grid-cols-3 gap-6">
                    <Link
                      href="/features/terminbuchung"
                      className="flex flex-col items-center gap-3 p-4 bg-white hover:bg-gray-50 hover:shadow-md rounded-lg transition-all duration-300"
                    >
                      <div className="relative w-24 h-24">
                        <Image
                          className="rounded-lg object-cover"
                          src="/termin.jpg"
                          alt="Online-Terminbuchung"
                          layout="fill"
                        />
                      </div>
                      <span className="text-sm font-bold text-gray-800 text-center">
                        Online-Terminbuchung
                      </span>
                      <span className="text-xs text-gray-500 text-center">
                        Einfach und modern
                      </span>
                    </Link>
                    <Link
                      href="/features/rechnungen"
                      className="flex flex-col items-center gap-3 p-4 bg-white hover:bg-gray-50 hover:shadow-md rounded-lg transition-all duration-300"
                    >
                      <div className="relative w-24 h-24">
                        <Image
                          className="rounded-lg object-cover"
                          src="/zahlung.jpg"
                          alt="Rechnungen & Zahlungen"
                          layout="fill"
                        />
                      </div>
                      <span className="text-sm font-bold text-gray-800 text-center">
                        Rechnungen & Zahlungen
                      </span>
                      <span className="text-xs text-gray-500 text-center">
                        Schnell und sicher
                      </span>
                    </Link>
                    <Link
                      href="/features/kundenverwaltung"
                      className="flex flex-col items-center gap-3 p-4 bg-white hover:bg-gray-50 hover:shadow-md rounded-lg transition-all duration-300"
                    >
                      <div className="relative w-24 h-24">
                        <Image
                          className="rounded-lg object-cover"
                          src="/kundenverwaltung.jpg"
                          alt="Kundenverwaltung"
                          layout="fill"
                        />
                      </div>
                      <span className="text-sm font-bold text-gray-800 text-center">
                        Kundenverwaltung
                      </span>
                      <span className="text-xs text-gray-500 text-center">
                        Alles im Blick
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Preise */}
            <Link
              href="/preise"
              className="text-gray-700 hover:text-indigo-600 transition text-lg font-medium"
            >
              Preise
            </Link>

            {/* Kontakt */}
            <Link
              href="/kontakt"
              className="text-gray-700 hover:text-indigo-600 transition text-lg font-medium"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </MaxWithWrapper>
    </nav>
  );
};

export default Navbar;