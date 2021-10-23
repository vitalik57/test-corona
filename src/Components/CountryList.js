import React from "react";
import styles from "../styles.module.css";

const CountryList = ({ countries, getCountry }) => {
  return (
    <>
      <ul className={styles.list}>
        <div className={styles.main__list__header}>
          <span className={styles.number_country__main}>№</span>
          <span className={styles.span__border__main} />
          <h2 className={styles.country__name__main}>Country</h2>
          <span className={styles.span__border__main} />

          <h2 className={styles.country__total_confirmed__main}>Total Confirmed</h2>
        </div>

        {countries.map((item, index) => (
          <div className={styles.main__list} onClick={() => getCountry(item)}>
            {" "}
            <span className={styles.number_country}>{index}</span>
            <span className={styles.span__border} />
            <li className={styles.country__name} key={item.ID}>
              {item.Country}
            </li>{" "}
            <span className={styles.span__border} />
            <li className={styles.country__total_confirmed}> {item.TotalConfirmed}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default CountryList;
