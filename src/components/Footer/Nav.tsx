import React from "react";

function Nav() {
  return (
    <nav className="col-span-2 col-start-7 ps-10 pt-[46px]">
      <h3 className="mb-7 text-[17px] font-extrabold leading-[25px]">
        Бързи връзки
      </h3>
      <div className="flex gap-4 text-[17px] leading-[25px]">
        <ul className="flex flex-1 flex-col gap-4">
          <li>За нас</li>
          <li>Документи</li>
          <li>Начин на плащане</li>
        </ul>
        <ul className="flex flex-1 flex-col gap-4">
          <li>Общи условия</li>
          <li>Лични данни</li>
          <li>Контакти</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
