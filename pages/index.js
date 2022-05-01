import React from "react";
import MovieSearch from "../components/common/MovieSearch";
import MovieSection from "../components/common/MovieSection";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import SingleSlider from "../components/singleSlider/SingleSlider";
import homePageData from "../data/home.json";
const index = ({ pageData }) => {
  const { hero_slider } = pageData;
  return (
    <>
      <HeroSlider heroSliderItem={hero_slider} />
      <MovieSearch />
      <MovieSection />
      <MovieSection />
      <MovieSection />
      <MovieSection />
      <SingleSlider />
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
