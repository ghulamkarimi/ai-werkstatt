"use client";

import React from "react";
import {
  Calendar,
  CreditCard,
  CheckCircle,
  Users,
  FileText,
  Settings,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import MainContent from "@/components/mainContent/MainContent";
import Consultant from "@/components/consultant/Consultant";
import FeaturesSection from "@/components/featureSection/FeaturesSection ";
import CustomerReviews from "@/components/featureSection/CustomerReview";
import Steps from "@/components/featureSection/Steps";
import { useSelector } from "react-redux";
import { displayContents } from "@/feature/reducer/contentSlice";

const cards = [
  {
    icon: Calendar,
    title: "Online-Terminbuchung",
    description: "Termine jederzeit online buchen.",
    color: "text-blue-900",
  },
  {
    icon: CreditCard,
    title: "Rechnungen & Zahlungen",
    description: "Einfach Rechnungen erstellen und verwalten.",
    color: "text-green-500",
  },
  {
    icon: CheckCircle,
    title: "Automatische Erinnerungen",
    description: "Weniger Ausfälle dank SMS & E-Mail.",
    color: "text-orange-500",
  },
  {
    icon: Users,
    title: "Kundenverwaltung",
    description: "Überblick über Kunden und Fahrzeuge.",
    color: "text-red-500",
  },
  {
    icon: FileText,
    title: "Wartungsplanung",
    description: "Wartungen effizient planen.",
    color: "text-purple-500",
  },

  {
    icon: Star,
    title: "Kundenbewertungen",
    description: "Erhalte wertvolles Feedback von Kunden.",
    color: "text-yellow-500",
  },
];

export default function AiWerkstattLanding() {
  const content = useSelector(displayContents)
  console.log("content",content)

  if (!content) {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Lade Inhalte...
        </h1>
      </div>
    );
  }

  
  return (
    <div className="min-h-screen bg-slate-100/80 font-sans antialiased">
      {/* Hero Section */}
      <header className="pt-20 pb-16 text-center bg-gradient-to-br from-indigo-50 via-white to-teal-50">
  {content && content.length > 0 ? (
    content.map((cont) => ( 
      <div key={cont?._id} className="container mx-auto px-4">
        {/* Hauptüberschrift */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          {cont?.sectionTitle}
        </h1>

        {/* Beschreibung mit dynamischen Features */}
        <h2 className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          <span className="bg-[#013766] text-white px-4 py-2 rounded-xl">
            AI-Werkstatt
          </span>{" "}
          bietet smarte Lösungen für{" "}
          {cont?.features && cont?.features.map((feature, index) => (
            <span key={feature} className="font-bold ml-1">
              {feature} {/* `feature` ist jetzt ein String, kein Objekt */}
              {index < cont?.features.length - 1 ? ", " : ""}
            </span>
          ))}
          {" "}- einfach und modern.
        </h2>
      </div>
    ))
  ) : (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
        Keine Daten verfügbar
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Bitte erstellen Sie einen neuen Inhalt.
      </h2>
    </div>
  )}
</header>

      {/* Main Content: Image on Left, Form on Right */}
      <div className="w-full">
        <MainContent />
      </div>

      <div className="bg-white py-16">
        <MaxWithWrapper>
          <h2 className="text-3xl text-center font-bold mb-6">
            Was macht uns anders?
          </h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Optimieren Sie Ihre Abläufe mit unserer{" "}
            <span className="font-semibold">
              KI-gestützten Werkstattsoftware
            </span>
            . Unsere Plattform umfasst eine{" "}
            <span className="font-semibold">moderne Website</span> für Ihre
            Kunden sowie ein
            <span className="font-semibold">
              {" "}
              leistungsstarkes Admin-Panel
            </span>{" "}
            für die Verwaltung.
            <br />
            <br />
            <span className="font-semibold">Automatische Terminverwaltung</span>
            ,
            <span className="font-semibold">
              intelligente Kundenkommunikation{" "}
            </span>
            und{" "}
            <span className="font-semibold">effiziente Rechnungsstellung</span>{" "}
            {"-"}
            alles in einer einzigen Plattform!
          </p>
        </MaxWithWrapper>
      </div>

      {/* Features Section */}
      <MaxWithWrapper className="mt-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              className={`bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 
          ${index % 3 === 0 ? "lg:col-span-2" : "lg:col-span-1"}
          ${index % 4 === 0 ? "xl:col-span-2" : "xl:col-span-1"}
          ${
            index === cards.length - -1 && cards.length % 3 === 2
              ? "md:col-span-2 lg:col-span-2"
              : ""
          }
        `}
            >
              <CardContent className="px-3 py-6 text-center">
                <card.icon className={`w-12 h-12 ${card.color} mx-auto mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWithWrapper>
      <FeaturesSection />
      <div className="bg-white">
        <Consultant />
      </div>
      <div className="bg-gray-100">
      <MaxWithWrapper>
        <CustomerReviews />
      </MaxWithWrapper>
      </div>
      <div className="bg-white">
        <MaxWithWrapper>
          <Steps />
        </MaxWithWrapper>
      </div>
    </div>
  );
}
