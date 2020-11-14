import React from 'react';
import { Champion } from '../types';
import { champions } from '../champions';

interface IChampionList {
  filterChampion: string;
  onClick: (champion: Champion) => any;
}

function ChampionList(props: IChampionList) {
  const championList: Champion[] = champions;
  return (
    <div className="champion-list">
      {championList
        .filter((champion) => {
          const name = champion.name.toLowerCase();
          const filtered = props.filterChampion;
          return name.includes(filtered);
        })
        .map((champion) => {
          return (
            <div className="champion" key={champion.name} onClick={() => props.onClick(champion)}>
              <img src={`./champion/${champion.img}`} />
              <span>{champion.name}</span>
            </div>
          );
        })}
    </div>
  );
}

export default ChampionList;
