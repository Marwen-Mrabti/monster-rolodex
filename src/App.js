import React, { Component } from 'react';
import './App.scss';

import { MonstersList, SearchBox } from './components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchInput: '',
    };
    console.log('constructor: initial state');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            return { data: users };
          }
        )
      );
  }

  componentDidUpdate() {
    console.log('component updated');
  }

  handleOnSearch = (e) => {
    this.setState({ searchInput: e.target.value.toLowerCase() });
  };

  render() {
    console.log('render component');

    const { monsters, searchInput } = this.state;
    const { handleOnSearch } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchInput.trim())
    );

    return (
      <div className="app u-center">
        <h1 className="app__heading-primary">Monsters Rolodex</h1>
        <SearchBox searchInput={searchInput} handleOnSearch={handleOnSearch} />

        {!monsters.length ? (
          <h1>loading</h1>
        ) : (
          <MonstersList filteredMonsters={filteredMonsters} />
        )}
      </div>
    );
  }
}

export default App;
