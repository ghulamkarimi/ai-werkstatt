import MaxWithWrapper from "../MaxWithWrapper";

const Consultant = () => {
  return (
    <MaxWithWrapper>
      <section className="py-16 mt-4 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
          {/* Textbereich */}
          <div className="w-full lg:w-2/5">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Intelligente Lösungen für Ihre Werkstatt
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Optimieren Sie Ihre Abläufe mit unserer KI-gestützten Werkstattsoftware.
              Automatische Terminverwaltung, intelligente Kundenkommunikation und
              effiziente Rechnungsstellung {"-"} Alles in einer einzigen Plattform.
            </p>
            <button
              className="deep-blue cursor-pointer text-white px-6 py-3 rounded-lg shadow-md font-semibold 
                hover:bg-blue-700 transition duration-300"
            >
              Mehr Details
            </button>
          </div>

          {/* Bildbereich */}
          <img
            src="/beratung.jpg"
            alt="Beratung"
            className="w-full rounded-2xl shadow-lg h-[500px] object-cover lg:w-3/5"
          />
        </div>
      </section>
    </MaxWithWrapper>
  );
};

export default Consultant;
