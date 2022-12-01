import React from "react";

function Search({ setPage, setSearch }) {
  return (
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
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="SEARCH"
        className="w-24 bg-black uppercase text-neon-green p-1 pl-10 font-light sm:w-60  lg:w-48"
      />
    </div>
  );
}
export default Search;
