import React from "react";

const Button = ({ input, task, setPage, index, name }) => {
  return (
    <>
      <input type="button" name={name} id={`${name}-${index}`} />
      <label
        onClick={() => {
          task(input);
          setPage(1);
        }}
        className="mr-4 px-4 text-xs text-eletric-green hover:cursor-pointer border border-eletric-green active:text-black hover:bg-neon-blue hover:text-black"
        for={`${name}-${index}`}
      >
        {input}
      </label>
    </>
  );
};
export default Button;
