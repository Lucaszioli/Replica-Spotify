import React from "react";
import { ItemList } from "./ItemList";
import { artistArray } from "../api.js";
import { songsArray } from "../api.js";

export const Main = ({ type }) => {
  const itemsPerRow = type
    ? Infinity
    : Math.floor((window.innerWidth - 25 * 2 - 8 * 2) / 172);

  return (
    <div className="main">
      {type === "artists" || !type ? (
        <ItemList
          title="Artistas Populares"
          items={itemsPerRow}
          itemsArray={artistArray}
          path={"/artists"}
          idPath={"/artist"}
        />
      ) : (
        <></>
      )}
      {type === "songs" || !type ? (
        <ItemList
          title="Músicas Populares"
          items={itemsPerRow * 2}
          itemsArray={songsArray}
          path={"/songs"}
          idPath={"/song"}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
