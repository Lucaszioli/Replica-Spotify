import React from "react";
import { ItemList } from "./ItemList";
import { artistArray } from "../db/artists";
import { songsArray } from "../db/songs";

export const Main = ({ type }) => {
  return (
    <div className="main">
      {type === "artists" || !type ? (
        <ItemList
          title="Artistas Populares"
          items={8}
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
          items={16}
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
