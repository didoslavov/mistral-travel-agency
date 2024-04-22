import React from "react";
import { IconType } from "react-icons";

function InfoCard({ text, Icon }: { text: string; Icon: IconType }) {
  return (
    <div className="flex flex-col items-center bg-main-red px-2 py-2 transition-all duration-300 hover:-rotate-2 hover:scale-105 hover:cursor-pointer hover:bg-main-red-900 md:px-8 md:py-2 lg:px-[60px] lg:py-4">
      <Icon className="mb-1 text-xl lg:text-[28px]" />
      <p className="text-nowrap text-xs md:leading-4">{text}</p>
    </div>
  );
}

export default InfoCard;
