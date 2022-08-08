import React, { Component } from 'react';
import './searchBox.scss';

export default class SearchBox extends Component {
  render() {
    const { searchInput, handleOnSearch } = this.props;
    return (
      <div className="search__box">
        <input
          className="search__box-input"
          type="search"
          name="search"
          placeholder="search..."
          value={searchInput}
          onChange={(e) => handleOnSearch(e)}
        />
      </div>
    );
  }
}
