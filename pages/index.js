import React from "react";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import homePageData from "../data/home.json";
const index = ({ pageData }) => {
  const { hero_slider } = pageData;
  return (
    <>
      <HeroSlider heroSliderItem={hero_slider} />
    </>
  );
};

export default index;
export async function getStaticProps() {
  return {
    props: {
      pageData: homePageData,
    },
  };
}
