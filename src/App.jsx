import Player from './components/Player.jsx';
import TimerChallenger from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallenger title='Easy' targetTime={1} />
      <TimerChallenger title='Not Easy' targetTime={5} />
      <TimerChallenger title='Getting tough' targetTime={10} />
      <TimerChallenger title='Pros Only' targetTime={15} />
    </>
  );
}

export default App;
