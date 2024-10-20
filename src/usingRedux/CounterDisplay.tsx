import { useSelector } from "react-redux";
import { IRootState } from "../store";

const CounterDisplay = () => {
  const counter = useSelector((state: IRootState) => state.counter.value);

  return (
    <div>Compteur: {counter}</div>
  )
}

export default CounterDisplay;