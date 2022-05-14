import React, { useState } from "react";
import DashboardNav from "../../components/Section/DashboardNav";
import Link from "next/link";
import Table from "../../components/common/Table";
import { BASE_URL } from "../../util/Url";
import axios from "axios";
const Slider = ({ data }) => {
  const [sliderData, setSliderData] = useState(data);
  const handleAllSliderButton = () => {
    setSliderData(data);
  };

  const handleHeroSliderButton = (catagory) => {
    const hero_slider = data.filter((item) => item.catagory === catagory);
    setSliderData(hero_slider);
  };
  const handleCommingSoonButton = (catagory) => {
    const comming_hero_slider = data.filter(
      (item) => item.catagory === catagory
    );
    setSliderData(comming_hero_slider);
  };
  return (
    <section className="flex">
      <DashboardNav />
      <div className="w-10/12 pt-[20px]">
        <div className="text-right">
          <Link href="/Dashboard/Slider-add">
            <a className="bg-themeText text-white text-lg px-3 py-2 rounded mx-5">
              Add Slider
            </a>
          </Link>
        </div>
        <div className="pl-10">
          <button
            className="mx-4 py-2 text-white bg-themeText rounded text-xl px-3"
            onClick={() => handleHeroSliderButton("Hero_Slider")}
          >
            Hero Slider
          </button>
          <button
            className="mx-4 py-2 text-white bg-themeText rounded text-xl px-3"
            onClick={() => handleCommingSoonButton("Comming_soon")}
          >
            Comming soon Slider
          </button>
          <button
            className="mx-4 py-2 text-white bg-themeText rounded text-xl px-3"
            onClick={handleAllSliderButton}
          >
            All Slider
          </button>
        </div>
        <div className=" px-[40px] my-10">
          <Table content={sliderData} setData={setSliderData} />
        </div>
      </div>
    </section>
  );
};
// http://localhost:5000/slider?catagory=Hero_Slider
export async function getStaticProps() {
  const res = await fetch(`${BASE_URL}/slider`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Slider;
