"use client";

import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import Nav from "./Nav";
import Image from "next/image";
import logo from "/public/logo.png";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="grid grid-cols-12 px-4">
      <div className="col-span-full col-start-1 flex w-full items-center justify-between pb-3 pt-3 text-main-grey xl:col-span-8 xl:col-start-3">
        <div className="relative lg:ps-12">
          <Image src={logo} alt="Лого" className="-translate-y-3" />
        </div>
        <Nav isOpen={isOpen} />
        {isOpen ? (
          <IoCloseSharp
            size={30}
            className="z-50 block stroke-main-grey hover:cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <FaBars
            size={30}
            className="block stroke-main-grey hover:cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
