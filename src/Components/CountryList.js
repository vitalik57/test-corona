import React from "react";
const CountryList = ({ countries, getCountry }) => {
  return (
    <>
      <ul>
        {" "}
        <h2>Country</h2>
        {countries.map(item => (
          <li onClick={() => getCountry(item)} key={item.ID}>
            {item.Country}
            <span>{item.TotalConfirmed}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CountryList;
