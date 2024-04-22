import React from "react";
import Subheading from "../../Subheading/Subheading";
import { aboutData } from "@/data/contentData";
import Statement from "./Statement";

function About() {
  return (
    <article className="mb-[42px] flex w-[88%] flex-col gap-7">
      <Subheading>За събитието</Subheading>
      {aboutData.map((s, i) => (
        <Statement key={i}>{s}</Statement>
      ))}
    </article>
  );
}

export default About;
