import Image from "next/image";
import React from "react";
import Rating from "react-rating";
import Link from "next/link";
const Card = ({ style }) => {
  console.log(style);
  return (
    <div className={`w-full  ${style} px-2 py-4  group`}>
      <div className="relative overflow-hidden rounded-md   text-white">
        <Link href="/movie/1">
          <>
            <Image
              className="group-hover:scale-[1.2] ease-out duration-700 group-hover:opacity-70"
              src="/card.jpg"
              alt="movie"
              width={312}
              height={175}
              layout="responsive"
            />

            <div className="absolute hidden group-hover:block top-[40%] right-[45%] transition ease-in-out duration-700 cursor-pointer">
              <Image
                className="rounded-full"
                src="/play-button-green.svg"
                alt="heart"
                width={35}
                height={35}
                layout="fixed"
              />
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
          </>
        </Link>
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
