import Head from "next/head";

import BottomTab from "./BottomTab";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}
/* 
TODO: Add internationalization support
*/
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="my-element pattern flex w-full snap-y snap-mandatory flex-col items-center overflow-y-auto bg-gray-100 dark:bg-[#2d2e2d]">
      <Head>
        <title>Wedding Story - Yoga &#38; Debby</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="border-x-neutral-700 min-w-full max-w-full border-x dark:border-zinc-800 md:min-w-[480px] md:max-w-[480px]">
        {/* <Header /> */}
        <div className="dark:bg-neutral-700 flex w-full flex-1 flex-col bg-white">
          {children}
        </div>
        <BottomTab />
      </main>
    </div>
  );
}
