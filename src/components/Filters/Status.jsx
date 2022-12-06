import React from "react";
import Button from "./Button";

const Status = ({ page, setStatus, setPage }) => {
  var status = ["Alive", "Dead", "Unknown"];
  return (
    <>
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
    </>
  );
};
export default Status;
