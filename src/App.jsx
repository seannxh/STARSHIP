import React, { useState, useEffect } from 'react';
import { getStarships, searchStarships } from './services/starshipService';
import StarshipSearch from './components/Starshipsearch';
import StarshipList from './components/StarshipList';
import './App.css'

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStarships() {
      try {
        const data = await getStarships();
        setStarships(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchStarships();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const searchResults = await searchStarships(query);
      setStarships(searchResults);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Starship Explorer</h1>
      <StarshipSearch onSearch={handleSearch} />
      {loading ? (
        <p>Loading starships...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <StarshipList starships={starships} />
      )}
    </div>
  );
}

export default App;
