import React from "react";
import Subheading from "../../Subheading/Subheading";
import { aboutData } from "@/data/contentData";
import Statement from "./Statement";

function About() {
  return (
    <article className="mb-6 flex flex-col gap-3  md:mb-[42px] md:w-[95%] md:gap-6">
      <Subheading>За събитието</Subheading>
      {aboutData.map((s, i) => (
        <Statement key={i}>{s}</Statement>
      ))}
    </article>
  );
}

export default About;
