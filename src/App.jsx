import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to my 'Mo'kédex</h1>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
