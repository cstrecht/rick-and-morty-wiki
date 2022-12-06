import React from "react";
import Gender from "./Gender";
import Species from "./Species";
import Status from "./Status";

const Filter = ({
  page,
  status,
  species,
  gender,
  setPage,
  setStatus,
  setGender,
  setSpecies,
}) => {
  return (
    <div className="text-neon-green pl-5 mt-2 font-share-tech">
      <div>
        <Status
          page={page}
          status={status}
          setPage={setPage}
          setStatus={setStatus}
        />
        <Gender
          page={page}
          gender={gender}
          setPage={setPage}
          setGender={setGender}
        />
        <Species
          page={page}
          species={species}
          setPage={setPage}
          setSpecies={setSpecies}
        />
      </div>
    </div>
  );
};
export default Filter;
