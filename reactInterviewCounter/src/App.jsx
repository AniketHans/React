import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1); //1
    setCounter(counter + 1); //2
    setCounter(counter + 1); //3
    setCounter(counter + 1); //4
    setCounter(counter + 1); //5

    //Here the counter will updated only once as fibre will sent the above setCounter() calls in batches and thus sees that same
    //work is being done so skip the updations from 1-4 and runs the 5th updation only
  };

  const removeCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const incrementByFive = () => {
    setCounter((prevCounterValue) => prevCounterValue + 1); //1
    setCounter((prevCounterValue) => prevCounterValue + 1); //2
    setCounter((prevCounterValue) => prevCounterValue + 1); //3
    setCounter((prevCounterValue) => prevCounterValue + 1); //4
    setCounter((prevCounterValue) => prevCounterValue + 1); //5
  };

  return (
    <>
      <h1>Counter:{counter}</h1>
      <button onClick={addCounter}>Increment</button>
      <br />
      <br />
      <button onClick={removeCounter}>Decrement</button>
      <br />
      <br />
      <button onClick={incrementByFive}>Increment 5</button>
    </>
  );
}

export default App;
