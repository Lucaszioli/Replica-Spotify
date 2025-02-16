import React from "react";
import { SongItem } from "./SongItem";
import { useState } from "react";
export const SongList = ({ songArray }) => {
  let [items, setItems] = useState(5);
  return (
    <div className="song-list">
      {songArray
        .filter((song, index) => index < items)
        .map((song, index) => (
          <SongItem {...song} key={index} index={index} />
        ))}
      {items < songArray.length ? (
        <p className="song-list__see-more" onClick={() => setItems(items + 5)}>
          Ver Mais
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};
