import React from 'react';

import vinyl from "../images/vinyl.png";
import line from "../images/line.png";

function PlayerDetails(props) {
    return (
        <div className="details">

            <div className="cover">
                <img src={vinyl} className="cover-vinyl" />
                <img src={props.song.cover} className="cover-art" />
                <img src={line} className="cover-line" />
            </div>

            <div className="song-name">
                {props.song.title} <br />
                <span>{props.song.artist}</span>
            </div>

        </div>
    );
}

export default PlayerDetails;