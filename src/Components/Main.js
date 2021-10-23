import axios from "axios";
import React, { Component } from "react";
import CountryList from "./CountryList";
import Filter from "./Filter";
import Modal from "./Modal";
import styles from "../styles.module.css";

class Main extends Component {
  state = {
    countries: [],
    country: {},
    inputValue: "",
    showModal: false
  };

  componentDidMount() {
    axios.get("https://api.covid19api.com/summary").then(res => this.setState({ countries: res.data.Countries }));

    //   console.log(res.data.Countries));
  }
  toogleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  getVisibleCountries = () => {
    const { countries, inputValue } = this.state;
    if (countries.length) {
      return countries.filter(country => country.Country.toLowerCase().includes(inputValue.toLowerCase()));
    }
  };
  getCountry = country => {
    this.setState({
      country: country
    });
    this.toogleModal();
  };
  render() {
    const { showModal, country } = this.state;
    return (
      <>
        <div className={styles.container}>
          {" "}
          {/* <input type="text" name="inputValue" value={this.state.inputValue} onChange={this.handleChange} /> */}
          <Filter handleChange={this.handleChange} />
          MAin page
          {this.state.countries.length ? (
            <CountryList countries={this.getVisibleCountries()} toogleModal={this.toogleModal} getCountry={this.getCountry} />
          ) : (
            <p>There are no countries here</p>
          )}
          {showModal && <Modal closeModal={this.toogleModal} country={country} />}
        </div>
      </>
    );
  }
}

export default Main;
