import Image from "next/image";
import React, { useCallback, useState } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { CrossIcon2 } from "../common/SVGIcons";
import BackgroundSVG from "../ui/BackgroundSVG";
// modal style
const customStyles = {
  content: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: "0",
    top: "0",
    zIndex: "9999",
    overflow: "hidden",
    backgroundColor: "#0A0E17",
  },
};
const HeroSliderItem = ({ content, isActive }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  function openModal() {
    setIsOpen(true);
    setPlaying(true);
  }

  function closeModal() {
    setIsOpen(false);
    setPlaying(true);
  }
  return (
    <section
      style={{
        background: `url(${content.banner_image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "auto",
        zIndex: "9999",
      }}
      className="w-screen bg-slider"
    >
      <div className="container mx-auto active-slider">
        <div className="h-auto lg:h-[100vh] py-5  container 3xl:mx-auto flex flex-col-reverse lg:flex-row items-center lg:px-[70px]">
          <div className="w-full lg:w-6/12  pl-3 z-[999]">
            <h2 className="text-white text-xl lg:text-6xl font-semibold">
              {content.name}
            </h2>
            <p className="text-white text-base lg:text-lg pt-3">
              {content.duration} -{" "}
              <span className="bg-[#F4C418] text-black font-bold px-1 rounded-sm">
                IMDb
              </span>{" "}
              {content.rating} - {content.date.slice(0, 4)}
            </p>
            <p className="pt-3 ">
              {content.Type.map((type, index) => {
                return (
                  <span
                    key={index}
                    className="bg-themeText px-2 py-1 text-white text-base lg:text-lg rounded-sm mr-2"
                  >
                    {type}
                  </span>
                );
              })}
            </p>
            <p className="pt-3 text-white text-sm lg:text-base">
              {content.info.slice(0, 240)}..
            </p>
            <p className="pt-3 text-white text-sm md:text-base">
              <span className="text-themeText font-bold">Cast</span>{" "}
              {content.cast}
            </p>
            <p className="pt-3 text-white text-sm md:text-base">
              <span className="text-themeText font-bold">Language</span>{" "}
              {content.language}
            </p>

            <div className="flex mb-10 lg:mb-0 z-50">
              <a
                href={content.trailer}
                className="bg-themeBG hover:bg-themeText px-4 py-2 rounded-sm mt-5 inline-block text-white uppercase text-sm lg:text-lg w-6/12 lg:w-4/12  text-center"
              >
                <i className="fa-solid fa-play pr-2" /> Play Trailer
              </a>
              <a
                href={content.download_link}
                className="bg-themeBG hover:bg-themeText px-4 py-2 rounded-sm mt-5 inline-block text-white uppercase  mx-5 text-sm lg:text-lg w-7/12 lg:w-4/12 text-center"
              >
                <i className="fa-solid fa-download pr-2" /> Download
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-5 lg:px-[35px] z-[9999]">
            <div className="relative">
              <Image
                src={content.banner_image}
                alt="imgage"
                width={582}
                height={330}
                layout="responsive"
                className="rounded px-10  mt-5 block"
              />
              <span>
                {/* <a
                  id="play-video"
                  className="video-play-button cursor-pointer inline-block"
                  onClick={openModal}
                >
                  <Image
                    src="/play-icon.svg"
                    width={35}
                    height={35}
                    layout="fixed"
                    alt="play-icon"
                    className="inline-block"
                  />
                </a> */}
                <a className="playBut " onClick={openModal}>
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="213.7px"
                    height="213.7px"
                    viewBox="0 0 213.7 213.7"
                    enableBackground="new 0 0 213.7 213.7"
                  >
                    <polygon
                      className="triangle"
                      id="XMLID_18_"
                      fill="none"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="
            73.5,62.5 148.5,105.8 73.5,149.1 "
                    ></polygon>

                    <circle
                      className="circle"
                      id="XMLID_17_"
                      fill="none"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      cx="106.8"
                      cy="106.8"
                      r="103.3"
                    ></circle>
                  </svg>
                </a>
              </span>
            </div>

            {/* open modal trigger */}
            {/* modal  */}
            {useCallback(
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
              >
                <div
                  className="z-[9999] h-screen w-screen relative overflow-hidden flex justify-center items-center"
                  onClick={closeModal}
                >
                  <CrossIcon2
                    className="w-6 fixed top-[120px] right-14 z-50 cursor-pointer"
                    onClick={closeModal}
                  />
                  <ReactPlayer
                    className="!w-[calc(100%+60px)] !h-auto md:!w-[1040px] aspect-video relative z-50"
                    url={content.download_link}
                    loop={false}
                    muted={false}
                    playing={true}
                    playsinline={true}
                    controls={true}
                  />
                </div>
              </Modal>,
              [modalIsOpen, closeModal]
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSliderItem;
