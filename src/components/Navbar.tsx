import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Hamburger from "./Hamburger";

function Navbar() {
  return (
    <div className="flex w-full flex-col p-4 gap-4">
      <div className="nav__Top flex w-full justify-between">
        <Logo />
        <Hamburger />
      </div>
      <div className="nav__Bottom">
        <Searchbar />
      </div>
    </div>
  );
}

export default Navbar;
