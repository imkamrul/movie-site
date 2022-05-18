import React, { useState } from "react";
import MovieSearch from "../components/common/MovieSearch";
import MovieSection from "../components/common/MovieSection";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import SingleSlider from "../components/singleSlider/SingleSlider";
import homePageData from "../data/home.json";
import { BASE_URL } from "../util/Url";
const Index = ({ pageData, videos, sliders }) => {
  const { hero_slider } = pageData;
  const hollywood_movie = videos.filter((item) => item.type === "Hollywood");
  const bollywood_movie = videos.filter((item) => item.type === "Bollywood");
  const tollywood_movie = videos.filter((item) => item.type === "Tollywood");

  return (
    <>
      <HeroSlider heroSliderItem={hero_slider} content={sliders} />
      <MovieSearch content={videos} />
      <MovieSection
        content={hollywood_movie}
        title="Hollywood"
        link="/catagories/Hollywood"
      />
      <MovieSection
        content={bollywood_movie}
        title="Bollywood"
        link="/catagories/Bollywood"
      />
      <MovieSection
        content={tollywood_movie}
        title="Tollywood"
        link="/catagories/Tollywood"
      />
      <SingleSlider />
    </>
  );
};

export default Index;
export async function getServerSideProps() {
  const slider_res = await fetch(`${BASE_URL}/slider`);
  const slider_data = await slider_res.json();
  const video_res = await fetch(`${BASE_URL}/videos`);
  const video_data = await video_res.json();
  return {
    props: {
      pageData: homePageData,
      sliders: slider_data,
      videos: video_data,
    },
  };
}
