import React, { useState } from "react";
import { Link } from "react-router-dom";
import groupBy from "lodash/groupBy";
import useEffectOnce from "../hooks/useEffectOnce";

const EPISODES_URL = "https://rickandmortyapi.com/api/episode";

//Fetch the Episodes:
async function fetchEpisodes() {
  let episodes = [];
  let finished = false;
  let url = EPISODES_URL;

  //Use an while loop to fetch all the episodes and store them in a array (don't need useState here, check useEffectOnce.jsx)
  while (!finished) {
    const { results, info } = await fetch(url).then((response) =>
      response.json()
    );

    episodes = episodes.concat(results);

    if (!info.next) finished = true;
    else url = info.next;
  }

  return groupBy(episodes, ({ episode }) => episode.substring(0, 3));
}

const Episodes = () => {
  const [episodesPerSeason, setEpisodesPerSeason] = useState([]);

  useEffectOnce(() => {
    fetchEpisodes().then((episodes) => setEpisodesPerSeason(episodes));
  }, []);

  return (
    <>
      <div className="mx-auto text-left text-lg w-fit text-eletric-green font-share-tech pb-24">
        {Object.keys(episodesPerSeason).map((season, key) => (
          <div key={key} className="pt-4">
            <h1 className="text-xl sm:text-4xl py-1 text-center text-neon-blue rounded bg-neon-green bg-opacity-20">
              {"Season " + season[2]}
            </h1>
            {episodesPerSeason[season].map((episode, key) => (
              <li
                key={episode.id}
                className="text-base pl-4 py-2 sm:py-0 sm:text-xl hover:underline list-none"
              >
                <Link to={`${episode.id}`}>
                  {episode.id}. {episode.name}
                </Link>
              </li>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Episodes;
