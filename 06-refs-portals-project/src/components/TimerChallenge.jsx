import {useRef, useState} from "react";
import ResultModale from "./ResultModule";

export default function TimeChallenge({title, targetTime}) {
  const [timeRemainig, setTimeRemainig] = useState(targetTime * 1000);
  const timerIsActive = timeRemainig > 0 && timeRemainig < targetTime * 1000;
  const timer = useRef();
  const dialog = useRef();

  if (timeRemainig <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemainig(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemainig((prevTimeRemainig) => prevTimeRemainig - 10);
    }, 10);
    setTimeStarted(true);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModale ref={dialog} targetTime={targetTime} remainigTime={timeRemainig} onReset={handleReset} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} seconds{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
