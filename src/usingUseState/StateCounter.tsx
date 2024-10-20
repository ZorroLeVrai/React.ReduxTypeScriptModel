import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterCommands from "./CounterCommands";

const StateCounter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(cur => cur + 1);

  const decrementCounter = () => setCounter(cur => cur - 1);

  const initCounter = () => setCounter(0);

  return (
    <div className="flexVertical">
      <CounterDisplay counter={counter} />
      <CounterCommands incrementHandler={incrementCounter} decrementHandler={decrementCounter} initHandler={initCounter} />
    </div>
  )
}

export default StateCounter;