import Head from "next/head";
import React from "react";

import BottomTab from "./BottomTab";

interface LayoutProps {
  children: React.ReactNode;
}
/* 
TODO: Add internationalization support
*/
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex w-full my-element flex-col items-center bg-white dark:bg-[#2d2e2d]">
      <Head>
        <title>Wedding Story - Yoga &#38; Debby</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full md:w-3/4 lg:w-1/2 h-full border-x overflow-auto">
        <div className="flex flex-col flex-1 w-full p-3">{children}</div>
        <BottomTab />
      </main>
    </div>
  );
}
