import { CounterAction, CounterActionType } from "./reducer";

type CounterCommandsProp = {
  dispatchHandler: React.Dispatch<CounterAction>;
}

const CounterCommands = ({ dispatchHandler }: CounterCommandsProp) => {
  return (
    <div>
      <button className="sideMargin1" onClick={() => dispatchHandler({ type: CounterActionType.INCREMENT })}>+</button>
      <button className="sideMargin1" onClick={() => dispatchHandler({ type: CounterActionType.DECREMENT })}>-</button>
      <button className="sideMargin1" onClick={() => dispatchHandler({ type: CounterActionType.INIT })}>0</button>
    </div>
  )
}

export default CounterCommands;