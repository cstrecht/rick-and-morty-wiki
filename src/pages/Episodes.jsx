import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import groupBy from "lodash/groupBy";

const BASE_URL = "https://rickandmortyapi.com/api";
const Episodes = () => {
  const [episodesPerSeason, setEpisodesPerSeason] = useState([]);

  async function loadEpisodes() {
    fetch(`${BASE_URL}/episode`)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("API error");
      })

      .then(({ results, info }) => {
        const episodesPerSeason = groupBy(results, (ep) =>
          ep.episode.substring(0, 3)
        );

        setEpisodesPerSeason(episodesPerSeason);
        // FINISH THIS: SHOW ALL SEASONS IN ONE PAGE
        if (info.next !== null) {
        } else {
        }
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadEpisodes();
  }, []);

  return (
    <>
      <div className="mx-auto text-left text-lg w-fit text-eletric-green font-share-tech">
        {Object.keys(episodesPerSeason).map((season, key) => (
          <div className="pt-4">
            <h1 className="text-xl sm:text-4xl py-1 text-center text-neon-blue rounded bg-neon-green bg-opacity-20">
              {season === "S01"
                ? "Season 1"
                : season === "S02"
                ? "Season 2"
                : season === "S03"
                ? "Season 3"
                : season === "S04"
                ? "Season 4"
                : season === "S05"
                ? "Season 5"
                : null}
            </h1>
            {episodesPerSeason[season].map((episode, index) => (
              <>
                <li className="text-base pl-4 py-2 sm:py-0 sm:text-xl hover:underline list-none">
                  <Link to={`${episode.id}`}>
                    {" "}
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
