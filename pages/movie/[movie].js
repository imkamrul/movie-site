import Head from "next/head";
import React from "react";
import MayBeLike from "../../components/common/MayBeLike";
import MovieInfo from "../../components/common/MovieInfo";
import Player from "../../components/common/Player";
import homePageData from "../../data/home.json";
const Movie = ({ content, suggestion }) => {
  return (
    <>
      <Head>
        <title>{content.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Player content={content.download} />
      <MovieInfo content={content} />
      {suggestion.length && <MayBeLike content={suggestion} />}
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
  const data = homePageData.movies.find((item) => item._id === params.movie);
  const all = homePageData.movies.filter((item) => item.type === data.type);
  const suggestion = all.filter((item) => item._id !== params.movie);
  return {
    props: { content: data, suggestion: suggestion },
  };
}

export default Movie;
