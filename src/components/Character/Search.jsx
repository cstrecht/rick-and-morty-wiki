import React from "react";

function Search({ setSearch, setPage }) {
  return (
    <div className="bg-dark-green border w-fit border-neon-green text-neon-green text-md font-share-tech ml-8 rounded-md py-1 px-2 uppercase">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pb-0"></div>
      <input
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search character..."
        className="w-24 mx-auto font-share-tech placeholder-neon-green bg-dark-green uppercase text-neon-green p-1 font-light sm:w-60  lg:w-60"
      />
    </div>
  );
}
export default Search;
