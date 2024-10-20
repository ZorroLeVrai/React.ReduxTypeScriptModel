import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { decrement, increment, init } from "../slices/counterSlice";

const CounterCommands = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <button className="sideMargin1" onClick={() => dispatch(increment())}>+</button>
      <button className="sideMargin1" onClick={() => dispatch(decrement())}>-</button>
      <button className="sideMargin1" onClick={() => dispatch(init())}>0</button>
    </div>
  )
}

export default CounterCommands;