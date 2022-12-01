import React from "react";
import Button from "./Button";

const Status = ({ setStatus, setPage }) => {
  var status = ["Alive", "Dead", "Unknown"];
  return (
    <>
      <h2>
        <button>Status</button>
      </h2>
      <div className="bg-neon-green z-50">
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
