import Image from "next/image";
import React from "react";
import fatjoe from "/public/fatjoe.png";
import eminem from "/public/eminem.png";
import cent from "/public/50cent.png";
import jayz from "/public/jayz.png";

function Singers() {
  return (
    <article className="mb-10">
      <h2 className="mb-2 text-lg font-bold leading-10">Изпълнители</h2>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <Image src={fatjoe} alt="Снимка на Фет Джо" />
          <h4>Fat Joe</h4>
        </div>
        <div className="flex flex-col items-center">
          <Image src={eminem} alt="Снимка на Еминем" />
          <h4>Eminem</h4>
        </div>
        <div className="flex flex-col items-center">
          <Image src={cent} alt="Снимка на 50 сент" />
          <h4>50 cent</h4>
        </div>
        <div className="flex flex-col items-center">
          <Image src={jayz} alt="Снимка на Джей Зи" />
          <h4>Jay-Z</h4>
        </div>
      </div>
    </article>
  );
}

export default Singers;
