import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ guessValue, answer }) {
  const checkedGuess = checkGuess(guessValue, answer);

  return (
    <p className="guess">
      {range(5).map((index) => {
        return <Cell key={index} {...checkedGuess?.[index]} />;
      })}
    </p>
  );
}

export default Guess;
