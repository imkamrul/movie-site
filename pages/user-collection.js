import React from "react";
import DashboardNav from "../components/Section/DashboardNav";

const UserCollection = () => {
  return (
    <section className="flex">
      <DashboardNav />
      <div className="w-8/12">
        <p className="text-white "> user name </p>
      </div>
    </section>
  );
};

export default UserCollection;
