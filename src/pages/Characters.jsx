import React, { useState, useEffect } from "react";
import "../App.css";
import Pagination from "../components/Pagination/Pagination";

import Card from "../components/Card/Card";
import Filter from "../components/Filters/Filter";
import Search from "../components/Search/Search";
// import FiltersDropdown from "../components/Card/FiltersDrpdown";

const Characters = () => {
  // -- Search feature: --
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  //Dropdown:
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  // Filters:
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");

  // -- Request data from the API --
  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  const [data, updateData] = useState([]);

  var { info, results } = data; //destructuring the info and results (comes with the api response) from the data! :D
  // The "data" variable will store the data from the API. "updateData" will change that data everytime we want.

  useEffect(() => {
    (async function () {
      var data = await fetch(api).then((response) => response.json());
      updateData(data);
    })();
  }, [api]);

  return (
    <div>
      <div className="flex">
        <button
          class="bg-dark-green border border-neon-green text-neon-green text-md font-share-tech ml-8 rounded-md py-1 px-2 uppercase active:text-neon-blue hover:cursor-pointer inline-flex items-center "
          onClick={handleOpen}
        >
          Sort By
          {open ? (
            <svg
              aria-hidden="true"
              class="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              class="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </button>
        <Search setPage={setPage} setSearch={setSearch} />
      </div>

      {open ? (
        <Filter
          page={page}
          status={status}
          species={species}
          setStatus={setStatus}
          setGender={setGender}
          setSpecies={setSpecies}
          setPage={setPage}
        />
      ) : (
        ""
      )}
      <Card page="/characters" results={results} />
      <Pagination info={info} page={page} setPage={setPage} />
    </div>
  );
};
export default Characters;
