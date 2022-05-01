import Link from "next/link";
import React from "react";
import Card from "./Card";

const MovieSection = () => {
  return (
    <section className="my-16">
      <div className="container mx-auto text-white">
        <div className="flex justify-between px-5 items-center">
          <h4 className="text-xl lg:text-3xl font-semibold py-3">New Movies</h4>

          <Link href="/">
            <a className="bg-themeText text-white  font-semibold py-2 h-9 lg:h-11 px-3 rounded text-sm lg:text-xl">
              More videos
            </a>
          </Link>
        </div>
        <div className="md:flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default MovieSection;
