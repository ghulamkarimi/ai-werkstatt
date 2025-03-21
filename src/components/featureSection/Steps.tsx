import { CheckCircle, Phone, FileText, Rocket, ArrowRight, Check } from "lucide-react";

const steps = [
  {
    title: "Logo & Name",
    description: "Wählen Sie einen passenden Namen und bereiten Sie Ihr Werkstatt-Logo vor oder lassen Sie uns Ihnen helfen.",
    icon: <CheckCircle size={36} className="text-orange-500" />,
  },
  {
    title: "Kontaktieren",
    description: "Nehmen Sie Kontakt mit uns auf und besprechen Sie Ihre Anforderungen.",
    icon: <Phone size={40} className="text-orange-500" />,
  },
  {
    title: "Erstellung",
    description: "Wir setzen Ihre Werkstatt-Seite professionell um und passen sie an.",
    icon: <FileText size={40} className="text-orange-500" />,
  },
  {
    title: "Los gehts!",
    description: "Ihre Plattform ist einsatzbereit und kann genutzt werden.",
    icon: <Rocket size={40} className="text-orange-500" />,
  },
];

const Steps = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-white">
      {/* Title */}
      <h2 className="text-xl  md:text-2xl font-extrabold text-gray-900 mb-12 tracking-tight uppercase">
        In 4 Schritten zur eigenen Werkstatt-Seite und Admin-Panel
      </h2>

      {/* Steps Container */}
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center xl:gap-6 max-w-5xl mx-auto ">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center h-60">
            {/* Step Card */}
            <div className="py-6 bg-white h-full text-center rounded-lg w-64">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 uppercase">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>

            {/* Arrow between steps, Check after the last step */}
            {index < steps.length - 1 ? (
              <div className="text-orange-500 text-2xl mx-1">
                <ArrowRight className="stroke-2" size={30} />
              </div>
            ) : (
              <div className="text-orange-500 text-2xl mx-1">
                <Check size={30} className="text-orange-500" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;