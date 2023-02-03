import React from "react";
import Logo from "../images/logo.png";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full flex px-10 items-center justify-between p-8 h-20 bg-white shadow-sm shadow-gray-300">
      <div className="flex items-center gap-1">
        <img src={Logo} alt="logo image" className="w-10" />
        <span className="mt-3 text-2xl font-bold">ovies App</span>
      </div>
      <div>
        <span>
          <BsMoonStarsFill />
          <BsSunFill />
        </span>
      </div>
    </div>
  );
}

export default Header;
