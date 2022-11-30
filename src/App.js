import "./App.css";
import React, { useState, useEffect } from "react";

// -- React Components: --
// import Card from "./components/Card/Card";
// import Filters from "./components/Filters/Filters";
import Navbar from "./components/Navbar/Navbar";
// import Pagintion from "./components/Pagination/Pagination";
// import Search from "./components/Search/Search";

function App() {
  // -- Request data from the API --
  const API_URL = `https://rickandmortyapi.com/api/character/?page=1`;
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
    <div className="text-neon-green">
      <Navbar />
      hello
    </div>
  );
}

export default App;
