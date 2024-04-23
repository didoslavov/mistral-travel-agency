import { footerLinks } from "@/data/footerData";
import React from "react";
import NavLink from "../NavLink/NavLink";

function Nav() {
  const leftUl = footerLinks.slice(0, 3);
  const rightUl = footerLinks.slice(3);
  return (
    <nav className="col-span-full col-start-3 md:col-span-4 md:col-start-2 lg:col-start-3 xl:col-span-3 xl:col-start-7 xl:ps-10 xl:pt-[46px] 2xl:col-start-7">
      <h3 className="mb-4 text-[17px] font-extrabold leading-[25px] md:mb-7">
        Бързи връзки
      </h3>
      <div className="flex flex-col gap-4 text-[17px] leading-[25px] xl:flex-row">
        <ul className="flex flex-1 flex-col gap-1 md:gap-4">
          {leftUl.map((l, i) => (
            <NavLink key={i}>{l}</NavLink>
          ))}
        </ul>
        <ul className="flex flex-1 flex-col gap-1 md:gap-4">
          {rightUl.map((l, i) => (
            <NavLink key={i}>{l}</NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
