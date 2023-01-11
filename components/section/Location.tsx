import React from "react";

import Section from "components/Section";

function Location() {
  return (
    <Section id="section-location" full>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/images/background.jpg)`,
        }}
        className="relative flex h-full w-full flex-col items-center justify-center bg-cover bg-center"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d587.5501181049586!2d111.97091572824758!3d-7.837324679455561!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78575ed21213eb%3A0x2d0a3d6f6a9651ed!2sToko%20Selep%20Sambel%20Bu%20Anik!5e0!3m2!1sen!2ssg!4v1665923735726!5m2!1sen!2ssg"
          width="100%"
          height="50%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Section>
  );
}

export default Location;
