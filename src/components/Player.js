import React from "react";
import Details from "./Details";
import Waveform from './Waveform'

function Player(props) {

    // Переключает трек по ID
    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    };

    return (
        <div className="player-panel">
            <Details song={props.songs[props.currentSongIndex]} />

            <Waveform
                audio={props.songs[props.currentSongIndex].src}
                SkipSong={SkipSong}
            />

            <p className="name-next-song">
                <strong>Next up:</strong> {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}
            </p>
        </div>
    );
}

export default Player;
