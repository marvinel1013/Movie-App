import React, { useState } from "react";
import NoImage from "../../images/unavailable.png";
import { image } from "../../config/config";

import Modal from "../modal/Modal";

function Card({ data, media_type }) {
  const [isOpen, setIsOpen] = useState(false);
  const poster = data.poster_path ? `${image}${data.poster_path}` : NoImage;
  const videoType = media_type === "movie" ? "Movie" : "TV Series";
  const date = data.release_date || data.first_air_date;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="w-[200px] md:w-[220px] flex flex-col justify-between hover:bg-slate-300 cursor-pointer bg-slate-200 dark:hover:bg-slate-600 dark:bg-slate-800 shadow-md shadow-red-900 dark:shadow p-3 rounded-lg">
      <div>
        {/* image container */}
        <img src={poster} alt="poster image" />
      </div>

      <div>
        {/* Title Container */}
        <span className="flex p-2 font-bold text-red-700 dark:text-red-600 justify-center">
          {data.name || data.title}
        </span>
      </div>

      <div>
        <div className="flex items-center justify-between dark:text-gray-500 ">
          {/* year and type container */}
          <span className="">{videoType}</span>
          <small>{date}</small>
        </div>
        <div>
          {/* Details Button */}
          <button
            type="button"
            onClick={openModal}
            className=" bg-red-800 hover:bg-red-900 mt-2 p-2 w-full rounded-lg font-bold text-slate-200 hover:scale-105 duration-500"
          >
            See Details
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        id={data.id}
        media_type={media_type}
      />
    </div>
  );
}

export default Card;
