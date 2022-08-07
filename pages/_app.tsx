import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const documentHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("resize", documentHeight);
    documentHeight();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
