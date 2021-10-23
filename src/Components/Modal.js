import React, { Component } from "react";

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
          <h2>{this.props.country.Country}</h2>
          <ul>
            <li>Total Confirmed{this.props.country.TotalConfirmed}</li>
            <li>Total Deaths{this.props.country.TotalDeaths}</li>
            <li>Total Recovered{this.props.country.TotalRecovered}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Modal;
