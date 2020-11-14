import React from 'react';

interface IChampionSearch {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function ChampionSearch(props: IChampionSearch) {
  return (
    <div className="search-box">
      <input
        placeholder="Ex: Sona"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}

export default ChampionSearch;
