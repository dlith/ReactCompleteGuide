import {useState} from "react";

export default function TimeChallenge({title, targetTime}) {
  const [timerStarted, setTimeStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimeStarted(true);
  }

  function handleStop() {

  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} seconds{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>{timerStarted ? "Stop" : "Start"} Challenge</button>
      </p>
      <p className={timerStarted ? "active" : undefined}>{timerStarted ? "Time is running..." : "Timer inactive"}</p>
    </section>
  );
}
