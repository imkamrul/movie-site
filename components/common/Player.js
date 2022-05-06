import React from "react";
import ReactPlayer from "react-player";

const Player = ({ url }) => {
  return (
    <section>
      <div className="container mx-auto">
        <ReactPlayer
          className="!w-[calc(100%+60px)]  md:!w-[100%] !h-[90vh] aspect-video mx-auto"
          url={url}
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
