/* eslint-disable no-undef */
import "dotenv/config";
import axios from "axios";

const NODE_ENV = process.env.NODE_ENV;

const URL = NODE_ENV === "development" ? "http://localhost:3030" : "/api";

const responseArtist = await axios.get(`${URL}/api/artists`);
const responseSongs = await axios.get(`${URL}/api/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;
