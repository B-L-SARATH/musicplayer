import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "./music.css";
import "react-h5-audio-player/lib/styles.css";
export default function Player(props) {
  return (
    <div className="player">
      <AudioPlayer
        autoPlay
        src={"../songs/" + props.song}
        onPlay={(e) => console.log("onPlay")}
        // onClickNext={(e) => console.log("next button is clicked")}
      />
    </div>
  );
}
