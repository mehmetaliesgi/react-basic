import CountryInfo from "./CountryInfo";
import "../css/countryInformation.css";

function CountryInformation() {
  return (
    <div className="countryDiv">
      <div className="countryElements">
        <input
          className="countryInput"
          type="text"
          placeholder="Enter a country name"
        />
        <button className="countryButton">Search</button>
      </div>
      <div className="result">
        <CountryInfo />
      </div>
    </div>
  );
}

export default CountryInformation;
