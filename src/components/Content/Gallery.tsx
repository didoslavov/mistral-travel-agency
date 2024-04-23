import Image from "next/image";
import React from "react";
import firstImage from "/public/vacation1.png";
import secondImage from "/public/vacation2.png";

function Gallery() {
  return (
    <article className="col-start-3 mb-6 grid grid-cols-4 md:mb-10">
      <div className="col-span-2 row-start-1 flex items-end">
        <h3 className="mb-2 text-lg font-bold leading-10">Галерия</h3>
      </div>
      <div className="col-span-full row-start-2 grid grid-cols-4 gap-4">
        <div className="col-start-1 col-end-3 overflow-hidden">
          <Image
            src={firstImage}
            alt="Панорамна снимка на хотел"
            className="w-full transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="overflow-hidden">
          <Image
            className="h-full w-full transform transition-transform duration-300 ease-in-out hover:scale-105"
            src={secondImage}
            alt="Снимка на културно наследство в Йордания"
          />
        </div>
        <div className="overflow-hidden">
          <Image
            className="h-full w-full transform transition-transform duration-300 ease-in-out hover:scale-105"
            src={secondImage}
            alt="Снимка на културно наследство в Йордания"
          />
        </div>
        <div className="overflow-hidden">
          <Image
            className="h-full w-full transform transition-transform duration-300 ease-in-out hover:scale-105"
            src={secondImage}
            alt="Снимка на културно наследство в Йордания"
          />
        </div>
        <div className="overflow-hidden">
          <Image
            className="h-full w-full transform transition-transform duration-300 ease-in-out hover:scale-105"
            src={secondImage}
            alt="Снимка на културно наследство в Йордания"
          />
        </div>
        <div className="col-start-3 col-end-5 overflow-hidden">
          <Image
            src={firstImage}
            className="w-full -translate-x-1 transform transition-transform duration-300 ease-in-out hover:scale-105"
            alt="Панорамна снимка на хотел"
          />
        </div>
      </div>
    </article>
  );
}

export default Gallery;
