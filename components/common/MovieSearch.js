import React from "react";
import Card from "./Card";
import Image from "next/image";
import { SearchIcon } from "./SVGIcons";
const MovieSearch = () => {
  return (
    <section className="my-10 container mx-auto">
      <h3 className="text-center text-xl md:text-3xl py-4 text-white">
        Search Your Favorite Movie
      </h3>

      <div className="flex justify-center items-center search-img-icon">
        {/* <i className="fa-solid fa-magnifying-glass text-themeText text-3xl -mr-10 z-0" /> */}
        {/* <Image
          src="/search.svg"
          alt="Picture of the author"
          width={50}
          height={50}
          className=""
        /> */}
        <SearchIcon className="-mr-11 " />
        <input
          type="text"
          placeholder="Movies name.."
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
