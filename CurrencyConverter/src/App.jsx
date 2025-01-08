import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    // const signal = controller.signal;

    async function currency() {
      try {
        if (amount === 0) return;
        // const res = await fetch(
        //   `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`,
        //   { signal }
        // );
        // const data = await res.json();
        // setConvertedAmount(data);
      } catch (error) {
        if (error.name === "AbortError") console.log("abort error");
        else {
          console.error("an error occurred");
        }
      }
    }

    currency();

    return () => {
      controller.abort();
    };
  }, [amount, from, to]);

  return (
    <div>
      <span>Value : </span>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select onChange={(e) => setFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        Converted Amount : {convertedAmount ? convertedAmount : "Loading..."}
      </p>
    </div>
  );
}

export default App;
