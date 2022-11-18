import Image from "next/image";
import React from "react";

import Section from "components/Section";

function Gift() {
  return (
    <Section id="section-gift" variant="secondary">
      <div className="relative h-full w-full">
        <div className="absolute top-0 left-0 h-56 w-56">
          <Image
            src="/images/floral.png"
            alt="placehold images"
            layout="fill"
            objectFit="fill"
          />
        </div>
        <div className="h-full w-full">
          <p className="text-center font-cormorant text-2xl text-black">Gift</p>
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

export default Gift;
