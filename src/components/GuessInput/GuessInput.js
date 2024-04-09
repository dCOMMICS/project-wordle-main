import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useEffect('');
  return (
    <form className = "guess-input-wrapper" >
      <label htmlFor="guess-input">Enter guess:</label>
      <input value={guess} onChange={(event) =>{
        setGuess(event.target.value);
      }} id='guess-input' type='text'></input>
    </form>
  )
}

export default GuessInput;
