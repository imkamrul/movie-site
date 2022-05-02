import React from "react";
import DashboardNav from "../components/Section/DashboardNav";

const RequestCollection = () => {
  return (
    <section className="flex">
      <DashboardNav />
      <div className="w-8/12">
        <p className="text-white "> request name </p>
      </div>
    </section>
  );
};

export default RequestCollection;
