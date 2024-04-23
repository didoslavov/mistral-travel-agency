import React from "react";
import NavLink from "../NavLink/NavLink";
import { headerLinks } from "@/data/headerData";
import { IoCloseSharp } from "react-icons/io5";

function Nav({
  isOpen,
  toggleMobileMenu,
}: {
  isOpen: boolean;
  toggleMobileMenu: () => void;
}) {
  return (
    <div
      className={`items-center md:flex ${isOpen ? "fixed right-0 top-0 z-50 flex h-full w-full scroll-m-0 justify-center bg-main-grey-200 text-main-grey" : "hidden"}`}
    >
      <IoCloseSharp
        size={40}
        className="absolute right-3 top-6 block stroke-main-grey hover:cursor-pointer md:hidden"
        onClick={toggleMobileMenu}
      />
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
