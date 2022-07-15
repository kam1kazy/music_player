import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControl from "./PlayerControl";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if(isPlaying) {
        audioEl.current.play();
    } else {
        audioEl.current.play();
    }
  })

    // const SkipSong = (forwards = true) => {
    //   if (forwards) {
    //       props.setCurrentSongIndex
    //   } else {
    //
    //   }
    // }

  return (
      <div className="player-panel">
        <audio></audio>

        <PlayerDetails song={props.song}/>
        <PlayerControl />

        <p className="name-next-song"><strong>Next up:</strong> {props.nextSong.title} by {props.nextSong.artist}</p>
      </div>
  );
}

export default Player;
