import { useRef, useState } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Keyboard,
  Mousewheel,
  Navigation,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { LeftArrow, RightArrow } from "../common/SVGIcons";
import HeroSliderItem from "./HeroSliderItem";

SwiperCore.use([Autoplay, EffectFade, Navigation]);
const HeroSlider = ({ content }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [count, setCount] = useState(0);
  const bgChange = () => {
    if (count === 0 && count < 4) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <div className="relative h-full arrow-item">
        <div className="flex justify-between items-center h-full arrow ">
          <div className="absolute z-50 top-0 left-6 h-full flex items-center justify-center tr">
            <div
              className={`group relative w-16 cursor-pointer  h-16`}
              ref={prevRef}
            >
              <button
                onClick={() => bgChange()}
                className="absolute left-0 flex items-center review-slider-navigation text-xl bg-[#0a0a0a8c]   group-hover:bg-transparent rounded-full h-16 w-16   text-white p-6 group z-50 "
              >
                <LeftArrow />
              </button>
              <span className="text-white text-lg absolute left-0 top-0 invisible group-hover:visible uppercase w-32   group-hover:bg-[#0a0a0a8c] h-16 rounded-full  ">
                <div className="absolute left-12 top-6 font-medium  ff-exo text-sm">
                  slide
                </div>
              </span>
            </div>
          </div>

          <div className="absolute z-10 top-0 right-6 h-full flex items-center justify-center tr">
            <div
              className={`group relative w-16 h-16 cursor-pointer   `}
              ref={nextRef}
            >
              <button className="absolute left-0 top-0 flex items-center review-slider-navigation h-16 w-16 rounded-full bg-[#0a0a0a8c]   group-hover:bg-transparent  text-white p-6 group z-50 text-2xl ">
                <RightArrow />
              </button>
              <span className="text-white text-lg absolute right-0 top-0 invisible group-hover:visible uppercase w-32   group-hover:bg-[#0a0a0a8c] h-16 rounded-full   ">
                <div className="absolute right-12 top-6 ff-exo font-medium text-sm">
                  slide
                </div>
              </span>
            </div>
          </div>
        </div>
        <Swiper
          loop={true}
          navigation={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          effect={"fade"}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          isActive
        >
          {content.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => {
                return <HeroSliderItem content={item} isActive={isActive} />;
              }}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HeroSlider;
