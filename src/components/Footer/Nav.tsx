import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="col-span-2 col-start-7 ps-10 pt-[46px]">
      <h3 className="mb-7 text-[17px] font-extrabold leading-[25px]">
        Бързи връзки
      </h3>
      <div className="flex gap-4 text-[17px] leading-[25px]">
        <ul className="flex flex-1 flex-col gap-4">
          <li>
            <Link href="#">За нас</Link>
          </li>
          <li>
            <Link href="#">Документи</Link>
          </li>
          <li>
            <Link href="#">Начин на плащане</Link>
          </li>
        </ul>
        <ul className="flex flex-1 flex-col gap-4">
          <li>
            <Link href="#">Общи условия</Link>
          </li>
          <li>
            <Link href="#">Лични данни</Link>
          </li>
          <li>
            <Link href="#">Контакти</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
