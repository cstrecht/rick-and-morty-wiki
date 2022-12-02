import React, { useState, useEffect } from "react";
import Filter from "../Filters/Filter";

const Sidebar = ({
  page,

  setPage,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const API_URL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  const [data, updateData] = useState([]);

  //destructuring the info and results (comes with the api response) from the data! :D
  // The "data" variable will store the data from the API. "updateData" will change that data everytime we want.
  console.log(data);

  useEffect(() => {
    (async function () {
      var data = await fetch(API_URL).then((response) => response.json());
      updateData(data);
    })();
  }, [API_URL]);

  return (
    <>
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className="flex mx-12 hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="z-30 flex items-center cursor-pointer pt-2 w-6 h-6 text-neon-green"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <span className="text-neon-green pt-1">filter</span>
      </div>
      <div
        className={`top-0 right-0 w-[35vw] bg-opacity-60 backdrop-blur-sm bg-neon-blue ease-in-out duration-300
        p-10 pl-20 text-white fixed h-full z-40 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        {/* Sidebar content here below: */}
        <Filter
          page={page}
          status={status}
          setStatus={setStatus}
          setGender={setGender}
          setSpecies={setSpecies}
          setPage={setPage}
        />

        <button
          className="flex text-4xl text-neon-green items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
