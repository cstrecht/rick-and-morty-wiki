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
        // fix this
        if (info.next !== null) {
        } else {
        }
      })
      .catch((error) => console.log(error));
  }

  //fetch data from API:
  useEffect(() => {
    loadEpisodes();
  }, []);

  return (
    <>
      <div className="mx-auto text-center text-lg w-fit text-eletric-green font-share-tech">
        {Object.keys(episodesPerSeason).map((season, key) => (
          <div className="">
            <h1 className="text-4xl pt-4">{season}</h1>
            {episodesPerSeason[season].map((episode, index) => (
              <>
                <li className="hover:underline list-none">
                  <Link to={`${episode.id}`}> {episode.name}</Link>
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
