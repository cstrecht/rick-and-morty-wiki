import React from "react";
import Gender from "./Gender";
import Species from "./Species";
import Status from "./Status";

const Filter = ({ page, setPage, setStatus, setGender, setSpecies }) => {
  const clearFilters = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPage(1);
    window.location.reload(false);
  };
  return (
    <div className="text-eletric-green bg-neon-blue">
      <h1>filters</h1>
      <button onClick={clearFilters} className="bg-black text-white">
        Clear
      </button>
      <div>
        {/* Category components will be placed here */}
        <Status setPage={setPage} setStatus={setStatus} />
      </div>
    </div>
  );
};
export default Filter;
