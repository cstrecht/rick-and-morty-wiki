import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Episode = ({ apiUrl }) => {
  const [episode, setEpisode] = useState({});

  async function loadEpisode() {
    fetch(apiUrl)
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
    <Link to={`/episode/${episode.id}`}>
      <li className="underline text-neon-green pb-1 hover:text-white">
        Ep.{episode.id} {episode.name}
      </li>
    </Link>
  );
};

export default Episode;
