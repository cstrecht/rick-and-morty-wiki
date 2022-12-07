import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Character from "./Character";
import { Link } from "react-router-dom";

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
        className="bg-dark-green border border-neon-green text-neon-green text-md font-share-tech rounded-md py-1 px-2 uppercase active:text-white hover:cursor-pointer hover:underline"
      >
        ← go back
      </button>

      {episode && (
        <div className="mx-auto max-w-xl  text-eletric-green bg-neon-blue bg-opacity-40 rounded-xl border-8 border-neon-green mt-3">
          <div className="bg-neon-green text-center text-4xl p-5 text-black">
            {episode.name + " - Episode " + episode.id}
          </div>
          <div className="p-6 tracking-wide text-xl text-neon-blue">
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
              <span className="text-neon-green">{episode.created}</span>
            </div>
            <div>
              Participating characters:
              <ul className="text-neon-green">
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
