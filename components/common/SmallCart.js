import React from "react";
import Image from "next/image";
const SmallCart = () => {
  return (
    <div className="rounded bg-[#0e1423] mb-3">
      <div className="flex ">
        <Image src="/images/hero-slider/1.jpg" width={140} height={80} alt="" />
        <div className=" pl-2 ">
          <h4 className="text-lg">The Wariior Life</h4>
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
