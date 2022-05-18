import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import Modal from "react-modal";
import { CrossIcon2 } from "./SVGIcons";

const TrailerPlayer = ({ content }) => {
  const playerRef = useRef();

  const customStyles = {
    content: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      left: "0",
      top: "0",
      zIndex: "90",
      overflow: "hidden",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [muted, setMuted] = useState(true);

  const mutedHandler = () => {
    playerRef.current?.seekTo(0, "seconds");
    setMuted(!muted);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <button
        className="bg-themeText py-1 h-10 px-3 rounded"
        onClick={openModal}
      >
        <i className="fa-solid fa-play" /> Watch Trailer
      </button>
      {useCallback(
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div
            className="absolute h-screen w-screen bg-themeBG"
            onClick={closeModal}
          >
            <CrossIcon2
              className="w-6 fixed top-20 right-10 z-[9999] cursor-pointer"
              onClick={closeModal}
            />
          </div>

          <ReactPlayer
            className="!w-[calc(100%+60px)] !h-auto md:!w-[640px] aspect-video relative z-[999]"
            url={content}
            muted={false}
            playing={true}
            playsinline={true}
            controls={true}
          />
        </Modal>,
        [modalIsOpen, closeModal]
      )}
    </>
  );
};

export default TrailerPlayer;
