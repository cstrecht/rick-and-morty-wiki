import React, { useState } from "react";

const Button = ({ input, task, setPage, index, name }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    task(input);
    setPage(1);
    setIsActive((current) => !current);
  };
  // the buttons color is not changing idk why :/
  return (
    <>
      <input type="button" name={name} id={`${name}-${index}`} />
      <label
        onClick={handleClick}
        className={
          isActive === true
            ? "mr-4 px-4 text-xs text-eletric-green bg-neon-purple hover:cursor-pointer"
            : "mr-4 px-4 text-xs text-eletric-green bg-dark-green hover:cursor-pointer"
        }
        for={`${name}-${index}`}
      >
        {input}
      </label>
    </>
  );
};

const Filter = ({ setGender, setStatus, setSpecies, setPage }) => {
  var gender = ["Female", "Male", "Genderless", "Unknown"];
  var status = ["Alive", "Dead", "Unknown"];
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
    <div className="text-eletric-green">
      <div className="pl-5">
        <p>Gender:</p>
        <div className="">
          {gender.map((item, index) => (
            <Button
              key={index}
              index={index}
              name="status"
              task={setGender}
              updatePageNumber={setPage}
              input={item}
            />
          ))}
        </div>
      </div>
      <div className="pl-5">
        <p>Status:</p>
        <div>
          {status.map((item, index) => (
            <Button
              key={index}
              index={index}
              name="status"
              task={setStatus}
              updatePageNumber={setPage}
              input={item}
            />
          ))}
        </div>
      </div>
      <div className="pl-5">
        <p>Species:</p>
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
    </div>
  );
};
export default Filter;
