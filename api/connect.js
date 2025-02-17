import { MongoClient } from "mongodb";
import "dotenv/config";

const URI = process.env.URI;

const client = new MongoClient(URI);

export const db = client.db("Spotify");
