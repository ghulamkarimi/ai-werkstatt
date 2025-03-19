"use client";

import React from "react";
import { Calendar, CreditCard, CheckCircle } from "lucide-react";
import { Button } from "@/componnetsUi/button";
import { Card, CardContent } from "@/componnetsUi/card";
 
export default function AiWerkstattLanding() {
  return (
    <div className="min-h-screen bg-slate-100/80 font-sans antialiased">
      {/* Header */}

      {/* Hero Section */}
      <header className="pt-20 pb-16 text-center bg-gradient-to-br from-indigo-50 via-white to-teal-50 ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Die Zukunft der Werkstattverwaltung
        </h1>
        <h2 className="text-xl font-bold max-w-2xl mx-auto leading-relaxed">
          <span className="  bg-[#013766] text-white p-2 rounded-xl mb-2 mr-1  ">
            {" "}
            AI-Werkstatt{" "}
          </span>{" "}
          bietet smarte Lösungen für Terminbuchung, Rechnungen und
          Kundenkommunikation – einfach und modern.
        </h2>
      </header>

      {/* Main Content: Image on Left, Form on Right */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section (Left) */}
        <div className="w-full lg:w-2/3 h-[580px]">
          <div className="relative h-full">
            <img
              src="/bild3.png"
              alt="Werkstatt Dashboard"
              className="w-full h-full rounded-2xl object-cover "
            />
            <img
              src="/bild5.png"
              alt=""
              className="absolute top-0 right-2 w-60 h-60 object-cover"
            />

            <div className="absolute inset-0 rounded-2xl "></div>
          </div>
        </div>

        {/* Contact Form (Right) */}
        <div className="w-full lg:w-1/3 max-w-md bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3 text-center">
            Kostenlose Beratung
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Optimieren Sie Ihr Unternehmen mit AI-Werkstatt.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Ihr Name"
              className="w-full p-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              required
            />
            <input
              type="text"
              placeholder="Name der Werkstatt"
              className="w-full p-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              required
            />
            <input
              type="tel"
              placeholder="Mobilnummer"
              className="w-full p-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              required
            />
            <input
              type="email"
              placeholder="E-Mail-Adresse"
              className="w-full p-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              required
            />
            <input
              type="text"
              placeholder="Postleitzahl"
              className="w-full p-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              required
            />
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="privacy"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                required
              />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                Datenschutz zustimmen
              </label>
            </div>
            <Button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300">
              Beratung anfordern
            </Button>
          </form>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </section>
    </div>
  );
}