import React, { Component } from 'react';
import './monstersList.scss';

import MonsterCard from './MonsterCard';

class MonstersList extends Component {
  render() {
    const { filteredMonsters } = this.props;

    return (
      <ul className="monsters__list">
        {filteredMonsters.map((monster) => (
          <MonsterCard key={monster.id} monster={monster} />
        ))}
      </ul>
    );
  }
}

export default MonstersList;
