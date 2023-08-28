import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

export default function Item(props) {
  console.log(props.source);
  return (
    <div className="card">
      <img
        src={props.source}
        alt="img"
        style={{ width: "200px", height: "150px" }}
      />
      <div onClick={() =>props.passingsong(props.song)}>
        <PlayCircleFilledIcon />
      </div>
    </div>
  );
}

//flow of logic

// we are passing a function a to the album where we need send the song name to the album herre
// it will change the state of the song.but to send the particular clicked song we have to send the
// function from album to item .in the item when the song is clicked we have to call it.so it calls the album function
