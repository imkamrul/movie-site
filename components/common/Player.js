import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Player = ({ url }) => {
  const [media, setMedia] = useState(null);
  useEffect(() => {
    setMedia(
      <ReactPlayer
        className="!w-[calc(100%+60px)]  md:!w-[100%] !h-[90vh] aspect-video mx-auto"
        url={"https://youtu.be/5Eqb_-j3FDA"}
        loop={false}
        muted={false}
        playing={true}
        playsinline={true}
        controls={true}
      />
    );
  }, []);
  return (
    <section>
      <div className="container mx-auto">{media}</div>
    </section>
  );
};

export default Player;
