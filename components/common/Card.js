import Image from "next/image";
import React from "react";
import { Heart } from "./SVGIcons";
import StarRatingComponent from "react-star-rating-component";
const Card = () => {
  return (
    <div className="w-3/12 group overflow-hidden text-white">
      <div className="relative overflow-hidden rounded-md">
        <Image
          className="group-hover:scale-[1.2] ease-out duration-700 group-hover:opacity-70"
          src="/card.jpg"
          alt="movie"
          width={312}
          height={175}
          layout="responsive"
        />
        <div className="absolute bottom-0 right-5">
          <Image
            className="bg-white rounded-full"
            src="/heart.png"
            alt="heart"
            width={16}
            height={16}
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

        <div className=" flex items-center gap-x-2">
          <span>4</span>
          <StarRatingComponent
            name="rate2"
            editing={false}
            starCount={5}
            value={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
