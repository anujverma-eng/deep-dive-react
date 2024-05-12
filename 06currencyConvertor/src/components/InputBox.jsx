import React from "react";

function InputBox({
  label,
  amount = 0,
  onCurrencyChange,
  currencyDisabled = false,
  currencyOptions = [],
  setSelectCurrency,
  selectedCurrency,
}) {
  return (
    <div className="flex justify-center flex-col gap-4 bg-slate-50 p-2 rounded-md drop-shadow-md mb-5">
      <div className="flex justify-between w-full text-slate-500">
        <div>{label}</div>
        <div>Currency Type</div>
      </div>
      <div className="flex justify-between w-full text-slate-700">
        <div>
          <input
            className={`p-2 bg-transparent outline-none ${
              currencyDisabled && "cursor-not-allowed"
            }`}
            type="number"
            value={amount}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(Number(e.target.value))
            }
            disabled={currencyDisabled}
          />
        </div>
        <div>
          <select
            className="p-2 bg-gray-100 cursor-pointer outline-none"
            value={selectedCurrency}
            onChange={(e) =>
              setSelectCurrency && setSelectCurrency(e.target.value)
            }
          >
            {currencyOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
