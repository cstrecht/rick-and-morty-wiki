import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CardDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [fetchData, setFetchData] = useState([]);
  const {
    name,
    location,
    origin,
    gender,
    image,
    status,
    species,
    type,
    created,
    episode,
  } = fetchData;

  const api = `https://rickandmortyapi.com/api/character/${id}`;
  console.log(episode);

  //fetch data from API:
  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((response) => response.json());
      setFetchData(data);
    })();
  }, [api]);

  return (
    <div className="font-share-tech py-4 px-8 overflow-hidden">
      <button
        onClick={() => navigate(-1)}
        className="bg-dark-green border border-neon-green text-neon-green text-md font-share-tech rounded-md py-1 px-2 uppercase active:text-white hover:cursor-pointer hover:underline"
      >
        ← go back
      </button>
      <div className=" mx-auto  bg-neon-blue bg-opacity-30 w-fit rounded-xl border-8 border-neon-green mt-3">
        <h1 className="bg-neon-green text-center text-4xl py-2">
          Character ID
        </h1>
        <div className="flex">
          <div>
            <img src={image} alt="character face" />
          </div>
          <div className="p-4 text-xl tracking-wide text-neon-blue">
            <h1>
              Name: <span className="text-neon-green">{name}</span>
            </h1>
            <p>
              Gender: <span className="text-neon-green">{gender}</span>
            </p>
            <p>
              From: <span className="text-neon-green">{location?.name}</span>
            </p>
            <p>
              Origin:
              <span className="text-neon-green">
                {origin?.name === "unknown" ? "Unknown" : origin?.name}
              </span>
            </p>
            <p>
              Status: <span className="text-neon-green">{status}</span>
            </p>
            <p>
              Species: <span className="text-neon-green">{species}</span>
            </p>
            <p>
              Subspecies:
              <span className="text-neon-green">
                {type ? type : "No subspecies"}
              </span>
            </p>
            <p>
              Created at <span className="text-neon-green"> {created}</span>
            </p>

            <p>
              Episodes participated:
              <span className="text-neon-green">
                {/* Episodes participated with links here */}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardDetails;
