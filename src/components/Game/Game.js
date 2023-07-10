import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList/GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import WinningBanner from "../WinningBanner/WinningBanner";
import LosingBanner from "../LosingBanner/LosingBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("in_progress");

  function isWinningGuess(tentativeGuess) {
    const checkedGuess = checkGuess(tentativeGuess, answer);
    const statusArray = checkedGuess.map((letter) => letter.status);
    return statusArray.every((value) => value === "correct");
  }

  function registerGuess(tentativeGuess) {
    const newGuesses = [...guesses, tentativeGuess];
    setGuesses(newGuesses);
    if (isWinningGuess(tentativeGuess)) {
      setGameStatus("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  const gameIsOver = gameStatus === "won" || gameStatus === "lost";

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput
        autoFocus
        disabled={gameIsOver}
        registerGuess={registerGuess}
      />
      {gameStatus === "won" && (
        <WinningBanner numberOfGuesses={guesses.length} />
      )}
      {gameStatus === "lost" && <LosingBanner correctAnswer={answer} />}
    </>
  );
}

export default Game;
