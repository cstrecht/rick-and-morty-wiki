import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination/Pagination";

const Episodes = ({ info }) => {
  const [page, setPage] = useState(1);
  const [episodes, setEpisodes] = useState([]);

  const api = `https://rickandmortyapi.com/api/episode?page=${page}`;

  useEffect(() => {
    const getEpisodes = async () => {
      const response = await fetch(api);
      const data = await response.json();

      setEpisodes(data.results);
      //console.log(data.results);
    };

    getEpisodes();
  }, [api]);

  return (
    <div className="pt-12 px-20 text-lg w-fit text-eletric-green font-share-tech">
      {episodes.map((episode, key) => (
        <Link to={`${episode.id}`}>
          <div className="flex pb-3 hover:text-neon-blue">
            <span className="bg-neon-blue bg-opacity-30 px-3">
              Episode {episode.id}
            </span>{" "}
            - {episode.name} ({episode.air_date})
          </div>
        </Link>
      ))}
      <Pagination info={info} page={page} setPage={setPage} />
    </div>
  );
};
export default Episodes;
