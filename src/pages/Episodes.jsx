import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import groupBy from "lodash/groupBy";

const EPISODES_URL = "https://rickandmortyapi.com/api/episode";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [episodesPerSeason, setEpisodesPerSeason] = useState([]);

  async function loadEpisodes(url) {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("API error");
      })
      .then(({ results, info }) => {
        setEpisodes((prevState) => [...prevState, ...results]);

        if (info.next === null) {
          const episodesPerSeason = groupBy(episodes, (ep) =>
            ep.episode.substring(0, 3)
          );

          setEpisodesPerSeason(episodesPerSeason);
        } else {
          loadEpisodes(info.next);
        }
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadEpisodes(EPISODES_URL);
  }, []);

  return (
    <>
      <div className="mx-auto text-left text-lg w-fit text-eletric-green font-share-tech">
        {Object.keys(episodesPerSeason).map((season, key) => (
          <div className="pt-4">
            <h1 className="text-xl sm:text-4xl py-1 text-center text-neon-blue rounded bg-neon-green bg-opacity-20">
              {"Season " + season[2]}
            </h1>
            {episodesPerSeason[season].map((episode, index) => (
              <>
                <li className="text-base pl-4 py-2 sm:py-0 sm:text-xl hover:underline list-none">
                  <Link to={`${episode.id}`}>
                    {episode.id}. {episode.name}
                  </Link>
                </li>
              </>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
export default Episodes;
