import React from "react";
import logoCorona from "../../logo/logo.png";
import logoSearch from "../../logo/Vector.png";
import styles from "../../styles.module.css";
import { FilterStyled } from "./FilterStyled";

const Filter = ({ handleChange }) => {
  return (
    <>
      <FilterStyled>
        {" "}
        <div className="filter__header">
          <div className="filter__logo">
            <img width="150px" height="150px" src={logoCorona} alt="logo" />
            <h1 className="statistcic">STATISTIC</h1>
          </div>
          <span className="input__search">
            {" "}
            <input className="input__filter" placeholder="Search..." type="text" name="inputValue" onChange={handleChange} />
            <img width="30px" height="30px" className="input__search__logo" src={logoSearch} alt="logoSearch" />
          </span>
        </div>
      </FilterStyled>
    </>
  );
};

export default Filter;
