import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guessValue, answer }) {
  const checkedGuess = checkGuess(guessValue, answer);

  return (
    <p className="guess">
      {range(5).map((index) => {
        const letterStatus = checkedGuess?.[index].status;
        const className = letterStatus ? `cell ${letterStatus}` : "cell";
        return (
          <span className={className} key={index}>
            {checkedGuess?.[index].letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
