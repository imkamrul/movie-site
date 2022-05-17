import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Card from "../../components/common/Card";
import SmallCart from "../../components/common/SmallCart";
import { BASE_URL } from "../../util/Url";

const Catagories = ({ content, title }) => {
  const [result, setResult] = useState({});
  const handleMovieSearch = async (e) => {
    const search = e.target.value;
    if (search.length) {
      const matchSearch = content.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setResult(matchSearch);
    } else {
      setResult({});
    }
  };
  return (
    <section className="text-white container mx-auto py-10 mt-5 2xl:mt-10">
      <h4 className="text-white text-center text-3xl py-5">{title}</h4>
      <div className="flex md:pr-4 flex-wrap">
        <div className="w-full md:w-8/12 flex flex-wrap">
          {content.map((item, index) => {
            return (
              <Card key={index} style="md:w-6/12 lg:w-3/12" content={item} />
            );
          })}
        </div>
        <div className="w-full md:w-4/12 px-3">
          <div className="py-3">
            <h4 className="text-lg pb-2">Search Vedios</h4>

            <div className=" flex">
              <input
                type="text"
                onChange={(e) => handleMovieSearch(e)}
                placeholder="Movies name.."
                className="w-full  py-1  pl-4 text-black outline-hidden focus:outline-none"
              />
              <button className="bg-themeText px-2 py-3">Search</button>
            </div>
            <div className="overflow-y-auto overflow-hidden h-96 w-full search-container mt-5">
              {result.length &&
                result.map((item, index) => {
                  return <SmallCart key={index} content={item} />;
                })}
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

export default Catagories;
// export async function getStaticPaths() {
//   const res = await fetch("https://kamrul-hasan01.github.io/api/pages.json");
//   const data = await res.json();
//   const paths = data.catagories.map((item) => ({
//     params: { catagory: item.link },
//   }));
//   return { paths, fallback: false };
// }

export async function getServerSideProps({ params }) {
  const res = await fetch(`${BASE_URL}/videos?type=${params.catagory}`);
  const data = await res.json();
  return {
    props: { content: data, title: params.catagory },
  };
}
