import React from "react";
import { FaHotjar, FaTv } from "react-icons/fa";
import { BiMoviePlay, BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function MenuBar() {
  const icons = [
    {
      icon: <FaHotjar size={20} />,
      to: "/",
    },

    {
      icon: <BiMoviePlay size={20} />,
      to: "/movies",
    },

    {
      icon: <FaTv size={20} />,
      to: "/tvseries",
    },

    {
      icon: <BiSearch size={20} />,
      to: "/search",
    },
  ];

  let activeStyle = {
    backgroundColor: "#991b1bd1",
  };
  return (
    <div className="h-11 w-full bg-[#7f1d1d] dark:bg-[#660708] fixed bottom-0">
      <ul className="flex items-center justify-center h-14">
        {icons.map((data, index) => (
          <NavLink
            key={index}
            to={data.to}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="text-gray-300 cursor-pointer hover:bg-[#991b1b] px-6 p-[14px] mb-2">
              {data.icon}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default MenuBar;
