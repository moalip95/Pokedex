import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {
    const fetchPokemonData = async () => {
      const promises = [];
      for (let i = 1; i <= 152; i++) {
        const pokemonResponse = fetch(`${apiUrl}${i}`).then((response) => response.json());

        promises.push(
          pokemonResponse.then((pokemonData) => ({
            name: pokemonData.name,
            id: pokemonData.id,
            image: pokemonData.sprites.front_default,
            caught: false,
            nickname: "",
            detailsUrl: pokemonData.species.url,
          }))
        );
      }

      try {
        const data = await Promise.all(promises);
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  const updatePokemonStatus = (id, caught) => {
    setPokemonData((prevData) =>
      prevData.map((pokemon) => {
        if (pokemon.id === id) {
          console.log(`Updating Pokemon ${id}: caught = ${caught}`);
          return { ...pokemon, caught };
        } else {
          return pokemon;
        }
      })
    );
  };
  

  return (
    <div>
      <h2>Pokédex</h2>
      <div className="pokemon-container">
        {pokemonData.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            updatePokemon={updatePokemonStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
