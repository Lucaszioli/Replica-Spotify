import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Player = ({ duration, songsArray }) => {
  console.log(songsArray);
  const randomIdFromArtist =
    songsArray[Math.floor(Math.random() * (songsArray.length - 1))]._id;
  const randomIdFromArtist2 =
    songsArray[Math.floor(Math.random() * (songsArray.length - 1))]._id;
  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={faCirclePlay}
        />
        <Link to={`/song/${randomIdFromArtist2}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p className="playe__time">00:00</p>
        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>
        <p className="player__time">{duration}</p>
      </div>
    </div>
  );
};
