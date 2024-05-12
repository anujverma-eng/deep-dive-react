import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";
import { useState } from "react";

function App() {
  const [fromCurrencyAmt, setFromCurrencyAmt] = useState(0);
  const [toCurrencyAmt, setToCurrencyAmt] = useState(0);

  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo);

  const convertCurrency = () => {
    setToCurrencyAmt(fromCurrencyAmt * Number(currencyInfo[toCurrency]));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromCurrencyAmt(toCurrencyAmt);
    setToCurrencyAmt(fromCurrencyAmt);
  };

  return (
    <div
      className="w-full h-screen bg-fixed bg-center bg-cover bg-no-repeat flex justify-center"
      style={{
        alignItems: "center",
        backgroundImage:
          "url(https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
      }}
    >
      <div className="rounded-md shadow-md backdrop-blur-sm bg-white/30 border border-white w-1/2 py-10 px-8">
        <InputBox
          label={"From"}
          amount={fromCurrencyAmt}
          onCurrencyChange={setFromCurrencyAmt}
          currencyOptions={currencyOptions}
          setSelectCurrency={setFromCurrency}
          selectedCurrency={fromCurrency}
        />
        <div className="w-full flex justify-center relative">
          <button
            className="bg-blue-600 text-white p-2 text-lg rounded-md drop-shadow-md absolute -top-8 z-50"
            onClick={swapCurrencies}
          >
            ↑ Swap ↓
          </button>
        </div>
        <InputBox
          label={"To"}
          amount={toCurrencyAmt}
          onCurrencyChange={setToCurrencyAmt}
          currencyDisabled
          currencyOptions={currencyOptions}
          setSelectCurrency={setToCurrency}
          selectedCurrency={toCurrency}
        />
        <button
          className="w-full bg-blue-600 text-white p-2 text-lg rounded-md drop-shadow-md"
          onClick={convertCurrency}
        >
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
