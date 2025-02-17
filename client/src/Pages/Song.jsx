import React from "react";
import { Player } from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../api.js";
import { artistArray } from "../api.js";
export const Song = () => {
  const id = useParams().id;
  const song = songsArray.find((song) => song._id == id);
  // console.log(songsArray);
  const artist = artistArray.find((artist) => artist.name == song.artist);
  const songsFromArtist = songsArray.filter(
    (song) => song.artist == artist.name && song._id != id
  );
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            width={300}
            height={300}
            src={song.image}
            alt={`Imagem da musica ${song.name}`}
          />
        </div>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
          <Link to={`/artist/${artist._id}`}>
            <img
              width={75}
              height={75}
              src={artist.image}
              alt={`Imagem do artista ${song.artist}`}
            />
          </Link>
        </div>
        <Player
          duration={song.duration}
          songsArray={songsFromArtist}
          audio={song.audio}
        />
        <div>
          <p className="song__name">{song.name}</p>
          <p>{song.artist}</p>
        </div>
      </div>
    </div>
  );
};
