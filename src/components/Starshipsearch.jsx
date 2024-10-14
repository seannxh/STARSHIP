import React, { useState } from 'react';

function StarshipSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a starship..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default StarshipSearch;
