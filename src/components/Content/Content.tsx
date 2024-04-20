import React from "react";
import About from "./About";
import Gallery from "./Gallery";
import Promos from "./Promos";

function Content() {
  return (
    <section className="col-span-6 col-start-3 row-start-3 w-[78%] -translate-y-24 ps-14 pt-40">
      <About />
      <Gallery />
      <Promos />
    </section>
  );
}

export default Content;
