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
    <div className="text-eletric-green">
      <button onClick={() => navigate(-1)}>go back</button>
      <div>hello episode</div>
      <div>Episode number {id}</div>
      <div>name: {name}</div>
      <div>Air dated: {air_date}</div>
      <div>Episode: {episode}</div>
      <div>Created: {created}</div>
      {/* Characters participated here with links */}
    </div>
  );
};
export default EpisodeDetails;
