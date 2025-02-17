import React from "react";
import { Link } from "react-router-dom";
export const SongItem = ({ image, name, duration, _id, index }) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number__album">
        <p className="song-item__number">{index + 1}</p>
        <div className="song-item__album">
          <img
            className="song-item__image"
            src={image}
            alt={`Imagem da música ${name}`}
          ></img>
          <p className="song-item__name">{name}</p>
        </div>
      </div>
      <p> {duration} </p>
    </Link>
  );
};
