import react from "react";
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
          <div className="relative block">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 pb-0">
              <svg
                className="h-4 text-neon-green"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="search..."
              className="w-24 bg-black border-b text-neon-green p-1 pl-10 font-light sm:w-60  lg:w-48"
            />
          </div>
        </div>

        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="text-gray-500 h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="text-gray-900 border-gray-100 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-lg border p-2 pl-10 text-sm"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
