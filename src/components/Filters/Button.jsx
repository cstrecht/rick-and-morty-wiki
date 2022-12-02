import React, { useState } from "react";

const Button = ({ input, task, setPage, index, name }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    task(input);
    setPage(1);
    setIsActive((current) => !current);
    //event.currentTarget.classList.toggle("bg-neon-green");
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
export default Button;
