import Search from "../Search/Search";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="border-gray-200 bg-black sticky top-0 z-50 mb-4 px-2 py-2.5 shadow-xl sm:px-4">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
        <img
          className="h-32 pb-4 object-fill"
          src={logo}
          alt="Rick and Morty Logo"
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
          <Search />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
