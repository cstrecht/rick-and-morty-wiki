import React from "react";
import heroAbout from "../assets/heroAbout.png";

const About = () => {
  return (
    <div className="text-eletric-green pt-12 px-20 font-share-tech leading-loose">
      <img
        className="mx-auto bottom-0 right-0 absolute h-96"
        src={heroAbout}
        alt="hero"
      />
      <p className="w-4/5">
        "Rick and Morty is an American adult animated science-fiction sitcom
        created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime
        programming block Adult Swim. The series follows the misadventures of
        cynical mad scientist Rick Sanchez and his grandson Morty Smith, who
        split their time between domestic life and interdimensional adventures.
        The general concept of Rick and Morty relies on two conflicting
        scenarios: domestic family drama, and an alcoholic grandfather dragging
        his grandson into hijinks."
      </p>
      <br />
      <br />
      <p className="text-lg pt-8">
        coded with <span className="text-neon-purple">♥</span> by{" "}
        <a
          href="https://github.com/cstrecht"
          className="underline hover:text-neon-blue"
        >
          carolina
        </a>
      </p>
    </div>
  );
};
export default About;
