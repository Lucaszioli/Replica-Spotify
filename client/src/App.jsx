import React from "react";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Artist } from "./Pages/Artist";
import { Songs } from "./Pages/Songs";
import { Song } from "./Pages/Song";
import { Artists } from "./Pages/Artists";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/artists" element={<Artists />}></Route>
        <Route path="/artist/:id" element={<Artist />}></Route>
        <Route path="/songs" element={<Songs />}></Route>
        <Route path="/song/:id" element={<Song />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
