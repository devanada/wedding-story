import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import clsx from "clsx";

import Section from "components/Section";

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;

function Home() {
  const [theDay] = useState<any>(new Date("05/07/2023"));
  const [countdown, setCountdown] = useState<number[]>([0, 0, 0, 0]);
  const [label] = useState<string[]>(["days", "hours", "minutes", "seconds"]);

  useEffect(() => {
    const interval = setInterval(countTimer, 500);
    return () => clearInterval(interval);
  }, [countdown]);

  const countTimer = () => {
    const now: any = new Date();
    const distance = theDay - now;

    const days = Math.floor(distance / _day);
    const hours = Math.floor((distance % _day) / _hour);
    const minutes = Math.floor((distance % _hour) / _minute);
    const seconds = Math.floor((distance % _minute) / _second);
    const result = [days, hours, minutes, seconds];
    setCountdown(result);
  };

  return (
    <Section id="section-home" full>
      <div
        style={{
          backgroundImage: `url(/images/background.jpg)`,
        }}
        className="relative flex h-full w-full flex-col items-center justify-center gap-6 bg-cover bg-center"
      >
        {/* https://www.freepik.com/search?color=black&format=search&last_filter=color&last_value=black&query=wedding%20floral */}
        <h1 className="font-cormorant text-3xl uppercase text-white">
          The Wedding Of
        </h1>
        <p className="font-island text-6xl text-white">Yoga & Debby</p>
        <p className="font-cormorant text-3xl text-white">
          {dayjs(theDay).format("dddd, DD MMMM YYYY")}
        </p>
        <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
          {countdown.map((item: number, index: number) => {
            var style: any = { "--value": item } as React.CSSProperties;
            return (
              <div
                className="rounded-box flex flex-col bg-neutral/50 p-2 text-white"
                key={index}
              >
                <span
                  className={clsx(
                    item < 99 && "countdown",
                    "font-mono text-5xl"
                  )}
                >
                  {item > 99 ? <p>{item}</p> : <span style={style}></span>}
                </span>
                {label[index]}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Home;
