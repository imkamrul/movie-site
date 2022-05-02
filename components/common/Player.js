import React from "react";
import ReactPlayer from "react-player";
import { useCallback, useRef, useState } from "react";
import { CrossIcon2 } from "./SVGIcons";
const Player = () => {
  return (
    <section>
      <div className="container mx-auto">
        <ReactPlayer
          className="!w-[calc(100%+60px)]  md:!w-[100%] !h-[90vh] aspect-video mx-auto"
          url="https://youtu.be/5Eqb_-j3FDA"
          loop={true}
          muted={false}
          playing={true}
          playsinline={true}
          controls={true}
        />
      </div>
    </section>
  );
};

export default Player;
