import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Episode from "./Episode";

const BASE_URL = "https://rickandmortyapi.com/api";

const CardDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  async function loadCharacter() {
    fetch(`${BASE_URL}/character/${id}`)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("API error");
      })
      .then((character) => setCharacter(character))
      .catch((error) => console.log(error));
  }

  //fetch data from API:
  useEffect(() => {
    loadCharacter();
  }, []);

  return (
    <div className="font-share-tech py-4 px-8 overflow-hidden">
      <button
        onClick={() => navigate(-1)}
        className="bg-dark-green border border-neon-green text-neon-green text-md font-share-tech rounded-md py-1 px-2 uppercase active:text-white hover:cursor-pointer hover:underline"
      >
        ← go back
      </button>
      {character && (
        <div className=" mx-auto  bg-neon-blue bg-opacity-30 w-fit rounded-xl border-8 border-neon-green mt-3">
          <h1 className="bg-neon-green text-center text-4xl py-2">
            Character ID
          </h1>
          <div className="flex">
            <div>
              <img src={character.image} alt="character face" />
            </div>
            <div className="p-4 text-xl tracking-wide text-neon-blue">
              <h1>
                Name: <span className="text-neon-green">{character.name}</span>
              </h1>
              <p>
                Gender:{" "}
                <span className="text-neon-green">{character.gender}</span>
              </p>
              <p>
                From:{" "}
                <span className="text-neon-green">
                  {character.location?.name}
                </span>
              </p>
              <p>
                Origin:
                <span className="text-neon-green">
                  {character.origin?.name}
                </span>
              </p>
              <p>
                Status:{" "}
                <span className="text-neon-green">{character.status}</span>
              </p>
              <p>
                Species:{" "}
                <span className="text-neon-green">{character.species}</span>
              </p>
              <p>
                Subspecies:
                <span className="text-neon-green">
                  {character.type || "No subspecies"}
                </span>
              </p>
              <p>
                Created at{" "}
                <span className="text-neon-green"> {character.created}</span>
              </p>

              <p>
                Episodes participated:
                <ul className="text-neon-green">
                  {character.episode.map(function (episode, key) {
                    return <Episode key={key} apiUrl={episode} />;
                  })}
                </ul>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CardDetails;
