import React from "react";

function Search({ setPage, setSearch }) {
  return (
    <div className="relative flex mx-auto">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 pb-0"></div>
      <input
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search character..."
        className="w-24 mx-auto font-share-tech placeholder-neon-green bg-dark-green uppercase text-neon-green px-10 p-1 font-light sm:w-60  lg:w-60"
      />
    </div>
  );
}
export default Search;
