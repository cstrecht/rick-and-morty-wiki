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
        className=" mr-4 px-4 text-xs text-black bg-neon-green bg-opacity-80 rounded-lg py-1 hover:bg-neon-blue hover:text-white hover:cursor-pointer"
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
    <div className="text-neon-blue font-share-tech pl-5 bg-black mb-4 py-1">
      <div className="pl-5">
        <p>Gender:</p>
        <div>
          {gender.map((item, index) => (
            <Button
              key={index}
              index={index}
              name="status"
              task={setGender}
              updatePageNumber={setPage}
              input={item}
              className="mr-4 px-4 text-xs text-black bg-neon-green bg-opacity-80 rounded-lg py-1 hover:bg-neon-blue hover:text-white hover:cursor-pointer"
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
        <div>
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
