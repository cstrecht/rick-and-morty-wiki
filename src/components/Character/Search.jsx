import React from "react";

function Search({ setSearch, setPage }) {
  return (
    <div className="w-fi text-md font-share-tech ml-8 uppercase">
      <input
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search character..."
        className="mx-auto font-share-tech border rounded-lg border-neon-blue placeholder-neon-blue bg-neon-blue bg-opacity-10 uppercase text-neon-green text-sm sm:text-base px-1 font-light sm:w-60"
      />
    </div>
  );
}
export default Search;
