import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EpisodeDetails = () => {
  const { id } = useParams();
  const [fetchData, setFetchData] = useState([]);
  const { name, air_date, episode, created } = fetchData; //falta o array das characters

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const episode = await fetch(api).then((response) => response.json());
      setFetchData(episode);
    })();
  }, [api]);

  return (
    <div className="text-eletric-green">
      <div>hello episode</div>
      <div>{name}</div>
      <div>{air_date}</div>
      <div>{episode}</div>
      <div>{created}</div>
    </div>
  );
};
export default EpisodeDetails;
