import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { Tab } from "@headlessui/react";
import Card from "../components/card/Card";
import SetPagination from "../components/pagination/SetPagination";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Search() {
  const [content, setContent] = useState([]);
  const [type, setType] = useState("movie");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("Love");
  const [searchText, setSearchText] = useState("Love");
  const [numOfPages, setNumOfPages] = useState();
  const [loading, setLoading] = useState(true);

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type}?api_key=${
        import.meta.env.VITE_SOME_KEY
      }&query=${search}&page=${page}&include_adult=false`
    );
    setLoading(false);
    setContent(data.results);
    setNumOfPages(data.total_pages);
    console.log(data);
  };

  useEffect(() => {
    fetchSearch();
  }, [type, search, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  const handleChange = (newType) => {
    setType(newType);
    setPage(1);
  };

  if (loading)
    return (
      <h1 className="mt-10 text-lg font-medium text-center text-gray-800 dark:text-slate-200">
        Loading...
      </h1>
    );
  return (
    <div className="w-full min-h-screen lg:px-20">
      <h1 className="flex items-center justify-center text-lg font-black mb-5 text-red-700">
        Search your favorite Movies or TV Series
      </h1>
      <form onSubmit={handleSearch}>
        <div className="px-10 md:px-10 flex items-center justify-center">
          <input
            value={searchText}
            placeholder="Search Movies or TV Series..."
            type="text"
            className="p-3 pl-6 md:p-4 shadow-inner bg-slate-200 w-full md:w-[70%] outline-none rounded-l-lg "
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-800 text-white px-5 md:px-7 pr-6 rounded-r-lg p-[14px] md:p-[18px]"
          >
            <GoSearch size={20} />
          </button>
        </div>
      </form>
      <div className="px-10 md:px-10 w-full my-2 mb-5">
        <Tab.Group className="flex space-x-1 rounded-xl bg-red-800 p-1">
          <Tab.List>
            <Tab
              onClick={() => handleChange("movie")}
              value="movie"
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-bold leading-5 text-red-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-red-600 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              MOVIES
            </Tab>
            <Tab
              onClick={() => handleChange("tv")}
              value="tv"
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-bold leading-5 text-red-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-red-600 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              TV SERIES
            </Tab>
          </Tab.List>
        </Tab.Group>
      </div>
      {content.length ? (
        <div className="w-full px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {content.map((c) => (
            <div key={c.id} className="flex justify-center">
              <Card data={c} media_type={type} />
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-gray-700 dark:text-slate-200 text-center">
          No Results Found!
        </h1>
      )}
      <div className="mt-7 flex items-center justify-center">
        {numOfPages > 1 ? (
          <SetPagination
            page={page}
            setPage={setPage}
            numOfPages={numOfPages}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Search;
