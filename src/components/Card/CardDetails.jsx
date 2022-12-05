import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CardDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [fetchData, setFetchData] = useState([]);
  const { name, location, origin, gender, image, status, species } = fetchData;

  const api = `https://rickandmortyapi.com/api/character/${id}`;

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
      <h1>{name}</h1>
      <img src={image} alt="character face" />
      <p>{gender}</p>
      <p>{location?.name}</p>
      <p>{origin?.name}</p>
      <p>{status}</p>
      <p>{species}</p>
    </div>
  );
};
export default CardDetails;
