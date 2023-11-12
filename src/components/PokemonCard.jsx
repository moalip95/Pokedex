import React, { useState } from 'react';
import './PokemonCard.css';
import CatchButton from './CatchButton';
import DetailsButton from './DetailsButton';
import Details from './Details';

function PokemonCard({ pokemon, updatePokemon }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleCaughtClick = () => {
    if (!pokemon.caught) {
      console.log(`Caught Pokemon ${pokemon.id}`);
      pokemon.caught = true;
      updatePokemon(pokemon.id, true);
    }
  };

  const handleDetailsClick = async () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="pokemon-card" id={`pokemon-card-${pokemon.id}`}>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image} alt={pokemon.name} />
      <CatchButton id={pokemon.id} caught={pokemon.caught} onCatchClick={handleCaughtClick} />
      <DetailsButton onClick={handleDetailsClick} />

      {showDetails && (
        <Details pokemon={pokemon} onClose={handleCloseDetails} />
      )}
    </div>
  );
}

export default PokemonCard;
