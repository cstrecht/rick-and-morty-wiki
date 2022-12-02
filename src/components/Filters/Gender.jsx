import React from "react";
import Button from "./Button";

const Status = ({ page, setGender, setPage }) => {
  var gender = ["Female", "Male", "Genderless", "Unknown"];
  return (
    <>
      <div className=" z-50 pl-5">
        <div className="text-eletric-green text-sm">Gender:</div>
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
