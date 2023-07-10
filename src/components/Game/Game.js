import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList/GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function registerGuess(tentativeGuess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert(`Only ${NUM_OF_GUESSES_ALLOWED} guesses are allowed!`);
      return;
    }
    const newGuesses = [...guesses, tentativeGuess];
    setGuesses(newGuesses);
  }
  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput registerGuess={registerGuess} />
    </>
  );
}

export default Game;
