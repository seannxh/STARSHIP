// src/services/starshipService.js

const BASE_URL = 'https://swapi.dev/api/starships/';

export const getStarships = async () => {
    try {
        const response = await fetch(BASE_URL)

        if(!response) {
            throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json();
        return data.results;
    }catch(error){
        console.log("Failed to reach Starships", error)

    }
}
export const searchStarships = async (query) => {
    try{
        const response = await fetch(BASE_URL)

        if(!response){
            throw new Error(`Error: ${response.statsu}`)
        }
        const data = await response.json();
        return data.results.filter(starship => starship.name.toLowerCase().includes(query.toLowerCase()))
    }catch(error){
        console.log(`Error Search StarShips`, error());
        throw error
    }
}