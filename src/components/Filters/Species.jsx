import React from "react";
import Button from "./Button";

const Status = ({ page, setSpecies, setPage }) => {
  var species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
  ];
  return (
    <>
      <div className="pl-5">
        <div className="text-eletric-green text-sm">Species:</div>
        <div className="">
          {species.map((item, index) => (
            <Button
              key={index}
              index={index}
              name="status"
              task={setSpecies}
              updatePageNumber={setPage}
              input={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Status;
