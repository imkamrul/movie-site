import Image from "next/image";
import React from "react";
import Rating from "react-rating";

const Card = () => {
  return (
    <div className="w-full  md:w-3/12 px-2 py-4 md:py-0 group">
      <div className="relative overflow-hidden rounded-md   text-white">
        <a href="https://www.google.com/" className="z-100">
          <Image
            className="group-hover:scale-[1.2] ease-out duration-700 group-hover:opacity-70"
            src="/card.jpg"
            alt="movie"
            width={312}
            height={175}
            layout="responsive"
          />
        </a>
        <div className="absolute hidden group-hover:block top-[40%] right-[45%] transition ease-in-out duration-700 cursor-pointer">
          <a href="https://www.google.com/">
            <Image
              className="rounded-full"
              src="/play-button-green.svg"
              alt="heart"
              width={35}
              height={35}
              layout="fixed"
            />
          </a>
        </div>
        <div className="absolute bottom-0 right-5">
          <Image
            className=""
            src="/white_Heart.svg"
            alt="heart"
            width={20}
            height={20}
            layout="fixed"
          />
        </div>
      </div>
      <h4 className=" text-xl py-3 ">
        <span className=" flex justify-between px-2">
          <span className="group-hover:text-themeText ease-out duration-700">
            The Wariior Life
          </span>
          <span>2020</span>
        </span>
      </h4>
      <div className="flex justify-between px-2">
        <span>1hr 24mins</span>
        <span>
          <Rating
            emptySymbol="fa-regular fa-star text-[#F5C518]"
            fullSymbol="fa-solid fa-star text-[#F5C518]"
            readonly
            initialRating={4.5}
          />
          {"  "} 4.5
        </span>
      </div>
    </div>
  );
};

export default Card;
