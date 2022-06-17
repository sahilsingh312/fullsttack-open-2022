import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import CountryInfo from "./components/CountryInfo";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const result = countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setFilteredCountries(result);
  };

  const showCountryDetails = (country) => {
    setCountryInfo(country);
    console.log(`my key is : ${process.env.REACT_APP_WEATHER_KEY}`);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      {filteredCountries.length === 1 ? (
        (console.log(filteredCountries[0]),
        (<CountryInfo country={filteredCountries[0]} />))
      ) : (
        <div>
          {" "}
          {filteredCountries.length > 10 ? (
            <p>Too many matches, specify another filter</p>
          ) : (
            <ul>
              {filteredCountries.map((country) => (
                <Country
                  country={country}
                  showCountryDetail={() => showCountryDetails(country)}
                />
              ))}
            </ul>
          )}
          {Object.keys(countryInfo).length > 0 ? (
            <CountryInfo country={countryInfo} />
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
