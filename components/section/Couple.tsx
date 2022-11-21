import Image from "next/image";
import React from "react";

import Section from "components/Section";

function Couple() {
  return (
    <Section id="section-couple" variant="secondary">
      <div className="relative h-full w-full">
        <div className="absolute top-0 left-0 h-56 w-56">
          <Image
            src="/images/floral.png"
            alt="placehold images"
            layout="fill"
            objectFit="fill"
          />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div>
            <p className="text-center font-cormorant text-4xl font-semibold text-gold-2">
              Yoga Swami Devanada
            </p>
            <p className="text-center font-javanese text-2xl text-gold-2">
              ꧋ꦪꦺꦴꦒꦱ꧀ꦮꦩꦶꦣꦼꦮ꦳ꦤꦣ
            </p>
            <p className="break-words text-center font-cormorant text-lg text-gold-2">
              Putra pertama dari Bapak Hermanto Priyotomo & Ibu Titik Afriati
            </p>
          </div>
          <span className="text-center font-cormorant text-2xl font-semibold text-gold-2">
            &#38;
          </span>
          <div>
            <p className="text-center font-cormorant text-4xl font-semibold text-gold-2">
              Debby Muliawati Gutama
            </p>
            <p className="text-center font-javanese text-2xl text-gold-2">
              ꧋ꦣꦼꦧ꧀ꦧ꧀ꦪ꧀ꦩꦸꦭꦶꦪꦮꦠꦶꦒꦸꦠꦩ
            </p>
            <p className="break-words text-center font-cormorant text-lg text-gold-2">
              Putri pertama dari Bapak Sai'in & Ibu Astianik
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-56 w-56">
          <Image
            src="/images/floral.png"
            alt="placehold images"
            layout="fill"
            objectFit="fill"
            className="rotate-180"
          />
        </div>
      </div>
    </Section>
  );
}

export default Couple;
