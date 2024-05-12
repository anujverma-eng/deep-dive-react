import { useCallback, useEffect, useRef, useState } from "react";
function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnm";
    if (numbersAllowed) str += "1234567890";
    if (charAllowed) str += "~!@#$%^&*()";
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charAllowed, setPassword]);

  return (
    <div className="w-full text-center">
      <div className="text-center bg-slate-700 text-orange-500 w-1/2 mt-5 rounded-lg inline-block p-2">
        <h1 className="text-xl">Password Generator</h1>
        <div className="p-3 border-y-violet-300 border m-5 rounded-lg text-lg">
          <input
            className=" rounded-l-lg w-10/12 p-3"
            type="text"
            readOnly
            value={password}
            ref={passwordRef}
            placeholder="Password"
          />
          <button
            className="outline-none bg-rose-200 text-orange-700 p-3 rounded-r-lg"
            onClick={copyToClipboard}
          >
            Copy
          </button>
          <div className="flex justify-center gap-3">
            <input
              type="range"
              min={8}
              max={60}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length</label>

            <div>
              <input
                type="checkbox"
                onChange={() => setNumbersAllowed((prev) => !prev)}
              />{" "}
              <label>Numbers</label>
            </div>

            <div>
              <input
                type="checkbox"
                onChange={() => setCharAllowed((prev) => !prev)}
              />{" "}
              <label>Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
