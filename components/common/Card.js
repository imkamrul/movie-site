import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="w-3/12 group overflow-hidden text-white">
      <div className="relative overflow-hidden rounded-md">
        <Image
          className="group-hover:scale-[1.2] ease-out duration-700"
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
        <span className="group-hover:text-themeText ease-out duration-700">
          The Wariior Life
        </span>
      </h4>
      <p className="flex justify-between px-2">
        <span>1hr 24mins</span>
        <span>4.5 rating</span>
      </p>
    </div>
  );
};

export default Card;
