import express, { response } from "express";
import cors from "cors";
import { db } from "./connect.js";
import "dotenv/config";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.use(cors());

app.get("/api/artists", async (req, res) =>
  res.send(await db.collection("artists").find({}).toArray())
);
app.get("/api/songs", async (req, res) =>
  res.send(await db.collection("songs").find({}).toArray())
);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(3030, () => {
  console.log("Server is running on port " + process.env.PORT);
});
