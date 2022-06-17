import React, { useEffect, useState } from "react";
import axios from "axios";

const CountryInfo = ({ country }) => {
  const weatherKey = `${process.env.REACT_APP_WEATHER_KEY}`;

  const [cityWeather, setCityWeather] = useState({});
  let compassSector = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
  ];

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${weatherKey}`
      )
      .then((res) => {
        setCityWeather(res.data);
      });
  }, []);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="flag" />
      <h2>Weather in {country.capital[0]}</h2>
      <p>
        <b>temperature:</b>{" "}
        {cityWeather.main && Math.round(cityWeather.main.temp - 273.15)} Celsius
      </p>
      <img
        src={
          cityWeather.weather &&
          `http://openweathermap.org/img/w/${cityWeather.weather[0].icon}.png`
        }
        alt="weather"
      />
      <p>
        <b>wind:</b>{" "}
        {cityWeather.wind && Math.round(cityWeather.wind.speed * 2.23694)} mph
        direction{" "}
        {cityWeather.wind &&
          compassSector[(cityWeather.wind.deg / 22.5).toFixed(0)]}
      </p>
    </div>
  );
};

export default CountryInfo;
