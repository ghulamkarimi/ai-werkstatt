"use client";

import { useDispatch, useSelector } from "react-redux";
import AppSidebar from "../components/appSidebar/AppSidebar";
import { Menu } from "lucide-react";
import { RootState } from "@/feature/store";
import { setIsPanelOpen, setToggleSidebarMenu } from "@/feature/reducer/appSlice";
import Footer from "@/components/footer/Footer";
import { BsChatRightText } from "react-icons/bs"; // Chat-Icon
import { setIsChatAiOpen } from "@/feature/reducer/chatAiSlice";
import ChatAi from "@/components/chatAi/ChatAiComponent";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { toggleSidebarMenu } = useSelector((state: RootState) => state.app);
  const { isChatAiOpen } = useSelector((state: RootState) => state.chatAi);
  const dispatch = useDispatch();

  const handleChatClick = () => {
    dispatch(setIsChatAiOpen(!isChatAiOpen));
  };


  return (
    <div className="relative min-h-screen">
      {/* Hintergrund-Element */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#000000] to-[#0b0842] opacity-30"
        />
      </div>

      {/* Container für Sidebar und Backdrop */}
      {toggleSidebarMenu && (
        <div
          className="fixed inset-0 z-10 backdrop-blur-lg bg-gray-900/50"
          onClick={() => dispatch(setToggleSidebarMenu(false))}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-20 transition-all duration-300 ${
          toggleSidebarMenu ? "w-fit" : "w-0 overflow-hidden"
        } pointer-events-auto`}
      >
        <AppSidebar />
      </div>

      {/* Hamburger-Menü-Icon */}
      <div className="absolute top-18 left-4 z-10 md:hidden">
        <Menu
          className="w-8 h-8 cursor-pointer text-black"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setToggleSidebarMenu(!toggleSidebarMenu));
            dispatch(setIsPanelOpen(false));
          }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden relative z-0">{children}</main>

      {/* Chat-Icon */}
      <div
        className="fixed bottom-5 right-5 z-50 bg-blue-600 p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-colors"
        onClick={handleChatClick}
      >
        <BsChatRightText className="w-10 h-10 text-white" />
      </div>

      {isChatAiOpen && <ChatAi />}

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;