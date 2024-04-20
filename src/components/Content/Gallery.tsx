import Image from "next/image";
import React from "react";
import firstImage from "/public/vacation1.png";
import secondImage from "/public/vacation2.png";

function Gallery() {
  return (
    <article className="grid grid-cols-6">
      <div className="col-span-2 row-start-1 flex items-end">
        <h2 className="mb-2 text-lg font-bold leading-10">Галерия</h2>
      </div>
      <div className="col-span-full row-start-2 grid grid-cols-4 gap-4">
        <div className="col-start-1 col-end-3">
          <Image
            height={158}
            width={294}
            src={firstImage}
            alt="Панорамна снимка на хотел"
          />
        </div>
        <div className="col-start-3 flex -translate-x-11 gap-4">
          <Image
            className=""
            src={secondImage}
            alt="Снимка на културно наследство в Йордания"
          />
          <Image
            className=""
            src={secondImage}
            alt="Снимка на културно наследство в Йордания"
          />
        </div>
        <div className="col-start-1 col-end-3 flex gap-4">
          <Image
            className=""
            src={secondImage}
            alt="Снимка на културно наследство в Йордания"
          />
          <Image
            className=""
            src={secondImage}
            alt="Снимка на културно наследство в Йордания"
          />
        </div>
        <div className="col-start-3 col-end-5">
          <Image
            height={158}
            width={294}
            src={firstImage}
            className="-translate-x-1"
            alt="Панорамна снимка на хотел"
          />
        </div>
      </div>
    </article>
  );
}

export default Gallery;
