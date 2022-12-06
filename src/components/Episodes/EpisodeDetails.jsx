import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EpisodeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [fetchData, setFetchData] = useState([]);
  const { name, air_date, episode, created, characters } = fetchData; //falta o array das characters

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const episode = await fetch(api).then((response) => response.json());
      setFetchData(episode);
    })();
  }, [api]);

  return (
    <div className="font-share-tech py-4 px-8 overflow-hidden">
      <button
        onClick={() => navigate(-1)}
        className="bg-dark-green border border-neon-green text-neon-green text-md font-share-tech rounded-md py-1 px-2 uppercase active:text-white hover:cursor-pointer hover:underline"
      >
        ← go back
      </button>

      <div className="mx-auto max-w-xl  text-eletric-green bg-neon-blue bg-opacity-40 rounded-xl border-8 border-neon-green mt-3">
        <div className="bg-neon-green text-center text-4xl p-5 text-black">
          {name + " - Episode " + id}
        </div>
        <div className="p-6 tracking-wide text-xl text-neon-blue">
          <div>
            Air dated: <span className="text-neon-green">{air_date}</span>
          </div>
          <div>
            Episode reference:
            <span className="text-neon-green">{episode}</span>
          </div>
          <div>
            Created at <span className="text-neon-green">{created}</span>
          </div>
          <div>
            Participating characters:
            {/* <span className="text-neon-green">{characters[id]}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EpisodeDetails;
