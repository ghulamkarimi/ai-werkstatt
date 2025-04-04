"use client";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { menuItem } from "./MenuItem";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { setToggleSidebarMenu } from "@/feature/reducer/appSlice";
import { RootState } from "@/feature/store";
import { X } from "lucide-react";
import React from "react";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const { toggleSidebarMenu } = useSelector((state: RootState) => state.app);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);
  const router = useRouter();

  const toggleSubMenu = (title: string) => {
    setActiveSubMenu(activeSubMenu === title ? null : title);
  };

  const handleSubItemClick = (title: string) => {
    setSelectedSubItem(title);
    dispatch(setToggleSidebarMenu(false));
  };

  const handleMainItemClick = (item: typeof menuItem[0]) => {
    if (item.subMenu && item.subMenu.length > 0) {
      toggleSubMenu(item.title); // Öffne/Schließe Untermenü, wenn eines existiert
    } else if (item.link) {
      router.push(item.link); // Navigiere zum Link, wenn kein Untermenü
      dispatch(setToggleSidebarMenu(false)); // Schließe Sidebar
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen z-50 bg-gray-200 shadow-xl ${
        toggleSidebarMenu
          ? "w-72 rounded-r-3xl translate-x-0"
          : "-translate-x-full"
      } ease-in-out duration-300`}
    >
      <div
        className={`${
          toggleSidebarMenu ? "" : "invisible"
        } transition-opacity duration-300`}
      >
        {/* Header with Close Icon */}
        <div className="flex items-center justify-between px-6 py-5 shadow-sm deep-blue rounded-tr-3xl">
          <h2 className="text-xl font-bold text-white">Menü</h2>
          <X
            className="w-8 h-8 cursor-pointer text-white transition-all"
            onClick={() => {
              dispatch(setToggleSidebarMenu(false));
            }}
          />
        </div>

        {/* Navigation */}
        <nav
          className={`flex flex-col text-lg mt-4 ${
            toggleSidebarMenu ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          {menuItem.map((item, index) => (
            <div key={index} className="flex flex-col relative group">
              {/* Main Menu Item */}
              <div
                className="flex w-full p-4 gap-3 transition-all duration-300 items-center justify-between cursor-pointer hover:bg-blue-50 rounded-lg"
                onClick={() => handleMainItemClick(item)}
              >
                <div className="flex gap-3 items-center">
                  <span className="w-6 h-6 text-indigo-600">
                    {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                  </span>
                  <span className="text-gray-800 hover:border-b-2 border-yellow-500">
                    {item.title}
                  </span>
                </div>
                {item.subMenu && item.subMenu.length > 0 && (
                  <span
                    className={`text-blue-900 font-bold transform transition-transform duration-300 ${
                      activeSubMenu === item.title ? "rotate-90" : ""
                    }`}
                  >
                    ›
                  </span>
                )}
              </div>

              {/* Submenu: Vertical for all screens */}
              {item.subMenu && activeSubMenu === item.title && (
                <div className="flex flex-col pl-8">
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.link}
                      className={`flex items-center gap-3 text-sm px-4 py-3 cursor-pointer transition-all ${
                        selectedSubItem === subItem.title
                          ? "bg-blue-100 text-blue-600 font-semibold"
                          : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                      onClick={() => handleSubItemClick(subItem.title)}
                    >
                      <span className="w-5 h-5 text-indigo-600">
                        {React.cloneElement(subItem.icon, {
                          className: "w-6 h-6",
                        })}
                      </span>
                      <span className="text-gray-800 hover:font-semibold">
                        {subItem.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AppSidebar;