import React, { Component } from "react";
import confirmed from "../logo/Vector1.png";
import deaths from "../logo/Vector2.png";
import recovered from "../logo/Vector3.png";

import styles from "../styles.module.css";
class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.props.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.closeModal);
  }

  render() {
    console.log(this.props.country.Country);
    return (
      <div className={styles.Overlay} onClick={this.props.closeModal}>
        <div className={styles.Modal}>
          <h2 className={styles.modal__country__name}>{this.props.country.Country}</h2>
          <ul>
            <li className={styles.modal__list}>
              <img className={styles.modal__logo} src={confirmed} alt="TotalConfirmed" />
              Total Confirmed
              <span className={styles.total__confirmed}>{this.props.country.TotalConfirmed}</span>
            </li>
            <li className={styles.modal__list}>
              <img className={styles.modal__logo} src={deaths} alt="TotalDeaths" />
              Total Deaths <span className={styles.total__death}>{this.props.country.TotalDeaths}</span>
            </li>
            <li className={styles.modal__list}>
              <img className={styles.modal__logo} src={recovered} alt="TotalRecovered" />
              Total Recovered<span className={styles.total__recovered}>{this.props.country.TotalRecovered}</span>
            </li>
            <button className={styles.modal__button}>OK</button>
          </ul>
        </div>
      </div>
    );
  }
}

export default Modal;
