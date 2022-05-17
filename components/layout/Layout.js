import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const router = useRouter();
  const [nav, setNav] = useState(true);

  useEffect(() => {
    if (
      router.pathname === "/" ||
      router.pathname.includes("catagories") ||
      router.pathname.includes("movie") ||
      router.pathname.includes("request")
    ) {
      setNav(true);
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
