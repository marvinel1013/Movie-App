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
    backgroundColor: "#7f1d1d",
  };

  return (
    <div className="h-14 w-full bg-red-800 fixed bottom-0">
      <ul className="flex items-center justify-center h-14">
        {icons.map((data, index) => (
          <NavLink
            to={data.to}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li
              key={index}
              className="text-gray-300 cursor-pointer hover:bg-red-900 px-8 p-[18px]"
            >
              {data.icon}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default MenuBar;
