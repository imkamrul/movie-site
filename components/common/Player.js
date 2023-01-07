import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Player = ({ content }) => {
  const [media, setMedia] = useState(null);
  useEffect(() => {
    setMedia(
      <ReactPlayer
        className="!w-[calc(100%+60px)]  md:!w-[100%] !h-[90vh] aspect-video mx-auto"
        url={content}
        loop={false}
        muted={false}
        playing={false}
        playsinline={true}
        controls={true}
      />
    );
  }, []);
  return (
    <section>
      <div className="container mx-auto mt-10 md:mt-20">{media}</div>
    </section>
  );
};

export default Player;
