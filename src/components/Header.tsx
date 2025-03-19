import { Phone, Mail } from "lucide-react";
import MaxWithWrapper from "./MaxWithWrapper";

const Header = () => {
  return (
  
    <header className="bg-[#013766]  ">
        <MaxWithWrapper className=" text-white shadow-md flex justify-between items-center py-1.5 ">
      <span className="flex items-center gap-2">
        <img src="/webkraft.png" alt="Logo" className="w-10 h-10 rounded-full " />
        <p className="text-sm font-medium">AI-Werkstatt</p>
      </span>
      <span className="hidden md:flex items-center gap-2">

        <Phone className="w-4 h-4 text-yellow-500" />
        <p className="text-sm font-medium">+49 176 300 74 489</p>
      </span>
      <span className="flex items-center gap-2">
       <Mail className="w-4 h-4 text-yellow-500" />
       <p className="text-sm font-medium">info@ai-werkstatt.de</p>
       </span>
       </MaxWithWrapper>
    </header>
  
  );
};

export default Header;