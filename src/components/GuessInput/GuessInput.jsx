import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit() {
    if (tentativeGuess.length !== 5) {
      window.alert("Please enter exactly 5 characters.");
    }

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess("");
  }
  return (
    <div>
      <form action={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={(event) =>
            setTentativeGuess(event.target.value.toUpperCase())
          }
        />
      </form>
    </div>
  );
}

export default GuessInput;
