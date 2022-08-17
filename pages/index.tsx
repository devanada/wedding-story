import type { NextPage } from "next";
import { useRef } from "react";

import Layout from "../components/Layout";

const Home: NextPage = () => {
  const homeRef = useRef(null);
  return (
    <Layout>
      <section
        id="section-home"
        className="w-full h-screen flex flex-col justify-center items-center"
      >
        <div>
          <p className="font-cormorant text-2xl">Yoga Swami Devanada</p>
          <p className="font-javanese text-2xl">꧋ꦪꦺꦴꦒꦱ꧀ꦮꦩꦶꦣꦼꦮ꦳ꦤꦣ</p>
        </div>
        <span className="font-cormorant text-2xl">&#38;</span>
        <div>
          <p className="font-cormorant text-2xl">Debby Muliawati Gutama</p>
          <p className="font-javanese text-2xl">꧋ꦣꦼꦧ꧀ꦧ꧀ꦪ꧀ꦩꦸꦭꦶꦪꦮꦠꦶꦒꦸꦠꦩ</p>
        </div>
      </section>
      <section id="section-couple" className="w-full h-screen">
        <h1>Couple</h1>
      </section>
      <section id="section-location" className="w-full h-screen">
        <h1>Location</h1>
      </section>
      <section id="section-date" className="w-full h-screen">
        <h1>Date</h1>
      </section>
    </Layout>
  );
};

export default Home;
