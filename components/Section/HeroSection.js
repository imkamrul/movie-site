import React from "react";
import Card from "../common/Card";
import Slider from "../Slider/Slider";

const HeroSection = ({ content }) => {
  console.log(content);
  return (
    <section className="container mx-auto my-5">
      <div>banner section</div>
      <div className="">
        <Slider content={content} />
      </div>
      <Card />
    </section>
  );
};

export default HeroSection;
