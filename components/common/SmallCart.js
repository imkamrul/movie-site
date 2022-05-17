import React from "react";
import Image from "next/image";
import Link from "next/link";
const SmallCart = ({ content }) => {
  return (
    <div className="rounded bg-[#0e1423] mb-3">
      <div className="flex group">
        <Image
          src={content.image}
          width={140}
          height={80}
          alt=""
          className="group-hover:text-themeText"
        />
        <div className=" pl-2 ">
          <Link href={`/movie/${content._id}`}>
            <a className="text-lg group-hover:text-themeText">{content.name}</a>
          </Link>
          <p>
            <span>{content.rating}</span>{" "}
            <i className="fa-solid fa-star-half-stroke text-[yellow]" />
          </p>
          <p className="text-sm">{content.date.slice(0, 4)}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallCart;
