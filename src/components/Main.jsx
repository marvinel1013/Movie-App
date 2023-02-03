import React from "react";
import { Routes, Route } from "react-router-dom";
import Trending from "../pages/Trending";
import Movies from "../pages/Movies";
import TVSeries from "../pages/TVSeries";
import Search from "../pages/Search";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TVSeries />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default Main;
