import React, { useState } from "react";
import Card from "./Card";
import { SearchIcon } from "./SVGIcons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieSearch = ({ content }) => {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const handleMovieSearch = async (e) => {
    const search = e.target.value;
    if (search.length) {
      const matchSearch = content.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setResult(matchSearch);
    }
  };
  console.log(result);
  return (
    <section className="my-10 container mx-auto">
      <h3 className="text-center text-xl md:text-3xl py-4 text-white">
        Search Your Favorite Movie
      </h3>
      <ToastContainer />
      <div className="flex justify-center items-center search-img-icon">
        <SearchIcon className="-mr-11 " />
        <input
          type="text"
          placeholder="Movies name.."
          onChange={(e) => handleMovieSearch(e)}
          className="w-8/12 lg:w-4/12 py-3 rounded pl-14 text-white outline-0  bg-transparent border-[1px] border-themeText placeholder:text-white relative"
        />
      </div>
      <div className="md:flex text-white pt-5 flex-wrap">
        <Card style="md:w-4/12 lg:w-3/12" />
        <Card style="md:w-4/12 lg:w-3/12" />
        <Card style="md:w-4/12 lg:w-3/12" />
        <Card style="md:w-4/12 lg:w-3/12" />
        <Card style="md:w-4/12 lg:w-3/12" />
      </div>
    </section>
  );
};

export default MovieSearch;
