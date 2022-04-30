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
      <div className="main-container">
        <div className="xl:flex xl:items-center xl:justify-evenly lg:flex lg:items-center md:flex md:items-center   ">
          <div className="basis-1/2 xl:py-0  lg:py-0 md:py-0 py-20">
            {isActive ? (
              <>
                <h1 className="text-white font-bold font-exo mb-3 uppercase xl:text-6xl lg:text-6xl md:text-4xl text-4xl">
                  {heading}
                </h1>
                <p className="text-white   ff-exo uppercase text-[16px] font-semibold block">
                  {desc}
                </p>
              </>
            ) : (
              <>
                <h1 className="text-white font-bold font-exo mb-3 uppercase xl:text-6xl lg:text-6xl md:text-4xl text-4xl">
                  {heading}
                </h1>
                <p className="text-white   ff-exo uppercase text-[16px] font-semibold block ">
                  {desc}
                </p>
              </>
            )}
          </div>
          <div className="basis-1/2 w-2/2 h-2/2 xl:order-first lg:order-first md:order-first order-first xl:-translate-x-16  lg:-translate-x-10  md:-translate-x-10 pt-10">
            <img
              // style={{    height: "650px"}}
              src={image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderItem;
