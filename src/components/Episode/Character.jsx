import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Fill the characters that participated in that episode
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
      <li>{character.name}</li>
    </Link>
  );
};

export default Character;
