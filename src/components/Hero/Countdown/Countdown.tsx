"use client";

import { Fragment, useEffect, useState } from "react";
import CountdownUnit from "./CountdownUnit";
import { getCountdownUnits } from "@/data/heroData";

function Countdown() {
  const initialTime = { days: 11, hours: 14, minutes: 55 };
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [countdownUnits, setCountdownUnits] = useState(
    getCountdownUnits(initialTime),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        let { days, hours, minutes } = prevTime;
        const totalMinutes = days * 24 * 60 + hours * 60 + minutes - 1;

        if (totalMinutes <= 0) {
          clearInterval(intervalId);
          return initialTime;
        }

        days = Math.floor(totalMinutes / (24 * 60));
        hours = Math.floor((totalMinutes % (24 * 60)) / 60);
        minutes = totalMinutes % 60;

        return { days, hours, minutes };
      });
    }, 60000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCountdownUnits(getCountdownUnits(remainingTime));
  }, [remainingTime]);

  return (
    <div className="mb-10 flex items-center gap-x-[82px] text-[#FEFEFE]">
      {countdownUnits.map((c, i) => {
        return (
          <Fragment key={i}>
            <CountdownUnit value={c.value} label={c.label} />
            {i < countdownUnits.length - 1 && (
              <span className="h-[50%] w-[4px] -translate-y-1 bg-[#FEFEFE]"></span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export default Countdown;
