import Link from "next/link";
import React, { useState } from "react";
import Table from "../../../components/common/Table";
import DashboardNav from "../../../components/Section/DashboardNav";
import { BASE_URL } from "../../../util/Url";
const Home = ({ data }) => {
  const [videos, setVideos] = useState(data);

  const handleMovieType = (type) => {
    if (type === "Bollywood" || type === "Tollywood" || type === "Hollywood") {
      const newVideos = data.filter((item) => item.type === type);
      setVideos(newVideos);
    } else {
      setVideos(data);
    }
  };

  return (
    <section className="flex">
      <DashboardNav />
      <div className="w-10/12 pt-[20px]">
        <div className="text-right">
          <Link href="/Dashboard/Videos/add">
            <a className="bg-themeText text-white text-lg px-3 py-2 rounded mx-5">
              {" "}
              Add New video
            </a>
          </Link>
        </div>
        <div className="pl-10">
          <button
            className="mx-4 py-2 text-white bg-themeText rounded text-xl px-3"
            onClick={() => handleMovieType("All")}
          >
            All
          </button>
          <button
            className="mx-4 py-2 text-white bg-themeText rounded text-xl px-3"
            onClick={() => handleMovieType("Hollywood")}
          >
            Hollywood
          </button>
          <button
            className="mx-4 py-2 text-white bg-themeText rounded text-xl px-3"
            onClick={() => handleMovieType("Bollywood")}
          >
            Bollywood
          </button>
          <button
            className="mx-4 py-2 text-white bg-themeText rounded text-xl px-3"
            onClick={() => handleMovieType("Tollywood")}
          >
            Tollywood
          </button>
        </div>
        <div className=" px-[40px] my-10">
          <Table
            content={videos}
            setData={setVideos}
            view={true}
            link="Videos"
            type={true}
          />
        </div>
      </div>
    </section>
  );
};
export async function getServerSideProps() {
  const res = await fetch(`${BASE_URL}/videos`);
  const data = await res.json();

  return {
    props: { data },
  };
}
export default Home;
