import React from "react";
import DashboardNav from "../components/Section/DashboardNav";

const Dashboard = () => {
  return (
    <section className="flex">
      <DashboardNav />
      <div className="w-8/12">
        <p className="text-white "> Dashboard </p>
      </div>
    </section>
  );
};

export default Dashboard;
