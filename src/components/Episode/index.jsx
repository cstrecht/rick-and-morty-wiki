import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Character from "./Character";

const BASE_URL = "https://rickandmortyapi.com/api";

const Episode = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);

  async function loadEpisode() {
    fetch(`${BASE_URL}/episode/${id}`)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("API error");
      })
      .then((episode) => setEpisode(episode))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadEpisode();
  }, []);

  return (
    <div className="font-share-tech py-4 px-8 overflow-hidden">
      <button
        onClick={() => navigate(-1)}
        className="bg-dark-green bg-opacity-50 border border-neon-green rounded text-neon-green text-sm font-share-tech py-1 px-8 uppercase active:text-white hover:cursor-pointer hover:underline"
      >
        ← back
      </button>

      {episode && (
        <div className="mx-auto text-center bg-neon-blue bg-opacity-30 rounded-xl w-fit sm:w-96 border-8 border-neon-green mt-3">
          <div className="bg-neon-green text-center text-xl sm:text-3xl py-2 tracking-widest">
            {"Ep." + episode.id + " - " + episode.name}
          </div>
          <div className="m-6 leading-6 sm:leading-0 text-lg sm:text-base tracking-wide text-white">
            <div>
              Air dated:{" "}
              <span className="text-neon-green">{episode.air_date}</span>
            </div>
            <div>
              Episode reference:
              <span className="text-neon-green">{episode.episode}</span>
            </div>
            <div>
              Created at{" "}
              <span className="text-neon-green">
                {episode.created.substring(0, 10)}
              </span>
            </div>
            <div>
              Participating characters:
              <ul>
                {episode.characters.map((character, key) => (
                  <Character key={key} apiUrl={character} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Episode;
