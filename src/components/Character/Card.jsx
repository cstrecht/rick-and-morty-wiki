import React from "react";
import { Link } from "react-router-dom";

// WTF do I do with this...
const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((cardInfo) => {
      let { id, image, name, status, location, species } = cardInfo;
      return (
        <Link to={`${page}/${id}`}>
          <div key={id}>
            <div className="w-60 h-[385px] mb-8 mx-auto bg-dark-green overflow-hidden text-eletric-green font-share-tech shadow-lg tracking-wide">
              <img className="w-60" src={image} alt="Character face" />
              <div className="px-2 pt-2 pb-3 text-xl uppercase">{name}</div>
              <div className="px-2 pb-2">
                <span className="inline-block text-xs font-semibold text-gray-700">
                  STATUS:{" "}
                  {status === "Dead" ? (
                    <span className="line-through">{status}</span>
                  ) : (
                    <span className="no-underline">{status}</span>
                  )}
                </span>
                <br />
                <span className="inline-block text-xs font-semibold text-gray-700">
                  SPECIES: {species}
                </span>
                <span className="inline-block text-xs font-semibold text-gray-700">
                  FROM: {location.name}
                </span>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = (
      <div className="text-neon-blue text-center font-share-tech">
        Oops! No characters were found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 mt-12 md:grid-cols-4 lg:grid-cols-4">
      {display}
    </div>
  );
};
export default Card;
//
