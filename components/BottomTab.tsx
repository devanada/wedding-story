import { IoHome, IoLocation, IoCalendar } from "react-icons/io5";
import { GiLinkedRings } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";

interface MenusType {
  id: number;
  title: string;
  logo: any;
  href: string;
}

export default function BottomTab() {
  const [menus] = useState<MenusType[]>([
    {
      id: 1,
      title: "Home",
      logo: IoHome,
      href: "section-home",
    },
    {
      id: 2,
      title: "Couple",
      logo: GiLinkedRings,
      href: "section-couple",
    },
    {
      id: 3,
      title: "Location",
      logo: IoLocation,
      href: "section-location",
    },
    {
      id: 4,
      title: "Date",
      logo: IoCalendar,
      href: "section-date",
    },
  ]);

  const handleScroll = (href: string) => {
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full grid grid-cols-4 gap-2 sticky bottom-0 bg-gray-100 dark:bg-zinc-800">
      {menus.map((menu) => (
        <div
          key={menu.id}
          className="flex flex-col items-center justify-center cursor-pointer p-1 text-gray-500 focus:text-teal-500 hover:text-teal-500"
          onClick={() => handleScroll(menu.href)}
        >
          <menu.logo className="text-2xl" />
          <p className="text-lg">{menu.title}</p>
        </div>
      ))}
    </div>
  );
}
