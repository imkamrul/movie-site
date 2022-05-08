import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);
const SingleSlider = () => {
  return (
    <div className="text-white">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <section
            style={{
              background: `url(/images/hero-slider/3.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "auto",
              width: "90%",
            }}
            className="w-screen   mx-auto border-l-4 border-themeText rounded my-10"
          >
            <div className="">
              <div className="h-auto lg:h-[500px] py-5  container 3xl:mx-auto flex flex-col-reverse lg:flex-row items-center lg:px-[70px]">
                <div className="w-full lg:w-7/12  pl-3 ">
                  <h2 className="text-white text-xl lg:text-6xl font-semibold">
                    KING OF THE SKULL
                  </h2>
                  <p className="text-white text-base lg:text-lg pt-3">
                    3hr 00min -{" "}
                    <span className="bg-[#F4C418] text-black font-bold px-1 rounded-sm">
                      IMDb
                    </span>{" "}
                    9.5 - 2010
                  </p>
                  <p className="pt-3 ">
                    <span className="bg-themeText px-2 py-1 text-white text-base lg:text-lg rounded-sm mr-2">
                      Action
                    </span>
                    <span className="bg-themeText px-2 py-1 text-white text-base lg:text-lg rounded-sm mr-2">
                      Action
                    </span>
                  </p>
                  <p className="pt-3 text-white text-sm lg:text-base">
                    Streamlab is a long established fact that a reader will be
                    distracted by the readable content of a page when Streamlab
                    at its layout Streamlab.
                  </p>
                  <p className="pt-3 text-white text-sm md:text-base">
                    <span className="text-themeText font-bold">Cast</span> Anna
                    Romanson, RObert Romanson
                  </p>
                  <p className="pt-3 text-white text-sm md:text-base">
                    <span className="text-themeText font-bold">Language</span>{" "}
                    Language
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SingleSlider;
