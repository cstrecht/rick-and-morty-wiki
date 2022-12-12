import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Search from "../components/Character/Search";
import Filter from "../components/Character/Filter";
import ReactPaginate from "react-paginate";

const BASE_URL = "https://rickandmortyapi.com/api";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  //Search bar:
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  //Filters:
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  //Dropdown (Sort By button):
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  async function loadCharacters() {
    fetch(
      `${BASE_URL}/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`
    )
      .then((response) => {
        if (response.ok) return response.json();

        throw new Error("API error");
      })
      .then(({ results, info }) => {
        setCharacters(results);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadCharacters();
  }, [search, page, status, gender, species]);

  return (
    <>
      <div>
        <div className="flex my-6">
          <button
            class="text-neon-blue rounded-lg bg-neon-blue bg-opacity-10 border border-x-neon-blue text-md font-share-tech ml-3 sm:ml-8 px-2 uppercase hover:cursor-pointer inline-flex items-center text-sm sm:text-base"
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
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPage={setPage}
          />
        ) : (
          ""
        )}
      </div>
      {characters.length === 0 && (
        <div className="text-neon-blue text-center font-share-tech">
          Oops! No characters were found.
        </div>
      )}
      {characters.length !== 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {characters.map((character, key) => (
            <Link key={character.id} to={`${character.id}`}>
              <div className="w-44 sm:w-60 h-auto sm:h-[395px] mb-8 mx-auto bg-neon-blue bg-opacity-20 rounded-xl text-neon-green font-share-tech shadow-lg tracking-wide hover:-translate-y-1 hover:scale-105 transition ease-in-out">
                <img
                  className="w-44 rounded-t-lg sm:w-60"
                  src={character.image}
                  alt="Character face"
                />
                <div className="px-2 py-2 text-base sm:text-lg uppercase">
                  {character.name}
                </div>
                <div className="px-2">
                  <span className="inline-block text-xs sm:text-sm font-semibold text-gray-700">
                    STATUS:{" "}
                    {character.status === "Dead" ? (
                      <span className="line-through">{character.status}</span>
                    ) : (
                      <span className="no-underline">{character.status}</span>
                    )}
                  </span>
                  <br />
                  <span className="inline-block text-xs sm:text-sm font-semibold text-gray-700">
                    SPECIES: {character.species}
                  </span>
                  <br />
                  <span className="inline-block text-xs sm:text-sm font-semibold text-gray-700">
                    FROM: {character.location.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <ReactPaginate
        nextLabel={" ► "}
        previousLabel={" ◄ "}
        breakLabel={"..."}
        pageCount={42}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => setPage(selected + 1)}
        containerClassName={
          "flex justify-center font-share-tech my-4 text-neon-blue sm:text-lg hover:cursor-pointer"
        }
        pageLinkClassName={
          "px-3 py-2 leading-tight bg-black border border-neon-blue sm:text-lg hover:underline"
        }
        previousLinkClassName={
          "px-3 py-2 leading-tight bg-black border rounded-l-lg sm:text-lg hover:underline"
        }
        nextLinkClassName={
          "px-3 py-2 leading-tight bg-black border rounded-r-lg hover:underline"
        }
        activeLinkClassName={"text-neon-green border border-neon-green"}
      />
    </>
  );
};
export default Characters;
