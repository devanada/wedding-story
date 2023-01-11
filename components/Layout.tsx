import Head from "next/head";

interface LayoutProps {
  children?: React.ReactNode;
}
/* 
TODO: Add internationalization support
*/
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="my-element pattern flex w-full snap-y snap-mandatory flex-col items-center overflow-y-auto bg-[#2d2e2d]">
      <Head>
        <title>Wedding Story - Yoga &#38; Debby</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="border-x-neutral-700 min-w-full max-w-full border-x border-zinc-800 md:min-w-[480px] md:max-w-[480px]">
        <div className="flex w-full flex-1 flex-col bg-white">{children}</div>
      </main>
    </div>
  );
}
