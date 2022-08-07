import { IoHome, IoLocation, IoCalendar } from "react-icons/io5";
import { GiLinkedRings } from "react-icons/gi";
import React, { useState } from "react";

interface MenusType {
  id: number;
  title: string;
  logo: any;
}

export default function BottomTab() {
  const [menus] = useState<MenusType[]>([
    {
      id: 1,
      title: "Home",
      logo: IoHome,
    },
    {
      id: 2,
      title: "Couple",
      logo: GiLinkedRings,
    },
    {
      id: 3,
      title: "Location",
      logo: IoLocation,
    },
    {
      id: 4,
      title: "Date",
      logo: IoCalendar,
    },
  ]);

  return (
    <div className="w-full grid grid-cols-4 gap-2 sticky bottom-0 bg-white dark:bg-[#2d2e2d]">
      {menus.map((menu) => (
        <div
          key={menu.id}
          className="flex flex-col items-center justify-center p-1 cursor-pointer text-gray-500 focus:text-teal-500 hover:text-teal-500"
        >
          <menu.logo className="text-2xl" />
          <p className="text-xl">{menu.title}</p>
        </div>
      ))}
    </div>
  );
}
