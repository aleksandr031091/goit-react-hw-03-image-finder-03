import React, { Component } from "react";

import css from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchQuery: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.searchQuery}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
