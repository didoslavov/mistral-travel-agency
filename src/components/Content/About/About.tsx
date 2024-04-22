import React from "react";
import Subheading from "../../Subheading/Subheading";
import { aboutData } from "@/data/contentData";
import Statement from "./Statement";

function About() {
  return (
    <article className="mb-[42px] flex w-[95%] flex-col gap-6">
      <Subheading>За събитието</Subheading>
      {aboutData.map((s, i) => (
        <Statement key={i}>{s}</Statement>
      ))}
    </article>
  );
}

export default About;
