import { CheckCircle } from "lucide-react";
import MaxWithWrapper from "../MaxWithWrapper";
import { Button } from "../ui/button";

const features = [
    "Automatisierte Terminverwaltung",
    "Intelligente Kundenkommunikation",
    "Einfache Rechnungs- & Zahlungsabwicklung",
    "Dynamische Wartungsplanung",
    "Optimierte Lagerverwaltung",
    "Kundenbewertungen & Feedback",
    "Effiziente Service-Planung",
    "Digitale Dokumentation",
    "Kundenservice rund um die Uhr",
    "Angebote erstellen",
    "Admin-Panel, um Ihre Werkstatt zu verwalten",
    "Und vieles mehr..."
  ];

const FeaturesSection = () => {
  return (
    <MaxWithWrapper>
      <section className="py-10 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Warum unsere AI-Werkstattlösung?
          </h2>
      
          <p className="text-gray-600 text-lg mb-8">
            Optimieren Sie Ihre Prozesse mit modernster Technologie und sparen Sie Zeit & Kosten.
          </p>

          {/* Feature Liste */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-500 stroke-3 " />
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-4 border-yellow-500 pb-2">Interesse an effizienter Planung und Automatisierung?</h2>
            <p className="text-gray-600 text-lg">Wir helfen Ihnen gerne, Ihre Werkstatt auf das nächste Level zu bringen!</p>
            <p className="text-gray-600 text-lg mt-2"> Kontaktieren Sie uns per E-Mail oder Telefon – wir freuen uns auf Sie.</p>
            <Button className="deep-blue text-white hover:bg-[#013766]/50 cursor-pointer font-semibold mt-6 py-4 px-6">Jetzt kostenlos testen</Button>
        </div>
      </section>
    </MaxWithWrapper>
  );
};

export default FeaturesSection;
