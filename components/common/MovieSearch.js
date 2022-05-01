import React from "react";
import Card from "./Card";

const MovieSearch = () => {
  return (
    <section className="my-10 ">
      <h3 className="text-center text-3xl py-4 text-white">
        Search Your Favorite Movie
      </h3>

      <div className="flex justify-center items-center">
        <i className="fa-solid fa-magnifying-glass text-themeText text-3xl -mr-10 z-30" />
        <input
          type="text"
          placeholder="Movies name.."
          className="w-4/12 py-3 rounded pl-14 outline  outline-themeText"
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
