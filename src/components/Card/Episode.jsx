import React, { useState, useEffect } from "react";

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
    <>
      <li>{episode.name}</li>
    </>
  );
};

export default Episode;
