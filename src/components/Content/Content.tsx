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
      <section className="col-span-full md:col-start-2 md:col-end-12 lg:col-start-1 lg:col-end-8 2xl:col-start-2 2xl:col-end-8 2xl:ml-32  2xl:pr-2 2xl:pt-24">
        <div className="px-6 py-6 sm:px-12 md:py-12  2xl:pl-16">
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
