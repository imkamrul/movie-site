import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Movies from "./movies";
import Users from "./Users";
import Request from "./request";
const DashBoardBody = () => {
  const router = useRouter();
  // console.log(router.query);
  const [pathName, setPathName] = useState(null);
  console.log(pathName);
  useEffect(() => {
    setPathName(router?.query?.nav);
  }, [router?.query?.nav]);
  return (
    <div className="w-8/12">
      {pathName === "movies" ? (
        <Movies />
      ) : pathName === "requests" ? (
        <Request />
      ) : (
        pathName === "users" && <Users />
      )}

      {/* // <Users /> */}
    </div>
  );
};

export default DashBoardBody;
