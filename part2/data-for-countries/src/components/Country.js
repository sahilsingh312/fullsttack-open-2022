import React from "react";

const Country = ({ country, showCountryDetail }) => {
  return (
    <div>
      {country.name.common} <button onClick={showCountryDetail}>show</button>
    </div>
  );
};

export default Country;
