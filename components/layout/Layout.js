import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  console.log(router.pathname);
  useEffect(() => {
    if (router.pathname === "/") {
      setNav(true);
    } else if (router.pathname.includes("catagories")) {
      setNav(true);
      console.log("true");
    } else {
      setNav(false);
    }
  }, [router]);
  return (
    <>
      {nav && <Header />}
      <main className="pt-[11vh] md:pt-0">{children}</main>

      {nav && <Footer />}
    </>
  );
};

export default Layout;
