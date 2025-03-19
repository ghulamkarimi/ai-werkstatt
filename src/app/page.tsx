"use client";

import React from "react";
import { Calendar, CreditCard, CheckCircle } from "lucide-react";
import { Button } from "@/componnetsUi/button";
import { Card, CardContent } from "@/componnetsUi/card";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import MainContent from "@/components/mainContent/MainContent";

export default function AiWerkstattLanding() {
  return (
    <div className="min-h-screen bg-slate-100/80 font-sans antialiased">
      {/* Hero Section */}
      <header className="pt-20 pb-16 text-center bg-gradient-to-br from-indigo-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Die Zukunft der Werkstattverwaltung
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <span className="bg-[#013766] text-white px-4 py-2 rounded-full inline-block mb-3 md:mb-0 md:mr-3">
              AI-Werkstatt
            </span>
            bietet smarte Lösungen für Terminbuchung, Rechnungen und
            Kundenkommunikation – einfach und modern.
          </h2>
        </div>
      </header>

      {/* Main Content: Image on Left, Form on Right */}
      <div className=" w-full">
        <MainContent />
      </div>

      {/* Features Section */}
      <MaxWithWrapper className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4">
        <Card className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
          <CardContent className="p-6 text-center">
            <Calendar className="w-10 h-10 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Online-Terminbuchung
            </h3>
            <p className="text-gray-500 text-sm">
              Termine jederzeit online buchen.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
          <CardContent className="p-6 text-center">
            <CreditCard className="w-10 h-10 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Rechnungen & Zahlungen
            </h3>
            <p className="text-gray-500 text-sm">
              Einfach Rechnungen erstellen und verwalten.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Automatische Erinnerungen
            </h3>
            <p className="text-gray-500 text-sm">
              Weniger Ausfälle dank SMS & E-Mail.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-10 h-10 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Kundenverwaltung
            </h3>
            <p className="text-gray-500 text-sm">
              Überblick über Kunden und Fahrzeuge.
            </p>
          </CardContent>
        </Card>
      </MaxWithWrapper>
    </div>
  );
}
