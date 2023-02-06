import React, { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { image } from "../../config/config";
import NoImage from "../../images/unavailable.png";
import { FcRating, FcCalendar } from "react-icons/fc";
import { FaThumbsUp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import { themeContext } from "../../App";

function Modal(props) {
  const { isOpen, closeModal, id, media_type } = props;

  //* STATE
  const [content, setContent] = useState([]);
  const [video, setVideo] = useState([]);
  const { darkMode } = useContext(themeContext);

  const poster = content.poster_path
    ? `${image}${content.poster_path}`
    : NoImage;

  const date = content.release_date || content.first_air_date;

  const fetchDetails = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${
        import.meta.env.VITE_SOME_KEY
      }&language=en-US`
    );
    setContent(data);
  };

  const fetchVideos = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${
        import.meta.env.VITE_SOME_KEY
      }&language=en-US`
    );
    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchDetails();
    fetchVideos();
  }, []);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full max-w-md transform overflow-hidden rounded-lg ${
                  darkMode ? "bg-slate-800 text-slate-100" : "bg-white "
                } p-6 text-left align-middle shadow-xl transition-all`}
              >
                <div>
                  <img
                    src={poster}
                    alt="poster image"
                    className="object-cover h-[300px] md:h-[400px] w-full"
                  />
                  <h2 className="mt-4 text-center text-xl font-bold text-red-800">
                    {content.title || content.name}
                  </h2>
                  <div className="flex mt-3 items-center justify-evenly font-semibold">
                    <span className="flex items-center gap-1">
                      <span>
                        <FcRating />
                      </span>
                      {content.vote_average}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-blue-600">
                        <FaThumbsUp />
                      </span>
                      {content.vote_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>
                        <FcCalendar />
                      </span>
                      {date}
                    </span>
                  </div>
                  <div className="px-2 break-words mt-3 md:font-semibold">
                    <small>{content.overview}</small>
                  </div>
                </div>

                <div className="mt-4">
                  <button className="bg-red-800 w-full py-2 rounded-lg hover:opacity-90 text-white">
                    <a
                      href={`https://www.youtube.com/watch?v=${video}`}
                      target="_blank"
                    >
                      <span className="flex items-center justify-center gap-1">
                        <BsYoutube size={20} /> <span>Watch Trailer</span>
                      </span>
                    </a>
                  </button>
                </div>
                <div className="absolute top-0 right-0 mr-2 mt-1">
                  <button
                    onClick={closeModal}
                    className="bg-red-700 text-white p-1 rounded-full"
                  >
                    <IoMdClose size={15} />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
