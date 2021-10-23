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
    showModal: false,
    number: []
  };

  componentDidMount() {
    axios.get("https://api.covid19api.com/summary").then(res => this.setState({ countries: res.data.Countries }));
    this.get();
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
  get = () => {
    const max = this.state.countries.length;

    for (let i = 1; i < max; i += 1) {
      this.setState({ number: i });
    }
  };
  render() {
    const { showModal, country } = this.state;
    return (
      <>
        {/* {this.state.countries.map(item => (
          <li>{item}</li>
        ))} */}

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
