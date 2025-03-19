import { Button } from "@/componnetsUi/button";
import MaxWithWrapper from "../MaxWithWrapper";

const MainContent = () => {
  return (
    <MaxWithWrapper className="w-full flex flex-col lg:flex-row items-center gap-12 py-16">
      {/* Image Section (Left) */}
      <div className="w-full lg:w-3/5 h-[580px] relative">
        <div className="relative h-full">
          <img
            src="/bild3.png"
            alt="Werkstatt Dashboard"
            className="w-full h-full rounded-2xl object-cover "
          />
          <img
            src="/bild5.png"
            alt="Werkstatt Details"
            className="absolute -top-8 -right-8 lg:w-60 lg:h-60 w-45 h-45 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Contact Form (Right) */}
      <div className="w-full lg:w-2/5 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Kostenlose Beratung
        </h2>
        <p className="text-gray-600 text-center mb-8 text-lg">
          Optimieren Sie Ihr Unternehmen mit AI-Werkstatt.
        </p>
        <form className="space-y-6">
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
              className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              required
            />
            <label htmlFor="privacy" className="text-sm text-gray-600">
              Ich stimme den{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Datenschutzbestimmungen
              </a>{" "}
              zu.
            </label>
          </div>
          <Button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300">
            Beratung anfordern
          </Button>
        </form>
      </div>
    </MaxWithWrapper>
  );
};

export default MainContent;