import React from "react";
import Logos from "./Logos";

function Partners() {
  return (
    <section className="col-span-full grid grid-cols-12 bg-main-grey-100 p-20">
      <div className="col-start-3 col-end-11">
        <h2 className="col-start-3 col-end-11 mb-4 text-[27px] font-bold leading-10 text-main-grey">
          Партньори
        </h2>
        <p className="mb-12 w-[36%] text-sm leading-[21px] text-main-grey">
          Our customers accomplish amazing things every day. They work to find
          cures to cancer, travel to space.
        </p>
        <Logos />
      </div>
    </section>
  );
}

export default Partners;
