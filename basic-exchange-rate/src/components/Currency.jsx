import React, { useState } from "react";
import "../css/currency.css";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
const apiKey = import.meta.env.VITE_API_KEY;

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const response = await client.get(`${apiKey}/latest/${fromCurrency}`);

    const resultValue = (
      response.data.conversion_rates[toCurrency] * Number(amount)
    ).toFixed(2);
    setResult(resultValue);
  };

  return (
    <>
      <div className="currency-background">
        <div className="currency-div">
          <div className="currency-header">
            <h3>Döziv Çevirme Uygulaması</h3>
          </div>
          <div className="currency-content">
            <input
              type="number"
              className="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <select
              className="from-currency-option"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="TRY">TRY</option>
            </select>

            <FaArrowRightLong style={{ fontSize: "13px" }} />

            <select
              className="to-currency-option"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="TRY">TRY</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
            <input
              type="number"
              className="result"
              value={result}
              onChange={(e) => setResult(e.target.value)}
            />
          </div>
          <div>
            <button className="currency-button" onClick={exchange}>
              Çevir
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Currency;
