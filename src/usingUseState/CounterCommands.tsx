type CounterCommandsProp = {
  incrementHandler: () => void;
  decrementHandler: () => void;
  initHandler: () => void;
}

const CounterCommands = ({ incrementHandler, decrementHandler, initHandler }: CounterCommandsProp) => {
  return (
    <div>
      <button className="sideMargin1" onClick={incrementHandler}>+</button>
      <button className="sideMargin1" onClick={decrementHandler}>-</button>
      <button className="sideMargin1" onClick={initHandler}>0</button>
    </div>
  )
}

export default CounterCommands;