import { useRouter } from "next/router";
import React from "react";
import Card from "../../components/common/Card";
const catagories = ({ data }) => {
  // console.log(data, params);
  return (
    <section className="text-white container mx-auto py-10">
      <h4 className="text-white text-center text-3xl py-5">Hollywood</h4>
      <div className="flex pr-4">
        <div className="w-9/12 flex flex-wrap">
          <Card style="md:w-3/12 lg:w-4/12" />
          <Card style="md:w-3/12 lg:w-4/12" />
          <Card style="md:w-3/12 lg:w-4/12" />
          <Card style="md:w-3/12 lg:w-4/12" />
        </div>
        <div className="w-3/12 px-3">
          <div className="py-3">
            <h4 className="text-lg pb-2">Search Vedios</h4>

            <div className=" flex">
              <input
                type="text"
                placeholder="Movies name.."
                className="w-9/12 py-1  pl-4 text-black outline-hidden focus:outline-none"
              />
              <button className="bg-themeText px-2 py-3">Search</button>
            </div>
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
