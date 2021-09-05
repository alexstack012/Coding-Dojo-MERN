import React from 'react';

import './App.css';
import Pokemon from './components/Pokemon'
import PokemonAxios from './components/PokemonAxios';

function App() {
  return (
    <div className="App">
      <Pokemon />
      <PokemonAxios />
    </div>
  );
}

export default App;
