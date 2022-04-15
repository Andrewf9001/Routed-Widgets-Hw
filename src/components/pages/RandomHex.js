import { useState } from "react";

import { numberLetters } from "../helpers/helperArrays";

const RandomHex = () => {
  const [hexColor, setHexColor] = useState("");
  const count = 6;

  const mapRandomHex = () => {
    let ranHex = "";

    for (let i = 0; i < count; i++) {
      let randomChars =
        numberLetters[Math.floor(Math.random() * numberLetters.length)];

      ranHex += randomChars;
    }
    setHexColor(ranHex);
  };

  return (
    <div className="random-hex-container">
      <h1>#{hexColor}</h1>
      <button onClick={mapRandomHex}>Randomize!</button>
    </div>
  );
};

export default RandomHex;
