import React from "react";
import { range } from "../../utils";

function Guess({ guessValue }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span className="cell" key={index}>
          {guessValue?.[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
