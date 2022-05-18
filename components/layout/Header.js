import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { BurgerMenu, CrossIcon } from "../common/SVGIcons";
import navData from "../../data/navbar.json";
import useUser from "../../hooks/useUser";

const Header = () => {
  const { logo, nav_link } = navData;
  const { admin, logout } = useUser();
  const router = useRouter(null);
  const [navOpen, setNavOpen] = useState(false);
  const [model, setModel] = useState(null);

  const path = router.pathname;
  const switchSideDrawerHandler = useCallback(function (close) {
    if (screen.width > 900) return;
    setNavOpen(true);
    document.querySelector("body").classList.add("overflow-hidden");
    if (close) {
      setNavOpen(false);
      document.querySelector("body").classList.remove("overflow-hidden");
      if (
        document
          .querySelector(".js__side-drawer")
          .classList.contains("translate-x-full")
      )
        return 0;
    }
    document
      .querySelector(".js__side-drawer")
      .classList.toggle("translate-x-full");
  }, []);

  function setSubMenuHeightHandler(model, setModel, e) {
    if (screen.width > 900) return;

    document.querySelectorAll(".js__sub-menu").forEach((el) => {
      el.style.maxHeight = "0px";
    });
    if (model !== e.target) {
      e.target.closest("li").querySelector(".js__sub-menu").style.maxHeight =
        "100vh";
      setModel(e.target);
    } else setModel(null);
  }

  useEffect(() => {
    document.querySelectorAll(".nav__item").forEach((el) => {
      if (el.getAttribute("href") === path) el.style.color = "#10B981";
    });
  }, [path]);
  const headerRef = useRef(null);

  useEffect(() => {
    // const header = document.querySelector("header");
    const HeaderBG = document.querySelector(".js-color-set");

    const js_ob = document.querySelector(".js_ob");
    const navObserverCallback = (watchEntry, navObserver) => {
      if (!watchEntry[0].isIntersecting) {
        HeaderBG.classList.add("active");
      } else {
        HeaderBG.classList.remove("active");
      }

      // console.log(watchEntry[0].isIntersecting);
    };
    const navObserverOptions = {
      root: null,
      threshold: 1,
      rootMargin: "1px",
    };
    const navObserver = new IntersectionObserver(
      navObserverCallback,
      navObserverOptions
    );
    navObserver.observe(js_ob);
  }, []);

  return (
    <>
      <header ref={headerRef}>
        <div className=" z-50    top-0 py-2 fixed w-full bg-themeBG md:bg-transparent js-color-set">
          <div className="container mx-auto">
            <nav className="flex justify-between items-center">
              <div className="w-36 h-12 relative">
                <Link href="/">
                  <a>
                    <Image
                      layout="fixed"
                      src="/logo.png"
                      alt="Logo"
                      width={120}
                      height={50}
                    />
                  </a>
                </Link>
              </div>

              <div className="flex items-center justify-end h-[7vh] px-4 md:px-0 flex-1">
                <span
                  onClick={switchSideDrawerHandler.bind(this, navOpen)}
                  className="w-6 h-6 burger lg:hidden z-[1]"
                >
                  {navOpen ? <CrossIcon /> : <BurgerMenu />}
                </span>

                <ul className="js__side-drawer lg:justify-end lg:items-center flex items-start lg:flex-row flex-nowrap flex-col lg:pt-0   fixed lg:relative lg:top-auto top-0 right-0 h-[100vh] lg:h-auto translate-x-full lg:translate-x-0 transition-transform pt-16 duration-500 px-4 lg:px-0 w-full font-semibold bg-themeBG md:bg-transparent">
                  {nav_link.map((item, idx) => {
                    return item.submenu?.length ? (
                      <li className="my-1 lg:mx-8 group relative" key={idx}>
                        <h3
                          className="text-white lg:group-hover:text-[#04aa6d] nav__item"
                          onClick={setSubMenuHeightHandler.bind(
                            this,
                            model,
                            setModel
                          )}
                        >
                          {item.text}
                        </h3>
                        <div className="js__sub-menu relative lg:absolute  max-h-0 left-0 lg:-left-10 overflow-hidden transition-all duration-500 md:w-[150px] lg:max-h-screen lg:hidden lg:group-hover:block">
                          <div className="md:shadow-nav md:flex justify-center p-2 md:m-2.5 bg-themeBG text-white cursor-auto ">
                            <div className="mb-4 md:mb-0">
                              <ul className="md:mt-3">
                                {item.submenu.map((sub_link, index) => {
                                  return (
                                    <li className="my-4" key={index}>
                                      <Link href={sub_link.link}>
                                        <a className="nav__item font-normal hover:text-[#04aa6d]  md:border-b-[1px] px-1 py-3 md:border-b-[#00bf6366]">
                                          {sub_link.text}
                                        </a>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    ) : (
                      <li
                        key={idx}
                        className="my-1 lg:mx-8"
                        onClick={switchSideDrawerHandler.bind(this, navOpen)}
                      >
                        <Link href={item.link}>
                          <a className="nav__item text-white lg:hover:text-themeText">
                            {item.text}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                  {admin && (
                    <li
                      className="my-1 lg:mx-8"
                      onClick={switchSideDrawerHandler.bind(this, navOpen)}
                    >
                      <Link href="Dashboard/Videos">
                        <a className="nav__item text-white lg:hover:text-themeText">
                          Dashboard
                        </a>
                      </Link>
                    </li>
                  )}
                  <li
                    onClick={switchSideDrawerHandler.bind(this, navOpen)}
                    className="my-1 lg:mx-8"
                  >
                    {!admin ? (
                      <Link href="/login">
                        <a className="bg-[#00B67A] text-white w-[66px] text-center rounded-md px-3 py-2">
                          Sign in
                        </a>
                      </Link>
                    ) : (
                      <a
                        onClick={logout}
                        className="bg-[#00B67A] text-white w-[66px] text-center rounded-md px-3 py-2 cursor-pointer"
                      >
                        Sign out
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <p className="js_ob bg-white text-black"></p>
    </>
  );
};

export default Header;
