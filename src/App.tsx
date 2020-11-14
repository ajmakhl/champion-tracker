import React, { useState } from 'react';
import './App.css';
import ChampionSearch from './components/ChampionSearch';
import ChampionList from './components/ChampionList';
import { Champion } from './types';

function App() {
  const [search, setSearch] = useState('');

  function handleChampionClick(champion: Champion) {
    // go to next page with champion
    console.log('do something with champion: ', champion);
  }

  return (
    <div className="App">
      <ChampionSearch setSearch={setSearch} search={search} />
      <ChampionList onClick={handleChampionClick} filterChampion={search} />
    </div>
  );
}

export default App;
