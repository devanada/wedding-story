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
    <Section id="section-home">
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        {/* <img
          src="/images/flower-pattern.png"
          alt="placehold images"
          className="w-96 h-96 absolute inset-0 m-auto"
        /> */}
        <p className="font-cormorant text-3xl text-gold-2">
          {dayjs(theDay).format("dddd, DD MMMM YYYY")}
        </p>
        <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
          {countdown.map((item: number, index: number) => {
            var style: any = { "--value": item } as React.CSSProperties;
            return (
              <div className="flex flex-col text-gold-2">
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
