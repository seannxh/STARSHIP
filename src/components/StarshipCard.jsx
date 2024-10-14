import React from 'react';

function StarshipCard({ starship }) {
  return (
    <div>
      <h3>{starship.name}</h3>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost in Credits: {starship.cost_in_credits}</p>
    </div>
  );
}

export default StarshipCard;
