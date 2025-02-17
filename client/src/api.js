import axios from "axios";

// const URL = "http://localhost:3030/api";
const URL = "https://replica-spotify-txra.onrender.com/api";

const responseArtist = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;
