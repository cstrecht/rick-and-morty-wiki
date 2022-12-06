import React from "react";
import { Link } from "react-router-dom";
// import Search from "../Search/Search";
import logo from "../../assets/logo.png";
// import Sidebar from "../Sidebar/Sidebar";

function Navbar({ setPage, setSearch }) {
  // const [showSidebar, setShowSidebar] = useState(false);
  // scroll

  function refreshPage() {
    setPage(1);
    window.location.reload(false);
  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    //console.log(currentScrollPos);
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
      className="transition-all w-full border-gray-200 bg-black top-0 z-50 mb-4 px-2 py-2.5 shadow-xl sm:px-4"
    >
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
        <Link to="/">
          <img
            className="h-24 pb-4 object-fill hover:cursor-pointer"
            src={logo}
            alt="Rick and Morty Logo"
            onClick={refreshPage}
          />
        </Link>
        <div className="flex tracking-wide font-share-tech uppercase">
          <Link
            to="/characters"
            className="text-neon-green mx-12 pt-1 px-2 hover:bg-neon-green hover:text-black hover:cursor-pointer"
          >
            Characters
          </Link>

          <Link
            to="/episodes"
            className="text-neon-green mx-12 pt-1 px-2 hover:bg-neon-green hover:text-black hover:cursor-pointer"
          >
            Episodes
          </Link>
          <Link
            to="/about"
            className="text-neon-green mx-12 pt-1 px-2 hover:bg-neon-green hover:text-black hover:cursor-pointer"
          >
            About
          </Link>

          {/* <Sidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            onClick={() => setShowSidebar(!showSidebar)}
          /> */}
          {/* <Search setPage={setPage} setSearch={setSearch} /> */}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
