import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("olive");
  const changeColor = (e) => {
    const targetElement = e.target;
    if (targetElement.type === "button") {
      const bg = targetElement.className
        .toString()
        .split(" ")
        .find((c) => c.includes("bg-"));

      setBgColor(bg.split("-")[1]);
    }
  };
  return (
    <div className="w-full h-screen" style={{ backgroundColor: bgColor }}>
      <div
        className="fixed gap-2 flex flex-wrap bottom-10 justify-center inset-x-0 p-2 rounded-3xl shadow-lg bg-white"
        onClick={(e) => changeColor(e)}
      >
        <button
          type="button"
          className="rounded text-white px-3 py-2 outline-none bg-red-500"
        >
          Red
        </button>
        <button
          type="button"
          className="rounded text-white px-3 py-2 outline-none bg-blue-500"
        >
          Blue
        </button>
        <button
          type="button"
          className="rounded text-white px-3 py-2 outline-none bg-yellow-500"
        >
          Yellow
        </button>
        <button
          type="button"
          className="rounded text-white px-3 py-2 outline-none bg-black"
        >
          Black
        </button>
        <button
          type="button"
          className="rounded text-white px-3 py-2 outline-none bg-purple-500"
        >
          Purple
        </button>
        <button
          type="button"
          className="rounded text-white px-3 py-2 outline-none bg-red-500"
        >
          Red
        </button>
      </div>
    </div>
  );
}

export default App;
