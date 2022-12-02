import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import logo from "../../assets/logo.png";
import Sidebar from "../Sidebar/Sidebar";

function Navbar({ setPage, setSearch }) {
  const [showSidebar, setShowSidebar] = useState(false);
  // scroll

  function refreshPage() {
    setPage(1);
    window.location.reload(false);
  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-180px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <nav
      id="navbar"
      className="transition-all border-gray-200 bg-black sticky top-0 z-30 mb-4 px-2 py-2.5 shadow-xl sm:px-4"
    >
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
        <img
          className="h-32 pb-4 object-fill hover:cursor-pointer"
          src={logo}
          alt="Rick and Morty Logo"
          onClick={refreshPage}
        />
        <div className="flex tracking-wide font-share-tech uppercase">
          <div className="text-neon-green mx-12 pt-1 px-2 hover:bg-neon-green hover:text-black hover:cursor-pointer">
            Characters
          </div>
          <div className="text-neon-green mx-12 pt-1 px-2 hover:bg-neon-green hover:text-black hover:cursor-pointer">
            Locations
          </div>
          <div className="text-neon-green mx-12 pt-1 px-2 hover:bg-neon-green hover:text-black hover:cursor-pointer">
            Episodes
          </div>
          <div className="text-neon-green mx-12 pt-1 px-2 hover:bg-neon-green hover:text-black hover:cursor-pointer">
            About
          </div>
          <Sidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            onClick={() => setShowSidebar(!showSidebar)}
          />
          <Search setPage={setPage} setSearch={setSearch} />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
