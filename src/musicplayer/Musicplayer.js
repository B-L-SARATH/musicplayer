import React from "react";
import Header from "./Header";
import "./music.css";
import Player from "./Player";
import Albums from "./Albums";
import { useState } from "react";
export default function Musicplayer() {
  const [song, setsong] = useState("song1.mpeg");
  return (
    <div className="musicplayer container">
      <Header />
      <Albums updatesong={(updatedsong) => setsong(updatedsong)} />
      <Player song={song} />
    </div>
  );
}
