import React from 'react';
import StarshipCard from './StarshipCard';

function StarshipList({ starships }) {
  return (
    <div>
      {starships.length === 0 ? (
        <p>No starships found.</p>
      ) : (
        starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))
      )}
    </div>
  );
}

export default StarshipList;
