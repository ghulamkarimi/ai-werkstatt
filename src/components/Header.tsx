import { Phone, Mail } from "lucide-react";
import MaxWithWrapper from "./MaxWithWrapper";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <header className="bg-[#013766] text-white">
      {/* Marquee Section: Scrolling Contact Info */}
      <div className="bg-blue-700 py-3">
        <MaxWithWrapper className="overflow-hidden">
          <Marquee speed={40} gradient={false} pauseOnHover={true}>
            <div className="flex items-center gap-6 mx-6">
              {/* Telefon */}
              <span className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <p className="text-sm font-medium">+49 176 300 74 489</p>
              </span>
              {/* E-Mail */}
              <span className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <p className="text-sm font-medium">info@ai-werkstatt.de</p>
              </span>
            </div>
          </Marquee>
        </MaxWithWrapper>
      </div>
    </header>
  );
};

export default Header;