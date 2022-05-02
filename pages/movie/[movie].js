import React from "react";
import MovieInfo from "../../components/common/MovieInfo";
import Player from "../../components/common/Player";

const movie = () => {
  return (
    <>
      <Player />
      <MovieInfo />
    </>
  );
};

export default movie;
export async function getStaticPaths() {
  const res = await fetch("https://kamrul-hasan01.github.io/api/pages.json");
  const data = await res.json();
  const paths = data.movie_id.map((item) => ({
    params: { movie: item.link },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const res = await fetch("https://kamrul-hasan01.github.io/api/pages.json");
  const data = await res.json();
  return {
    props: { data, params },
  };
}
