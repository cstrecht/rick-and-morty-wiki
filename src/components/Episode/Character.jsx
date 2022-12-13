import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Character = ({ apiUrl }) => {
  const [character, setCharacter] = useState({});

  async function loadCharacter() {
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("API error");
      })
      .then((character) => setCharacter(character))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadCharacter();
  }, []);

  return (
    <Link to={`/character/${character.id}`}>
      <li className="underline text-neon-green pb-1 hover:text-white">
        {character.name}
      </li>
    </Link>
  );
};
export default Character;
