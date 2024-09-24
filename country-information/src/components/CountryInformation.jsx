import CountryInfo from "./CountryInfo";
import "../css/countryInformation.css";
import { useState } from "react";

function CountryInformation() {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState("");

  const searchCountry = () => {
    if (!countryName) {
      setError("You can't empty this area!");
      setCountryData(null);
      return;
    }
    const URL = `https://restcountries.com/v3.1/name/${countryName.trim()}?fullText=true`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Not Found") {
          setError("Country Information is not Found");
          setCountryData(null);
        } else if (data.length === 0) {
          setError("Please enter valid country name!");
          setCountryData(null);
        } else {
          setError("");
          setCountryData(data[0]);
        }
      })
      .catch(() => {
        setError("An error occurred while fetching data.");
        setCountryData(null);
      });
  };

  return (
    <div className="countryDiv">
      <div className="countryElements">
        <input
          className="countryInput"
          type="text"
          placeholder="Enter a country name"
          value={countryName}
          onChange={(e) => {
            setCountryName(e.target.value);
          }}
        />
        <button className="countryButton" onClick={searchCountry}>
          Search
        </button>
      </div>
      <div className="result">
        {error && <h3>{error}</h3>}
        {countryData && <CountryInfo countryData={countryData} />}
      </div>
    </div>
  );
}

export default CountryInformation;
