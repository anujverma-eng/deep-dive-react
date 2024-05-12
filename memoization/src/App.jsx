import { useState } from "react";
import "./App.css";

function memoizeFn(fn) {
  var cacheObj = {};
  return async (arg) => {
    if (cacheObj[arg]) return `0 ms`;
    const result = await fn(arg);
    cacheObj[arg] = result;
    console.log(cacheObj);
    return result;
  };
}

const takeTimeFn = async (val) => {
  return new Promise((resolve) => {
    const timeStart = new Date();
    setTimeout(() => {
      const newVal = val * 1000000;
      for (let i = 0; i < newVal; i++) {}
      const timeEnd = new Date();
      resolve(`${timeEnd - timeStart}ms`);
    }, 0);
  });
};

function App() {
  const [value, setValue] = useState("");

  const takeTimeFnMemoized = memoizeFn(takeTimeFn);

  const [result, setResult] = useState("Pending");

  const generateResult = async () => {
    setResult((prev) => "loading...");
    if (value === "") return;
    const result = await takeTimeFnMemoized(value);
    setResult((prev) => result);
  };

  return (
    <>
      <h1>This is the Memoization Implementation</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button
        onClick={(e) => {
          generateResult(e);
        }}
      >
        Submit
      </button>
      <br />
      <span>Result: {result}</span>
    </>
  );
}

export default App;
