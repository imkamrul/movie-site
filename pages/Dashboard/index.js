import React from "react";
import DashboardNav from "../../components/Section/DashboardNav";
import Link from "next/link";
const Videos = () => {
  return (
    <section className="flex">
      <DashboardNav />
      <div className="w-10/12 pt-[20px]">
        <div className="text-right">
          <Link href="/Dashboard/Video-add">
            <a className="bg-themeText text-white text-lg px-3 py-2 rounded mx-5">
              {" "}
              Add New video
            </a>
          </Link>
        </div>

        <div className=" px-[40px] my-10"></div>
      </div>
    </section>
  );
};

export default Videos;
