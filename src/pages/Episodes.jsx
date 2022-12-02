import React, { useState, useEffect } from "react";
// import Pagination from "../components/Pagination/Pagination";

const Episodes = ({ info }) => {
  const [episodes, setEpisodes] = useState([]);
  // const [page, setPage] = useState(1);

  const api = `https://rickandmortyapi.com/api/episode`;

  useEffect(() => {
    const getEpisodes = async () => {
      const response = await fetch(api);
      const data = await response.json();

      setEpisodes(data.results);
      console.log(data.results);
    };

    getEpisodes();
  }, [api]);

  return (
    <>
      <table className="table-auto text-neon-green font-share-tech">
        <thead className="bg-neon-blue ">
          <tr>
            <th>Ep. Number</th>
            <th>Name</th>
            <th>Air date</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode, index) => (
            <tr total={51}>
              <td className="table-data">{episode.id}</td>
              <td className="table-data">{episode.name}</td>
              <td className="table-data">{episode.air_date}</td>
            </tr>
          ))}
        </tbody>
        {/* <Pagination data={data.results} page={page} setPage={setPage} /> */}
      </table>
    </>
  );
};
export default Episodes;
