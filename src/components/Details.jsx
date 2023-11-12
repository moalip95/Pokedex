import React, { useState, useEffect } from 'react';
import './Details.css';

function Details({ pokemon, onClose }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
        const data = await response.json();

        setPokemonDetails({
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          type: data.types && data.types[0].type.name,
          abilities: data.abilities && data.abilities[0].ability.name,
        });
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchDetails();
  }, [pokemon.id]);

  return (
    <div className="details-popup">
      <div className="details-content">
        <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
        <h2>{pokemon.name}</h2>
        <h4>Details</h4>
        <ul>
          {pokemonDetails && (
            <>
              <li>
                <strong>ID:</strong> {pokemonDetails.id}
              </li>
              <li>
                <strong>Name:</strong> {pokemonDetails.name}
              </li>
              <li>
                <strong>Height:</strong> {pokemonDetails.height}
              </li>
              <li>
                <strong>Weight:</strong> {pokemonDetails.weight}
              </li>
              <li>
                <strong>Type:</strong> {pokemonDetails.type}
              </li>
              <li>
                <strong>Abilities:</strong> {pokemonDetails.abilities}
              </li>
            </>
          )}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Details;
