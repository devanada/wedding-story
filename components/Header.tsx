import { useState, useContext } from "react";
import { Switch } from "@headlessui/react";
import { ThemeContext } from "../utils/context";

export default function Header() {
  const { setTheme } = useContext(ThemeContext);
  const [enabled, setEnabled] = useState(false);

  const handleThemeChange = (mode: string) => {
    setEnabled(!enabled);
    setTheme(mode);
  };

  return (
    <nav className="w-full border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-100 dark:bg-zinc-800 flex justify-end items-center">
      <Switch
        checked={enabled}
        onChange={() => handleThemeChange(enabled ? "light" : "dark")}
        className="bg-white dark:bg-black relative inline-flex h-[25px] w-[49px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span
          aria-hidden="true"
          className="translate-x-0 dark:translate-x-6 pointer-events-none inline-block h-[21px] w-[21px] transform rounded-full bg-black dark:bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </Switch>
    </nav>
  );
}
