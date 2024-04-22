import React from "react";
import About from "./About/About";
import Gallery from "./Gallery";
import Promos from "./Promos";
import Singers from "./Singers/Singers";
import Hotels from "./Hotels";
import Testimonials from "./Testimonials";
import Program from "./Program/Program";

function Content() {
  return (
    <div className="col-span-full grid grid-cols-12">
      <section className="col-start-2 col-end-8 ml-32  pr-2 pt-24">
        <div className="w-[85%] pl-16">
          <About />
          <Gallery />
          <Promos />
          <Singers />
          <Hotels />
          <Testimonials />
        </div>
      </section>
      <Program />
    </div>
  );
}

export default Content;
