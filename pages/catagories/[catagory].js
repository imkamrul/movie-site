import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Card from "../../components/common/Card";
import SmallCart from "../../components/common/SmallCart";

const catagories = ({ data }) => {
  // console.log(data, params);
  return (
    <section className="text-white container mx-auto py-10 mt-5 2xl:mt-10">
      <h4 className="text-white text-center text-3xl py-5">Hollywood</h4>
      <div className="flex md:pr-4 flex-wrap">
        <div className="w-full md:w-8/12 flex flex-wrap">
          <Card style="md:w-6/12 lg:w-3/12" />
          <Card style="md:w-6/12 lg:w-3/12" />
          <Card style="md:w-6/12 lg:w-3/12" />
          <Card style="md:w-6/12 lg:w-3/12" />
          <Card style="md:w-6/12 lg:w-3/12" />
          <Card style="md:w-6/12 lg:w-3/12" />
          <Card style="md:w-6/12 lg:w-3/12" />
          <Card style="md:w-6/12 lg:w-3/12" />
          <Card style="md:w-6/12 lg:w-3/12" />
        </div>
        <div className="w-full md:w-4/12 px-3">
          <div className="py-3">
            <h4 className="text-lg pb-2">Search Vedios</h4>

            <div className=" flex">
              <input
                type="text"
                placeholder="Movies name.."
                className="w-full  py-1  pl-4 text-black outline-hidden focus:outline-none"
              />
              <button className="bg-themeText px-2 py-3">Search</button>
            </div>
            <div className="overflow-y-auto overflow-hidden h-96 w-full search-container mt-5">
              <SmallCart />
              <SmallCart />
              <SmallCart />
              <SmallCart />
              <SmallCart />
              <SmallCart />
            </div>
          </div>
          <div className="pt-10">
            <h4 className="text-lg py-4">Filter By Category</h4>
            <p className="my-1 cursor-pointer hover:text-themeText">
              <i className="fa-solid fa-folder pr-3" /> football (1)
            </p>
            <p className="my-1 cursor-pointer hover:text-themeText">
              <i className="fa-solid fa-folder pr-3" /> football (1)
            </p>
            <p className="my-1 cursor-pointer hover:text-themeText">
              <i className="fa-solid fa-folder pr-3" /> Action (7)
            </p>
            <p className="my-1 cursor-pointer hover:text-themeText">
              <i className="fa-solid fa-folder pr-3" /> Adventure (10)
            </p>
            <p className="my-1 cursor-pointer hover:text-themeText">
              <i className="fa-solid fa-folder pr-3" /> Animation (4)
            </p>
            <p className="my-1 cursor-pointer hover:text-themeText">
              <i className="fa-solid fa-folder pr-3" /> Basketball (1)
            </p>
            <p className="my-1 cursor-pointer hover:text-themeText">
              <i className="fa-solid fa-folder pr-3" /> Biography (2)
            </p>
            <p className="my-1 cursor-pointer hover:text-themeText">
              <i className="fa-solid fa-folder pr-3" /> Comedy (2)
            </p>
            <p className="my-1 cursor-pointer hover:text-themeText">
              <i className="fa-solid fa-folder pr-3" /> cricket (5)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default catagories;
export async function getStaticPaths() {
  const res = await fetch("https://kamrul-hasan01.github.io/api/pages.json");
  const data = await res.json();
  const paths = data.catagories.map((item) => ({
    params: { catagory: item.link },
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
