import { db } from "./connect.js";
import { artistArray } from "./db/artists.js";
import { songsArray } from "./db/songs.js";

const newSongArray = songsArray.map((song) => {
  const newSong = { ...song };
  delete newSong.id;

  return newSong;
});

const result2 = await db
  .collection("songs")
  .insertMany(newSongArray, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Songs inserted");
    }
  });
