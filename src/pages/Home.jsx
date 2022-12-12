import React from "react";

import hero from "../assets/hero.png";

const Home = () => {
  return (
    <div className="text-eletric-green tracking-widest mt-8">
      <div className="text-eletric-green font-share-tech uppercase text-3xl sm:text-5xl text-center">
        Wubba lubba dub-dub!
      </div>

      <img
        className="h-96 sm:h-[450px] mx-auto -mt-4 sm:-mt-16 animate-wiggle"
        src={hero}
        alt="Green portal"
      />
      <div className="text-eletric-green font-share-tech uppercase text-lg sm:text-xl text-center -mt-4 sm:-mt-16">
        Welcome to the Rick and Morty Wikipedia
      </div>
    </div>
  );
};
export default Home;
