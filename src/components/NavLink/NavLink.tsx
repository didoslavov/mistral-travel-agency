import Link from "next/link";
import React, { ReactNode } from "react";

function NavLink({ children }: { children: ReactNode }) {
  return (
    <li className="relative w-fit">
      <Link
        href="#"
        className="before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-main-red before:transition-all before:duration-300 hover:before:w-full"
      >
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
