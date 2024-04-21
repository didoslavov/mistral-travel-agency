import React from "react";
import License from "./License";
import Contacts from "./Contacts";

function Footer() {
  return (
    <footer className="grid grid-cols-12 bg-main-grey pb-8 pt-4 text-white">
      <License />
      <Contacts />
    </footer>
  );
}

export default Footer;
