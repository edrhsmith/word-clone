import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  console.log({ guesses });
  function registerGuess(guessString) {
    const newGuesses = [
      { id: crypto.randomUUID(), label: guessString },
      ...guesses,
    ];
    setGuesses(newGuesses);
  }
  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput registerGuess={registerGuess} />
    </>
  );
}

export default Game;
