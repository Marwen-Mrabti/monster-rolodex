import React from 'react';
import './monsterCard.scss';

const MonsterCard = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <li className="monster">
      <img
        src={`https://robohash.org/${id}?set=set2`}
        alt={`monster ${name}`}
        className="monster-img"
      />
      <h2 className="monster-name">{name} </h2>
      <p className="monster-email">{email}</p>
    </li>
  );
};

export default MonsterCard;
