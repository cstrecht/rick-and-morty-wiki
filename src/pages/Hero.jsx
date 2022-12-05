import React from "react";

import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="text-eletric-green tracking-widest">
      <div className="text-eletric-green font-share-tech uppercase text-5xl text-center">
        Wubba lubba dub-dub!
      </div>

      <img className="h-[550px] mx-auto -mt-20" src={hero} alt="Green portal" />
      <div className="text-eletric-green font-share-tech uppercase text-2xl text-center -mt-12">
        The Rick and Morty Wikipedia
      </div>
    </div>
  );
};
export default Hero;
