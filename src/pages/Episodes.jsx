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

  const handleClick = () => {
    window.location.reload();
  };
  return (
    <>
      <table className="table-auto mx-auto mt-12 text-neon-green font-share-tech border-spacing-4">
        <thead className="bg-neon-blue ">
          <tr>
            <th className="px-24 uppercase">Episode Number</th>
            <th className="px-24 uppercase">Name</th>
            <th className="px-24 uppercase">Air date</th>
          </tr>
        </thead>
        <tbody className="gap-x-8">
          {episodes.map((episode, index) => (
            <tr total={51}>
              <td className="table-data text-center">{episode.id}</td>
              <td className="table-data text-center hover:underline">
                {episode.name}
              </td>
              <td className="table-data text-center">{episode.air_date}</td>
            </tr>
          ))}
        </tbody>
        {/* <Pagination data={data.results} page={page} setPage={setPage} /> */}
      </table>
    </>
  );
};
export default Episodes;
