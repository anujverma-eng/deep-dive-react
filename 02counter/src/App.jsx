import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter((prev) => {
      return (prev += 1);
    });
  };
  const decValue = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <h1>This is the React app by Anuj : {counter}</h1>
      <h2>Counter value is: {counter}</h2>
      <button onClick={addValue}>Increment</button>{" "}
      <button onClick={decValue}>Decrement</button>
      <footer>footer val is: {counter}</footer>
    </>
  );
}

export default App;
