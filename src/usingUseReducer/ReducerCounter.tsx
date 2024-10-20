import { useReducer } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterCommands from "./CounterCommands";
import { reducer } from "./reducer";

const ReducerCounter = () => {
  const [counterState, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div className="flexVertical">
      <CounterDisplay counter={counterState.counter} />
      <CounterCommands dispatchHandler={dispatch} />
    </div>
  )
}

export default ReducerCounter;