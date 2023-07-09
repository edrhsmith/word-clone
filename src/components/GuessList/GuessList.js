import React from "react";

function GuessList({ guesses }) {
  console.log({ guesses });
  return (
    <div className="guess-results">
      {guesses.map(({ id, label }) => (
        <p className="guess" id={id}>
          {label}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
