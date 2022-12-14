import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar({ setPage }) {
  function refreshPage() {
    setPage(1);
    window.location.reload(false);
  }

  return (
    <nav
      id="navbar"
      className="transition-all w-full border-gray-200 bg-black top-0 z-50 px-2 py-2.5 shadow-xl sm:px-4"
    >
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
        <Link to="/">
          <img
            className="h-16 sm:h-24 mb-6 sm:mb-4 object-fill hover:cursor-pointer"
            src={logo}
            alt="Rick and Morty Logo"
            onClick={refreshPage}
          />
        </Link>
        <div className="flex tracking-widest font-share-tech uppercase">
          <Link
            to="/character"
            className="text-neon-green text-sm sm:text-base sm:mx-12 px-2 hover:bg-neon-green hover:text-black hover:cursor-pointer"
          >
            Characters
          </Link>

          <Link
            to="/episode"
            className="text-neon-green text-sm sm:text-base  sm:mx-12 px-2 hover:bg-neon-green hover:text-black hover:cursor-pointer"
          >
            Episodes
          </Link>
          <Link
            to="/about"
            className="text-neon-green text-sm sm:text-base sm:mx-12 px-2 hover:bg-neon-green hover:text-black hover:cursor-pointer"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
