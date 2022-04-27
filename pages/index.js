import React from "react";
import HeroSection from "../components/Section/HeroSection";
import homePageData from "../data/home.json";
const index = ({ pageData }) => {
  return (
    <>
      <HeroSection />
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
