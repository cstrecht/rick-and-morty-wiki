import React from "react";
import Button from "./Button";

const Status = ({ page, setStatus, setPage }) => {
  var status = ["Alive", "Dead", "Unknown"];
  return (
    <>
      <div className="z-50 pl-5">
        <div className="text-eletric-green text-sm">Status:</div>
        <div className="">
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
    </>
  );
};
export default Status;
