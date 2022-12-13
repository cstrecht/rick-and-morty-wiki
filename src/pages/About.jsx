import React from "react";
import heroAbout from "../assets/heroAbout.png";

const About = () => {
  return (
    <div className="sm:flex sm:flex-inline text-black px-8 py-3 sm:p-8 sm:pt-12 sm:px-20 font-share-tech">
      <div>
        <img
          className="hidden sm:flex bottom-0 right-0 md:h-96"
          src={heroAbout}
          alt="hero"
        />
      </div>

      <div className="flex flex-col">
        <p className="w-fit sm:w-[700px] text-xs sm:text-base pb-4 sm:leading-8 text-center sm:text-right bg-neon-green bg-opacity-60 p-2 rounded-md">
          <span className="text-xl sm:text-3xl">"Rick and Morty</span> is an
          American adult animated science-fiction sitcom created by Justin
          Roiland and Dan Harmon for Cartoon Network's nighttime programming
          block <span className="text-xl sm:text-3xl">Adult Swim.</span> The
          series follows the misadventures of cynical mad scientist{" "}
          <span className="text-xl sm:text-3xl">Rick Sanchez</span>and his
          grandson <span className="text-xl sm:text-3xl">Morty Smith</span>, who
          split their time between domestic life and{" "}
          <span className="text-xl sm:text-3xl">interdimensional</span>{" "}
          adventures. The general concept of Rick and Morty relies on two{" "}
          <span className="text-xl sm:text-3xl">conflicting scenarios:</span>
          domestic family drama, and a crazy grandfather dragging his grandson
          into hijinks"
        </p>
        <br />
        <p className="text-lg text-center sm:text-right sm:pt-4 text-neon-green">
          made with <span className="text-neon-purple">♥</span> by{" "}
          <a
            href="https://github.com/cstrecht"
            className="underline hover:text-neon-blue"
          >
            carolina strecht
          </a>
          <br />
          <span className="text-xs">This app is imaginary and unofficial.</span>
        </p>

        <div>
          <img className="sm:hidden mx-auto h-36" src={heroAbout} alt="hero" />
        </div>
      </div>
    </div>
  );
};
export default About;
