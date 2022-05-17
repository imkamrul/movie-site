import React from "react";
import MovieInfo from "../../components/common/MovieInfo";
import Player from "../../components/common/Player";
import { BASE_URL } from "../../util/Url";
const Movie = ({ content }) => {
  return (
    <>
      {/* <Player /> */}
      <MovieInfo content={content} />
    </>
  );
};

// export async function getStaticPaths() {
//   const res = await fetch("https://kamrul-hasan01.github.io/api/pages.json");
//   const data = await res.json();
//   const paths = data.movie_id.map((item) => ({
//     params: { movie: item.link },
//   }));
//   return { paths, fallback: false };
// }

export async function getServerSideProps({ params }) {
  const res = await fetch(`${BASE_URL}/videos/${params.movie}`);
  const data = await res.json();
  console.log(data);
  return {
    props: { content: data },
  };
}

export default Movie;
