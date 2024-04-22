import React from "react";
import NavLink from "./NavLink";
import { links } from "@/data/headerData";

function Nav() {
  return (
    <div>
      <ul className="flex gap-12 text-[15px] font-bold leading-[25px]">
        {links.map((l, i) => (
          <NavLink key={i}>{l}</NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
