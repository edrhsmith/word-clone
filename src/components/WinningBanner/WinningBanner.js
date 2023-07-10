import React from "react";

function WinningBanner({ numberOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> You got it in{" "}
        <strong>{`${numberOfGuesses} guesses`}</strong>.
      </p>
    </div>
  );
}

export default WinningBanner;
