import React from "react";
import NavLink from "../NavLink/NavLink";
import { headerLinks } from "@/data/headerData";

function Nav({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`items-center md:flex ${isOpen ? "fixed right-0 top-0 z-50 flex h-full w-full justify-center bg-main-grey-200 text-main-grey" : "hidden"}`}
    >
      <ul
        className={`${isOpen ? "text-sm md:text-xl" : "text-xs"} flex flex-col justify-center gap-6 font-bold leading-[25px] md:flex-row lg:text-[15px] xl:gap-10`}
      >
        {headerLinks.map((l, i) => (
          <NavLink key={i}>{l}</NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
