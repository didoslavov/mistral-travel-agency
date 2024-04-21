import React from "react";
import About from "./About";
import Gallery from "./Gallery";
import Promos from "./Promos";
import Singers from "./Singers";
import Hotels from "./Hotels";
import Testimonials from "./Testimonials";

function Content() {
  return (
    <section className="col-span-6 col-start-3 row-start-2 w-[78%] -translate-y-24 ps-14 pt-40">
      <About />
      <Gallery />
      <Promos />
      <Singers />
      <Hotels />
      <Testimonials />
    </section>
  );
}

export default Content;
