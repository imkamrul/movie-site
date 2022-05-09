import React from "react";
import Image from "next/image";
import Link from "next/link";
const SmallCart = () => {
  return (
    <div className="rounded bg-[#0e1423] mb-3">
      <div className="flex group">
        <Image
          src="/images/hero-slider/1.jpg"
          width={140}
          height={80}
          alt=""
          className="group-hover:text-themeText"
        />
        <div className=" pl-2 ">
          <Link href="/movie/1">
            <a className="text-lg group-hover:text-themeText">
              The Wariior Life
            </a>
          </Link>
          <p>
            <span>4.5</span>{" "}
            <i className="fa-solid fa-star-half-stroke text-[yellow]" />
          </p>
          <p className="text-sm">2020</p>
        </div>
      </div>
    </div>
  );
};

export default SmallCart;
