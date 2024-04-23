import React from "react";
import License from "./License";
import Contacts from "./Contacts";
import Nav from "./Nav";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="grid grid-cols-12 gap-y-8 bg-main-grey pb-8 pt-4 text-white md:gap-y-10">
      <License />
      <Contacts />
      <Nav />
      <Socials />
    </footer>
  );
}

export default Footer;
