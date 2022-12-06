import React from "react";

import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="text-eletric-green tracking-widest">
      <div className="text-eletric-green font-share-tech uppercase text-5xl text-center">
        Wubba lubba dub-dub!
      </div>

      <img
        className="h-[550px] mx-auto -mt-20 animate-wiggle"
        src={hero}
        alt="Green portal"
      />
      <div className="text-eletric-green font-share-tech uppercase text-xl text-center -mt-20">
        Welcome to the Rick and Morty Wikipedia
      </div>
    </div>
  );
};
export default Hero;
