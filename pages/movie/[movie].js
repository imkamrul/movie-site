import React from "react";
import MovieInfo from "../../components/common/MovieInfo";
import Player from "../../components/common/Player";
const Movie = ({ data }) => {
  return (
    <>
      <Player />
      <MovieInfo />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://kamrul-hasan01.github.io/api/pages.json");
  const data = await res.json();
  const paths = data.movie_id.map((item) => ({
    params: { movie: item.link },
  }));
  return { paths, fallback: false };
}

export async function getServerSideProps({ params }) {
  console.log(params);
  // const res = await fetch("https://kamrul-hasan01.github.io/api/pages.json");
  // const data = await res.json();
  return {
    props: {},
  };
}

export default Movie;
