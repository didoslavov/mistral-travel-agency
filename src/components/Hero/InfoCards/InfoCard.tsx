import React from "react";
import { IconType } from "react-icons";

function InfoCard({ text, Icon }: { text: string; Icon: IconType }) {
  return (
    <div className="flex flex-col items-center bg-main-red px-[60px] py-4 transition-all duration-300 hover:-rotate-2 hover:scale-105 hover:cursor-pointer hover:bg-main-red-900">
      <Icon className="mb-1 text-[28px]" />
      <p className="text-xs leading-4">{text}</p>
    </div>
  );
}

export default InfoCard;
