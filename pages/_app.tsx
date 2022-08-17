import "../styles/globals.css";
import { useEffect, useState, useMemo } from "react";
import type { AppProps } from "next/app";
import { ThemeContext } from "../utils/context";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>("dark");
  const mode = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const documentHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("resize", documentHeight);
    documentHeight();
  }, []);

  return (
    <ThemeContext.Provider value={mode}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
