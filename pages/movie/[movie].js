import React, { useEffect, useState } from "react";
import MovieInfo from "../../components/common/MovieInfo";
import ReactPlayer from "react-player";

const Movie = ({ data }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    setPlayer(
      <ReactPlayer
        className="!w-[calc(100%+60px)]  md:!w-[100%] !h-[90vh] aspect-video mx-auto"
        url={"https://youtu.be/5Eqb_-j3FDA"}
        loop={false}
        muted={false}
        playing={true}
        playsinline={true}
        controls={true}
      />
    );
  }, []);

  return (
    <>
      {player}
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

export async function getStaticProps({ params }) {
  console.log(params);
  // const res = await fetch("https://kamrul-hasan01.github.io/api/pages.json");
  // const data = await res.json();
  return {
    props: {},
  };
}

export default Movie;
