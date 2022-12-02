import "./App.css";
import React, { useState, useEffect } from "react";

// -- React Components: --
import Card from "./components/Card/Card";
import Filter from "./components/Filters/Filter";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";

function App() {
  // -- Search feature: --
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  // Filters:
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");

  // -- Request data from the API --
  const API_URL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  const [data, updateData] = useState([]);

  var { info, results } = data; //destructuring the info and results (comes with the api response) from the data! :D
  // The "data" variable will store the data from the API. "updateData" will change that data everytime we want.

  useEffect(() => {
    (async function () {
      var data = await fetch(API_URL).then((response) => response.json());
      updateData(data);
    })();
  }, [API_URL]);

  return (
    <div>
      <Navbar setPage={setPage} setSearch={setSearch} />
      <Filter
        page={page}
        status={status}
        species={species}
        setStatus={setStatus}
        setGender={setGender}
        setSpecies={setSpecies}
        setPage={setPage}
      />
      <Card results={results} />
      <Pagination info={info} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
