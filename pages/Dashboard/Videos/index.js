import React, { useState } from "react";
import DashboardNav from "../../../components/Section/DashboardNav";
import Link from "next/link";
import Table from "../../../components/common/Table";
import { BASE_URL } from "../../../util/Url";
const Home = ({ data }) => {
  const [videos, setVideos] = useState(data);
  console.log(data);
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

        <div className=" px-[40px] my-10">
          <Table
            content={videos}
            setData={setVideos}
            view={true}
            link="Videos"
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
