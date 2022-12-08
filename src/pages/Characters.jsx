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
        <Search setPage={setPage} setSearch={setSearch} />
        <Filter
          setStatus={setStatus}
          setGender={setGender}
          setSpecies={setSpecies}
          setPage={setPage}
        />
      </div>
      {characters.length === 0 && (
        <div className="text-neon-blue text-center font-share-tech">
          Oops! No characters were found.
        </div>
      )}
      {characters.length !== 0 && (
        <div className="grid grid-cols-4">
          {characters.map((character, key) => (
            <Link key={character.id} to={`${character.id}`}>
              <div className="w-60 h-[385px] mb-8 mx-auto bg-dark-green overflow-hidden text-eletric-green font-share-tech shadow-lg tracking-wide">
                <img
                  className="w-60"
                  src={character.image}
                  alt="Character face"
                />
                <div className="px-2 pt-2 pb-3 text-xl uppercase">
                  {character.name}
                </div>
                <div className="px-2 pb-2">
                  <span className="inline-block text-xs font-semibold text-gray-700">
                    STATUS:{" "}
                    {character.status === "Dead" ? (
                      <span className="line-through">{character.status}</span>
                    ) : (
                      <span className="no-underline">{character.status}</span>
                    )}
                  </span>
                  <br />
                  <span className="inline-block text-xs font-semibold text-gray-700">
                    SPECIES: {character.species}
                  </span>
                  <span className="inline-block text-xs font-semibold text-gray-700">
                    FROM: {character.location.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <ReactPaginate
        nextLabel={"►"}
        previousLabel={"◄"}
        breakLabel={"..."}
        pageCount={42}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={({ selected }) => setPage(selected + 1)}
        containerClassName={
          "flex justify-center font-share-tech my-4 text-eletric-green hover:cursor-pointer"
        }
        pageClassName={
          "px-3 py-2 leading-tight bg-dark-green border hover:underline"
        }
        previousClassName={
          "px-3 py-2 leading-tight bg-dark-green border rounded-l-lg hover:underline"
        }
        nextClassName={
          "px-3 py-2 leading-tight bg-dark-green border rounded-r-lg hover:underline"
        }
        activeClassName={"bg-eletric-green text-black border-none"}
      />
    </>
  );
};
export default Characters;
