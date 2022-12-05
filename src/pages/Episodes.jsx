import React, { useState, useEffect } from "react";
//import Pagination from "../components/Pagination/Pagination"; FIX THIS LATER, not working properly :(
import { Link } from "react-router-dom";

const Episodes = ({ page, setPage, info, id }) => {
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
    <div>
      {episodes.map((episode, key) => (
        <Link to={`${episode.id}`}>
          <div className="text-eletric-green flex font-share-tech">
            <div key={episode.id} className="table-data text-center">
              {episode.id}
            </div>
            <div key={episode.name} className="table-data text-center">
              {episode.name}
            </div>
            <div key={episode.air_date} className="table-data text-center">
              {episode.air_date}
            </div>
          </div>
        </Link>
      ))}
      {/* <Pagination info={info} page={page} setPage={setPage} /> */}
    </div>
  );
};
export default Episodes;
