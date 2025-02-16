import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { SongList } from "../components/SongList";
import { artistArray } from "../db/artists";
import { songsArray } from "../db/songs";
export const Artist = () => {
  const id = useParams().id;

  const artist = artistArray.find((artist) => artist.id == id);

  const songsFromArtist = songsArray.filter(
    (song) => song.artist == artist.name
  );

  const randomIdFromArtist =
    songsFromArtist[Math.floor(Math.random() * (songsFromArtist.length - 1))]
      .id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artist.banner})`,
        }}
      >
        <h2 className="artist__title">{artist.name}</h2>
      </div>
      <div className="artist__body">
        <h2> Populares </h2>
        <SongList songArray={songsFromArtist} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};
