import React from 'react';

function GuessInput() {
  return (
    <form className = "guess-input-wrapper" >
      <label htmlFor="guess-input">Enter guess:</label>
      <input id='guess-input' type='text'></input>
    </form>
  )
}

export default GuessInput;
