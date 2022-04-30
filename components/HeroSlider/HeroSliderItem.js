import Image from "next/image";
import Link from "next/link";

const HeroSliderItem = (props) => {
  const { bgImage, heading, desc, image, isActive } = props;

  return (
    <div
      style={{
        background: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "auto",
      }}
      className="w-screen"
    >
      <div className="container mx-auto">
        <div className="h-auto lg:h-[90vh] py-5  container 3xl:mx-auto flex flex-col-reverse lg:flex-row items-center lg:px-[70px]">
          <div className="w-full lg:w-6/12  pl-3 ">
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
              <span className="bg-[#1F80DF] px-2 py-1 text-white text-base lg:text-lg rounded-sm mr-2">
                Action
              </span>
              <span className="bg-[#1F80DF] px-2 py-1 text-white text-base lg:text-lg rounded-sm mr-2">
                Action
              </span>
            </p>
            <p className="pt-3 text-white text-sm lg:text-base">
              Streamlab is a long established fact that a reader will be
              distracted by the readable content of a page when Streamlab at its
              layout Streamlab.
            </p>
            <p className="pt-3 text-white text-sm md:text-base">
              <span className="text-[#1F80DF]">Cast</span> Anna Romanson, RObert
              Romanson
            </p>
            <p className="pt-3 text-white text-sm md:text-base">
              <span className="text-[#1F80DF]">Language</span> Language
            </p>

            <div className="flex mb-10 lg:mb-0">
              <a
                href=""
                className="bg-[#1F80DF] px-4 py-2 rounded-sm mt-5 inline-block text-white uppercase text-sm lg:text-lg w-6/12 lg:w-4/12"
              >
                <i className="fa-solid fa-play pr-2" /> Play Now
              </a>
              <a
                href=""
                className="bg-themeText px-4 py-2 rounded-sm mt-5 inline-block text-white uppercase  mx-5 text-sm lg:text-lg w-7/12 lg:w-4/12"
              >
                <i className="fa-solid fa-download pr-2" /> Download
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-5 lg:px-[35px]">
            <Image
              src={image}
              alt=""
              width={582}
              height={330}
              layout="responsive"
              className="rounded px-10  mt-5 block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderItem;
