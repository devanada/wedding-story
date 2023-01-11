import Image from "next/image";
import React from "react";

interface Props {
  onClick?: () => void;
  guestName: string;
}

function Landing({ onClick, guestName }: Props) {
  return (
    <>
      <section className="section-container bg-black">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/images/background2.png)`,
            }}
            className="relative h-full w-full bg-cover bg-center"
          >
            <div className="flex h-full w-full flex-col items-center justify-center">
              <p className="font-island text-6xl text-gold">Yoga & Debby</p>
            </div>
            <div className="absolute inset-x-0 bottom-10">
              <p className="text-center font-cormorant text-xl text-gold">
                To:
              </p>
              <p className="break-words bg-black/80 text-center font-cormorant text-3xl text-gold">
                {guestName ? guestName : ""}
              </p>
            </div>
            <div className="absolute inset-0 m-auto h-1/2 w-3/4">
              <Image
                src="/images/flower-pattern.png"
                alt="placehold images"
                layout="fill"
                objectFit="fill"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="btm-nav sticky bg-zinc-800">
        <button onClick={onClick}>Open Invitation</button>
      </div>
    </>
  );
}

export default Landing;
