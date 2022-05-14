import React from "react";
import DashboardNav from "../../components/Section/DashboardNav";

const User = () => {
  return (
    <section className="flex">
      <DashboardNav />
      <div className="w-8/12">
        <p className="text-white "> User </p>
      </div>
    </section>
  );
};

export default User;
