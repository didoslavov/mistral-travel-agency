import { RxDividerVertical } from "react-icons/rx";
import React from "react";

function Countdown() {
  return (
    <div className="mb-12 flex items-center gap-20 text-[#FEFEFE]">
      <div className="flex flex-col items-center">
        <time className="text-[58px]" dateTime={`P${11}D`}>
          {11}
        </time>
        <span className="text-[14px]">дни</span>
      </div>
      <span className="h-[50%] w-[3px] -translate-y-1 bg-[#FEFEFE]"></span>
      <div className="flex flex-col items-center">
        <time className="text-[58px]" dateTime={`PT${14}H`}>
          {14}
        </time>
        <span className="text-[14px]">часа</span>
      </div>
      <span className="h-[50%] w-[3px] -translate-y-1 bg-[#FEFEFE]"></span>
      <div className="flex flex-col items-center">
        <time className="text-[58px]" dateTime={`PT${55}M`}>
          {55}
        </time>
        <span className="text-[14px]">минути</span>
      </div>
    </div>
  );
}

export default Countdown;
