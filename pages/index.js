import React from "react";
import MovieSearch from "../components/common/MovieSearch";
import MovieSection from "../components/common/MovieSection";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import SingleSlider from "../components/singleSlider/SingleSlider";
import homePageData from "../data/home.json";
import { BASE_URL } from "../util/Url";
const index = ({ pageData, videos }) => {
  const { hero_slider } = pageData;

  return (
    <>
      <HeroSlider heroSliderItem={hero_slider} />
      <MovieSearch content={videos} />
      <MovieSection />
      <MovieSection />
      <MovieSection />
      <MovieSection />
      <SingleSlider />
    </>
  );
};

export default index;
export async function getServerSideProps() {
  const res = await fetch(`${BASE_URL}/videos`);
  const data = await res.json();
  return {
    props: {
      pageData: homePageData,
      videos: data,
    },
  };
}
