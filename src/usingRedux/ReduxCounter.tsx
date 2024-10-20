import CounterCommands from "./CounterCommands";
import CounterDisplay from "./CounterDisplay";

const ReduxCounter = () => {
  return (
    <div className="flexVertical">
      <CounterDisplay />
      <CounterCommands />
    </div>
  )
}

export default ReduxCounter;