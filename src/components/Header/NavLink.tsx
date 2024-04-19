import React, { ReactNode } from "react";

function NavLink({ children }: { children: ReactNode }) {
  return (
    <li>
      <a href="#">{children}</a>
    </li>
  );
}

export default NavLink;
