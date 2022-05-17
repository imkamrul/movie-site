import Image from "next/image";
import React from "react";
import Rating from "react-rating";
import Link from "next/link";
const Card = ({ style, content }) => {
  console.log(content);
  return (
    <div className={`w-full  ${style} px-2 py-4  group`}>
      <div className="relative overflow-hidden rounded-md   text-white">
        <Link href={`/movie/${content._id}`}>
          <a>
            <Image
              className="group-hover:scale-[1.2] ease-out duration-700 group-hover:opacity-70"
              src="https://i.ibb.co/nbBJfx7/KGF-chapter2.jpg"
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
          </a>
        </Link>
      </div>
      <h4 className=" text-xl py-3 ">
        <span className=" flex justify-between px-2">
          <span className="group-hover:text-themeText ease-out duration-700">
            <Link href={`/movie/${content._id}`}>
              <a>{content.name}</a>
            </Link>
          </span>
          <span>{content.date.slice(0, 4)}</span>
        </span>
      </h4>
      <div className="flex justify-between px-2">
        <span>{content.duration}</span>
        <span>
          <Rating
            emptySymbol="fa-regular fa-star text-[#F5C518]"
            fullSymbol="fa-solid fa-star text-[#F5C518]"
            readonly
            initialRating={content.rating}
          />
          {"  "} {content.rating}
        </span>
      </div>
    </div>
  );
};

export default Card;
