import { IoHome, IoLocation, IoCalendar } from "react-icons/io5";
import { GiLinkedRings } from "react-icons/gi";
import { useState } from "react";

interface MenusType {
  id: number;
  title: string;
  logo: any;
  href: string;
  active: boolean;
}

export default function BottomTab() {
  const [menus] = useState<MenusType[]>([
    {
      id: 1,
      title: "Home",
      logo: IoHome,
      href: "section-home",
      active: true,
    },
    {
      id: 2,
      title: "Couple",
      logo: GiLinkedRings,
      href: "section-couple",
      active: false,
    },
    {
      id: 3,
      title: "Location",
      logo: IoLocation,
      href: "section-location",
      active: false,
    },
    {
      id: 4,
      title: "Gift",
      logo: IoCalendar,
      href: "section-gift",
      active: false,
    },
  ]);

  const handleScroll = (href: string) => {
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="btm-nav sticky bottom-0 bg-gray-100 dark:bg-zinc-800">
      {menus.map((menu) => (
        <div
          key={menu.id}
          className="flex cursor-pointer flex-col items-center justify-center text-gray-500 hover:text-teal-500 focus:text-teal-500 "
          onClick={() => handleScroll(menu.href)}
        >
          <menu.logo className="text-2xl text-gold" />
          <p className="text-lg text-gold">{menu.title}</p>
        </div>
      ))}
    </div>
  );
}
