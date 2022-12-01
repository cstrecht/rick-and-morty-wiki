import React from "react";

const Button = ({ input, task, setPage, index, name }) => {
  return (
    <>
      <button className="text-eletric-green">filter button</button>
      <input type="button" name={name} id={`${name}-${index}`} />
      <label
        onClick={() => {
          task(input);
          setPage(1);
        }}
        className="bg-neon-green text-neon-purple"
        for={`${name}-${index}`}
      >
        {input}
      </label>
    </>
  );
};
export default Button;
