import React from "react";
import DashBoardBody from "../Section/DashBoardBody";
import DashboardNav from "../Section/DashboardNav";

const DashBoardLayout = () => {
  return (
    <section className="flex">
      <DashboardNav />
      <DashBoardBody />
    </section>
  );
};

export default DashBoardLayout;
