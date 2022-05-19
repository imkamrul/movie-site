import React from "react";
import Card from "./Card";

const MayBeLike = ({ content }) => {
  return (
    <section className="container mx-auto text-white">
      <div className=" text-xl pt-3 ">May You like</div>
      <div className="flex flex-wrap">
        {content.slice(0, 4).map((item, index) => {
          return (
            <Card key={index} style="md:w-4/12 lg:w-3/12" content={item} />
          );
        })}
      </div>
    </section>
  );
};

export default MayBeLike;
