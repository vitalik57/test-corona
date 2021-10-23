import React from "react";
import logoCorona from "../logo/logo.png";
import logoSearch from "../logo/Vector.png";
import styles from "../styles.module.css";

const Filter = ({ handleChange }) => {
  return (
    <>
      {" "}
      <div className={styles.filter__header}>
        <div className={styles.filter__logo}>
          <img width="200px" height="200px" src={logoCorona} alt="logo" />
          <h1 className={styles.statistcic}>STATISTIC</h1>
        </div>
        <span className={styles.input__search}>
          {" "}
          <input
            className={styles.input__filter}
            placeholder="Search..."
            type="text"
            name="inputValue"
            onChange={handleChange}
          />
          <img width="30px" height="30px" className={styles.input__search__logo} src={logoSearch} alt="logoSearch" />
        </span>
      </div>
    </>
  );
};

export default Filter;
