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
    <div className="text-eletric-green">
      <button onClick={() => navigate(-1)}>go back</button>
      <div>hello character</div>
      <h1>name: {name}</h1>
      <img src={image} alt="character face" />
      <p>gender: {gender}</p>
      <p>location: {location?.name}</p>
      <p>origin: {origin?.name}</p>
      <p>status: {status}</p>
      <p>species: {species}</p>
      <p>subspecies: {type ? type : "No subspecies"}</p>
      <p>Episodes participated: </p>
      <p>created at: {created}</p>
      {/* Episodes participated with links here */}
    </div>
  );
};
export default CardDetails;
