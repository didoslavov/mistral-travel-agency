import React, { ReactNode } from "react";

function Statement({ children }: { children: ReactNode }) {
  return <p className="text-sm md:text-base md:leading-[27px]">{children}</p>;
}

export default Statement;
