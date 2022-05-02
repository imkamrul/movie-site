import React from "react";
import Rating from "react-rating";
import TrailerPlayer from "./TrailerPlayer";

const MovieInfo = () => {
  return (
    <section>
      <div className="container mx-auto text-white">
        <div className="md:flex justify-between items-center">
          <h2 className="text-4xl py-3">The Warrior Life</h2>
          <TrailerPlayer />
        </div>
        <p className="text-sm py-2">
          The blood-soaked land of Kolar Gold Fields (KGF) has a new overlord
          now – Rocky, whose name strikes fear in the heart of his foes. His
          allies look up to Rocky as their savior, the government sees him as a
          threat to law and order; enemies are clamoring for revenge and
          conspiring for his downfall. Bloodier battles and darker days await as
          Rocky continues on his quest for unchallenged supremacy.
        </p>
        <p className="text-lg">
          <span>Writer</span>
          <span>English</span>
        </p>
        <p className="text-lg">
          <span>Director</span>
          <span>English</span>
        </p>
        <p className="text-lg">
          <span>Stars</span>
          <span>English</span>
        </p>
        <p className="text-lg">
          <span>Language</span>
          <span>English</span>
        </p>
        <p className="text-lg">
          <span>Genre</span>
          <span className="text-themeText"> Action, Adventure, Drama</span>
        </p>
        <p className="text-lg">
          <span>Run TIme</span>
          <span> 2hr 30mins</span>
        </p>
        <p className="text-lg">
          <span>Release Date</span>
          <span> 20 Feb, 2020</span>
        </p>
        <p className="text-lg">
          <span>Rating</span>
          <span>
            <Rating
              emptySymbol="fa-regular fa-star text-[#F5C518]"
              fullSymbol="fa-solid fa-star text-[#F5C518]"
              readonly
              initialRating={4.5}
            />
            {"  "} 4.5
          </span>
        </p>
        <p className="text-lg">
          <span>Quality</span>
          <span>1080p</span>
        </p>
      </div>
    </section>
  );
};

export default MovieInfo;
