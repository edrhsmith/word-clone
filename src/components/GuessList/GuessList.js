import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";
import { range } from "../../utils";

function GuessList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} guessValue={guesses?.[index]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessList;
