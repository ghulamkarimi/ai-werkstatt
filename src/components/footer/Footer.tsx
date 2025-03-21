import MaxWithWrapper from "../MaxWithWrapper";
import { Mail, Phone, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="deep-blue text-white py-12">
      <MaxWithWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About AI-Werkstatt Section */}
          <div>
            <h3 className="text-lg font-bold text-yellow-500 mb-4 uppercase">
              Über AI-Werkstatt
            </h3>
            <p className="text-gray-300 text-sm">
              AI-Werkstatt hilft Ihnen, Ihre Werkstatt digital zu transformieren. Wir bieten maßgeschneiderte Lösungen für Automatisierung, Online-Präsenz und mehr.
            </p>
          </div>

          {/* Blog Section */}
          <div>
            <h3 className="text-lg font-bold text-yellow-500 mb-4 uppercase">
              Neueste Blogbeiträge
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-500 text-sm flex items-center gap-2"
                >
                  <ArrowRight size={16} className="text-yellow-500" />
                  Wie AI Ihre Werkstatt revolutionieren kann
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-500 text-sm flex items-center gap-2"
                >
                  <ArrowRight size={16} className="text-yellow-500" />
                  Die Zukunft der Automatisierung in Werkstätten
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-500 text-sm flex items-center gap-2"
                >
                  <ArrowRight size={16} className="text-yellow-500" />
                  Tipps für eine erfolgreiche Online-Präsenz
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold text-yellow-500 mb-4 uppercase">
              Schnellzugriff
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 text-sm">
                  Startseite
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 text-sm">
                  Unsere Dienstleistungen
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 text-sm">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 text-sm">
                  Impressum
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-bold text-yellow-500 mb-4 uppercase">
              Kontaktieren Sie uns
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-yellow-500" />
                <a href="mailto:info@ai-werkstatt.de" className="text-gray-300 hover:text-yellow-500 text-sm">
                  info@ai-werkstatt.de
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-yellow-500" />
                <a href="tel:+491707407417" className="text-gray-300 hover:text-yellow-500 text-sm">
                  +49 170 740 7417
                </a>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <a href="#" className="text-gray-300 hover:text-yellow-500">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-500">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-500">
                  <Instagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-500 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AI-Werkstatt. Alle Rechte vorbehalten.
          </p>
        </div>
      </MaxWithWrapper>
    </footer>
  );
};

export default Footer;