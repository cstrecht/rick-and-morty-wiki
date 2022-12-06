import React from "react";
import Button from "./Button";

const Status = ({ page, setGender, setPage }) => {
  var gender = ["Female", "Male", "Genderless", "Unknown"];
  return (
    <>
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
    </>
  );
};
export default Status;
