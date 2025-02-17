import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

app.get("/artists", async (req, res) =>
  res.send(await db.collection("artists").find({}).toArray())
);
app.get("/songs", async (req, res) =>
  res.send(await db.collection("songs").find({}).toArray())
);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
