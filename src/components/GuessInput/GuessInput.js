// import React from 'react';

// function GuessInput() {
//   const [guess, setGuess] = React.useEffect('');

//   function handleSubmit(event) {
//     event.preventDefault();

//     console.log({ guess })

//     setGuess('');
//   }
//   return (
//     <form className="guess-input-wrapper" >
//       <label htmlFor="guess-input">Enter guess:</label>
//       <input value={guess} onChange={(event) => {

//         const nextGuess = event.target.value.toUpperCase();
//         setGuess(nextGuess);


//         setGuess(event.target.value.toUpperCase());
//       }} id='guess-input' type='text'></input>
//     </form>
//   )
// }

// export default GuessInput;

import React, { useState } from 'react';

function GuessInput() {
  const [guess, setGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ guess });

    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;


