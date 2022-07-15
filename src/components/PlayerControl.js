import React from 'react';
import play from '../images/play.png'
import { GiNextButton, GiPreviousButton } from 'react-icons/gi'
import { IoShuffleSharp } from "react-icons/io";
import { BsArrowRepeat } from "react-icons/bs";

function PlayerControl(props) {
    return (
        <div className="control">
            <button className="skip-btn">
                <GiPreviousButton />
            </button>
            <button className="play-btn">
                <img src={play} alt="Play"/>
            </button>
            <button className="skip-btn">
                <GiNextButton />
            </button>
        </div>
    );
}

export default PlayerControl;