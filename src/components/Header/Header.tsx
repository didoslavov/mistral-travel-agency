import { FaBars } from "react-icons/fa";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import logo from "/public/logo.png";

function Header() {
  return (
    <header className="text-main-grey col-span-8 col-start-3 flex w-full items-center justify-between pb-3 pt-3">
      <div className="flex items-center gap-6">
        <FaBars
          size={30}
          className="h-[30px] w-[27px] font-thin leading-loose hover:cursor-pointer"
        />
        <Image src={logo} alt="Лого" className="-translate-y-3" />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
