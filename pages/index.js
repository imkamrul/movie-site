import React from "react";
import MovieSearch from "../components/common/MovieSearch";
import MovieSection from "../components/common/MovieSection";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import SingleSlider from "../components/singleSlider/SingleSlider";
import homePageData from "../data/home.json";
const Index = ({ pageData }) => {
  const { movies, sliders } = pageData;
  const hollywood_movie = movies.filter((item) => item.type === "Hollywood");
  const bollywood_movie = movies.filter((item) => item.type === "Bollywood");
  const tollywood_movie = movies.filter((item) => item.type === "Tollywood");

  return (
    <>
      <HeroSlider content={sliders} />
      <MovieSearch content={movies} />
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
export async function getStaticProps() {
  return {
    props: {
      pageData: homePageData,
    },
  };
}
