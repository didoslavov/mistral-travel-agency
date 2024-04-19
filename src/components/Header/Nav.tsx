import React from "react";
import NavLink from "./NavLink";

function Nav() {
  const links = ["Почивки и екскурзии", "Хотели", "Блог", "За нас", "Контакти"];

  return (
    <div>
      <ul className="flex gap-11 text-[15px] font-bold leading-[25px]">
        {links.map((l, i) => (
          <NavLink key={i}>{l}</NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
