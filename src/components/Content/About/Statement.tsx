import React, { ReactNode } from "react";

function Statement({ children }: { children: ReactNode }) {
  return <p className="leading-[27px]">{children}</p>;
}

export default Statement;
