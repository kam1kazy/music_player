import React from "react";
import play from "../assets/images/play.png";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";

function Controls(props) {

    return (
        <div className="control">
            {/* Управление проигрывателем */}
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                <GiPreviousButton />
            </button>
            <button className="play-btn" onClick={props.togglePlay}>
                <img src={play} alt="Play" />
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                <GiNextButton />
            </button>
        </div>
    );
}

export default Controls;
