import React from "react";
import "../css/currency.css";
import { FaArrowRightLong } from "react-icons/fa6";

function Currency() {
  return (
    <>
      <div className="currency-background">
        <div className="currency-div">
          <div className="currency-header">
            <h3>Döziv Çevirme Uygulaması</h3>
          </div>
          <div className="currency-content">
            <input type="number" className="amount" />
            <select className="from-currency-option">
              <option value="">USD</option>
              <option value="">EUR</option>
              <option value="">TL</option>
            </select>

            <FaArrowRightLong style={{ fontSize: "30px" }} />

            <select className="to-currency-option">
              <option value="">TL</option>
              <option value="">EUR</option>
              <option value="">USD</option>
            </select>
            <input type="number" className="result" />
          </div>
          <div>
            <button className="currency-button">Çevir</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Currency;
