import { FaBars } from "react-icons/fa";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import logo from "/public/logo.png";

function Header() {
  return (
    <header className="grid grid-cols-12">
      <div className="col-span-8 col-start-3 flex w-full items-center justify-between pb-3 pt-3 text-main-grey">
        <div className="ps-12">
          <Image src={logo} alt="Лого" className="-translate-y-3" />
        </div>
        <Nav />
        <FaBars
          size={30}
          className="h-[30px] w-[27px] hover:cursor-pointer md:hidden"
        />
      </div>
    </header>
  );
}

export default Header;
