import React from "react";
import styles from "../../styles.module.css";
import { CountryListStyled } from "./CountryListStyled";

const CountryList = ({ countries, getCountry }) => {
  return (
    <>
      <CountryListStyled>
        <ul className="list">
          <div className="main__list__header">
            <span className="number_country__main">№</span>
            <span className="span__border__main" />
            <h2 className="country__name__main">Country</h2>
            <span className="span__border__main" />

            <h2 className="country__total_confirmed__main">Total Confirmed</h2>
          </div>

          {countries.map((item, index) => (
            <div className="main__list" onClick={() => getCountry(item)}>
              {" "}
              <span className="number_country">{index}</span>
              <span className="span__border" />
              <li className="country__name" key={item.ID}>
                {item.Country}
              </li>{" "}
              <span className="span__border" />
              <li className="country__total_confirmed"> {item.TotalConfirmed}</li>
            </div>
          ))}
        </ul>
      </CountryListStyled>
    </>
  );
};

export default CountryList;
