type CounterDisplayProp = {
  counter: number;
};

const CounterDisplay = ({ counter }: CounterDisplayProp) => {
  return (
    <div>Compteur: {counter}</div>
  )
}

export default CounterDisplay;