import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Episode from "./Episode";
import { Link } from "react-router-dom";

const BASE_URL = "https://rickandmortyapi.com/api";

const Character = () => {
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

  useEffect(() => {
    loadCharacter();
  }, []);

  return (
    <div className="font-share-tech py-4 px-8 overflow-hidden">
      <button
        onClick={() => navigate(-1)}
        className="bg-dark-green bg-opacity-50 border border-neon-green rounded text-neon-green text-sm font-share-tech py-1 px-8 uppercase active:text-white hover:cursor-pointer hover:underline"
      >
        ← back
      </button>
      {character && (
        <div className="mx-auto bg-neon-blue bg-opacity-30 w-fit rounded-xl border-8 border-neon-green mt-3">
          <h1 className="bg-neon-green text-center text-xl sm:text-3xl py-2 tracking-widest">
            Character ID
          </h1>
          <div className="md:flex">
            <div>
              <img
                src={character.image}
                alt="Characters face"
                className="h-60 mx-auto rounded-full px-4 mt-5 md:mr-0"
              />
            </div>
            <div className="m-6 leading-6 sm:leading-0 text-base tracking-wide text-white">
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
                Origin:{" "}
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
                Subspecies:{" "}
                <span className="text-neon-green">
                  {character.type || "None"}
                </span>
              </p>
              <p>
                Created at:{" "}
                <span className="text-neon-green">
                  {" "}
                  {character.created.substring(0, 10)}
                </span>
              </p>

              <p>
                Episodes participated:{" "}
                <ul>
                  {character.episode.map(function (episode, key) {
                    return (
                      <Link to={`${episode.id}`}>
                        <Episode key={key} apiUrl={episode} />
                      </Link>
                    );
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
export default Character;
