import React from "react";
import Logo from "../images/logo.png";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const { handleToggleDarkMode, darkMode } = props;
  const navigate = useNavigate();

  const scrollNavigate = () => {
    window.scroll(0, 0);
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 w-full flex px-7 md:px-12 items-center justify-between p-8 h-20 bg-white dark:bg-[#161a1d] shadow-sm dark:shadow-none shadow-gray-300">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={scrollNavigate}
      >
        <img src={Logo} alt="logo image" className="w-10" />
        <span className="mt-3 md:text-2xl dark:text-gray-400 text-lg font-bold">
          ovie App
        </span>
      </div>
      <div className="bg-gray-400 dark:bg-gray-600 p-2 rounded-full">
        <span className=" cursor-pointer" onClick={handleToggleDarkMode}>
          {darkMode ? (
            <BsSunFill size={20} color={"gold"} />
          ) : (
            <BsMoonStarsFill size={18} color={"white"} />
          )}
        </span>
      </div>
    </div>
  );
}

export default Header;
