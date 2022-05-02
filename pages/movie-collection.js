import React from "react";
import DashboardNav from "../components/Section/DashboardNav";

const MovieCollection = () => {
  return (
    <section className="flex">
      <DashboardNav />
      <div className="w-8/12">
        <p className="text-white "> movei name </p>
      </div>
    </section>
  );
};

export default MovieCollection;
