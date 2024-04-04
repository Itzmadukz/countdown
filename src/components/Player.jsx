import { useRef, useState } from "react";

// ref solution 
export default function Player() {
  const [playerName, setPlayerName] = useState('');

  const playerNameInput = useRef();

  function handlClick() {
   setPlayerName(playerNameInput.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handlClick}>Set Name</button>
      </p>
    </section>
  );
}

// use state solution 
/* export default function Player() {
  const [playerName, setPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setPlayerName(e.target.value)
  }

  function handlClick() {
    setSubmitted(true)
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} />
        <button onClick={handlClick}>Set Name</button>
      </p>
    </section>
  );
} */


