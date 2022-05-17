import React from "react";
import Rating from "react-rating";
import TrailerPlayer from "./TrailerPlayer";

const MovieInfo = ({ content }) => {
  return (
    <section>
      <div className="container mx-auto text-white">
        <div className="md:flex justify-between items-center pt-10">
          <h2 className="text-4xl py-3 ">{content.name}</h2>
          <TrailerPlayer content={content.trailer} />
        </div>
        <p className="text-sm py-2">{content.info}</p>
        <p className="text-lg">
          <span>Writer </span> <span> {content.writer}</span>
        </p>
        <p className="text-lg">
          <span>Director </span>
          <span> {content.director}</span>
        </p>
        <p className="text-lg">
          <span>Stars </span>
          <span> {content.cast}</span>
        </p>
        <p className="text-lg">
          <span>Language </span>
          <span> {content.language}</span>
        </p>
        <p className="text-lg">
          <span>Genre </span>
          {content.genre.map((item, index) => (
            <span key={index} className="text-themeText">
              {item}
              {content.genre.length - 1 !== index && ", "}
            </span>
          ))}
          {/* <span className="text-themeText"> Action, Adventure, Drama</span> */}
        </p>
        <p className="text-lg">
          <span>Run TIme </span>
          <span> {content.duration}</span>
        </p>
        <p className="text-lg">
          <span>Release Date </span>
          <span> {content.date}</span>
        </p>
        <p className="text-lg">
          <span>Rating </span>
          <span>
            {"  "} {content.rating}{" "}
            <Rating
              emptySymbol="fa-regular fa-star text-[#F5C518]"
              fullSymbol="fa-solid fa-star text-[#F5C518]"
              readonly
              initialRating={content.rating}
            />
          </span>
        </p>
        <p className="text-lg pb-4">
          <span>Quality </span>
          <span>{content.quality}</span>
        </p>
      </div>
    </section>
  );
};

export default MovieInfo;
