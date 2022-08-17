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
    <div className="flex w-full my-element flex-col items-center bg-gray-100 dark:bg-[#2d2e2d] pattern overflow-y-auto">
      <Head>
        <title>Wedding Story - Yoga &#38; Debby</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-w-full md:min-w-[480px] max-w-full md:max-w-[480px] border-x dark:border-neutral-700">
        <Header />
        <div className="flex flex-col flex-1 w-full p-3 bg-white dark:bg-neutral-700">
          {children}
        </div>
        <BottomTab />
      </main>
    </div>
  );
}
