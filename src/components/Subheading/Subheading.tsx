import React, { ReactNode } from "react";

function Subheading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[27px] font-bold leading-10 text-main-grey">
      {children}
    </h2>
  );
}

export default Subheading;
