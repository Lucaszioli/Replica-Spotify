import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const formatTime = (timeS) => {
  const minutes = Math.floor(timeS / 60);
  const seconds = Math.floor(timeS % 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const TimeinSeconds = (timeString) => {
  const [minutes, seconds] = timeString.split(":");
  return parseInt(minutes) * 60 + parseInt(seconds);
};

export const Player = ({ duration, songsArray, audio }) => {
  const audioPlayer = useRef();
  const playerBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const durationInSeconds = TimeinSeconds(duration);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };

  const resetMusic = () => {
    audioPlayer.current.load();
    setIsPlaying(false);
    setCurrentTime(0);
    playerBar.current.style.setProperty("--_progress", `0%`);
  };
  const randomIdFromArtist =
    songsArray[Math.floor(Math.random() * (songsArray.length - 1))]._id;
  const randomIdFromArtist2 =
    songsArray[Math.floor(Math.random() * (songsArray.length - 1))]._id;
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(audioPlayer.current.currentTime);
        playerBar.current.style.setProperty(
          "--_progress",
          `${(currentTime / durationInSeconds) * 100}%`
        );
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying, currentTime, durationInSeconds]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon
            className="player__icon"
            icon={faBackwardStep}
            onClick={resetMusic}
          />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={playPause}
        />
        <Link to={`/song/${randomIdFromArtist2}`}>
          <FontAwesomeIcon
            className="player__icon"
            icon={faForwardStep}
            onClick={resetMusic}
          />
        </Link>
      </div>
      <div className="player__progress">
        <p className="player__time">{formatTime(currentTime)}</p>
        <div className="player__bar">
          <div ref={playerBar} className="player__bar-progress"></div>
        </div>
        <p className="player__time">{duration}</p>
      </div>
      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};
