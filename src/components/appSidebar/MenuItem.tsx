"use client"

import { Home, Settings, Contact, User } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { PiInvoiceDuotone } from "react-icons/pi";
import { RiPriceTag3Line } from "react-icons/ri";


export const menuItem = [
  {
    title: "Startseite",
    link: "/",
    icon: <Home />,
    arrowIcon: <ArrowRight />,
    subMenu: [

    ],
  },
  {
    title: "Features",
    link: "",
    icon: <MdOutlineFeaturedPlayList />
    ,
    arrowIcon: <ArrowRight />,
    subMenu: [
      { title: "Online Termine Buchen", link: "/termine/buchung", icon: <BsCalendar2Date /> },
      { title: "Rechnungen&Zahlungen", link: "/termine/buchung", icon: <PiInvoiceDuotone /> },
      { title: "KundenVerwaltung", link: "/kundenverwaltung", icon: <User /> },

    ],
  },
  {
    title: "Preise",
    link: "",
    icon: <RiPriceTag3Line />,
    arrowIcon: <ArrowRight />,
    subMenu: [

    ],
  },
  {
    title: "kontakt",
    link: "",
    icon: <Contact />,
    arrowIcon: <ArrowRight />,
    subMenu: [

    ],
  },
  {
    title: "Einstellung",
    link: "",
    icon: <Settings />,
    arrowIcon: <ArrowRight />,
    subMenu: [
      
    ],
  },

];

export const handleMenuItemClick = (title: string) => {
  document.title = `Novinex - ${title}`;
};
