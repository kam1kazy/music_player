import React from "react";
import line from "../assets/images/line.png";

function Details(props) {
    return (
        // Оформление для обложки
        <div className="details">
            <div className="cover">
                <img
                    src={props.song.cover}
                    className="cover-art"
                    alt={props.song.title}
                />
                <img src={line} className="cover-line" alt="" />
            </div>

            <div className="song-name">
                {props.song.title} <br />
                <span>{props.song.artist}</span>
            </div>
        </div>
    );
}

export default Details;
