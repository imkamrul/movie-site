import React from "react";
import DashBoardLayout from "../../components/layout/DashBoardLayout";

const movies = () => {
  return <DashBoardLayout />;
};

export default movies;
export async function getStaticPaths() {
  const res = await fetch("https://kamrul-hasan01.github.io/api/pages.json");
  const data = await res.json();
  const paths = [
    { params: { nav: "movies" } },
    { params: { nav: "users" } },
    { params: { nav: "requests" } },
  ];
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
