import { footerLinks } from "@/data/footerData";
import Link from "next/link";
import React from "react";
import NavLink from "../NavLink/NavLink";

function Nav() {
  const leftUl = footerLinks.slice(0, 3);
  const rightUl = footerLinks.slice(3);
  return (
    <nav className="col-span-2 col-start-7 ps-10 pt-[46px]">
      <h3 className="mb-7 text-[17px] font-extrabold leading-[25px]">
        Бързи връзки
      </h3>
      <div className="flex gap-4 text-[17px] leading-[25px]">
        <ul className="flex flex-1 flex-col gap-4">
          {leftUl.map((l, i) => (
            <NavLink key={i}>{l}</NavLink>
          ))}
        </ul>
        <ul className="flex flex-1 flex-col gap-4">
          {rightUl.map((l, i) => (
            <NavLink key={i}>{l}</NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
