import React from "react";

const Button = ({ input, task, setPage, index, name }) => {
  const handleClick = () => {
    task(input);
    setPage(1);
  };
  return (
    <>
      <input type="button" name={name} id={`${name}-${index}`} />
      <label
        onClick={handleClick}
        className="mr-4 px-4 text-xs text-black bg-neon-green bg-opacity-80 rounded-lg py-1 hover:bg-neon-blue hover:text-white hover:cursor-pointer"
        htmlFor={`${name}-${index}`}
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
    "Alien",
    "Animal",
    "Cronenberg",
    "Disease",
    "Human",
    "Humanoid",
    "Mythological",
    "Poopybutthole",
    "Robot",
    "Unknown",
  ];

  return (
    <div className="text-neon-blue font-share-tech pl-5 bg-black mb-4 py-1">
      <div className="pl-5">
        <p>Gender:</p>
        <div>
          {gender.map((item, index) => (
            <Button
              className="mr-4 px-4 text-xs text-black bg-neon-green bg-opacity-80 rounded-lg py-1 hover:bg-neon-blue hover:text-white hover:cursor-pointer"
              index={index}
              input={item}
              key={index}
              name="status"
              task={setGender}
              updatePageNumber={setPage}
            />
          ))}
        </div>
      </div>
      <div className="pl-5">
        <p>Status:</p>
        <div>
          {status.map((item, index) => (
            <Button
              index={index}
              input={item}
              key={index}
              name="status"
              task={setStatus}
              updatePageNumber={setPage}
            />
          ))}
        </div>
      </div>
      <div className="pl-5">
        <p>Species:</p>
        <div>
          {species.map((item, index) => (
            <Button
              index={index}
              input={item}
              key={index}
              name="status"
              task={setSpecies}
              updatePageNumber={setPage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Filter;
