import { Phone, Mail } from "lucide-react";
import MaxWithWrapper from "./MaxWithWrapper";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <header className="bg-[#013766] text-white">
      {/* Marquee Section: Scrolling Contact Info */}
      <div className="py-3">
        <MaxWithWrapper className="overflow-hidden">
          <Marquee speed={40} gradient={false} pauseOnHover={true}>
            <div className="flex items-center gap-20 mx-6">
              {/* Telefon */}
              <span className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a
                  href="tel:+491707407417"
                  className="text-sm font-medium hover:underline hover:text-yellow-400 transition-colors"
                >
                  +49 170 740 74 17
                </a>
              </span>
              {/* E-Mail */}
              <span className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a
                  href="mailto:info@ai-werkstatt.de"
                  className="text-sm font-medium hover:underline hover:text-yellow-400 transition-colors"
                >
                  info@ai-werkstatt.de
                </a>
              </span>
            </div>
          </Marquee>
        </MaxWithWrapper>
      </div>
    </header>
  );
};

export default Header;