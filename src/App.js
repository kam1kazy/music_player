import "./styles.css";
import { useState, useEffect } from "react";
import Player from "./components/Player";

// React Icons
import { BsDot } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";

export default function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  const [songs] = useState([
    {
      title: "first order of business",
      artist: "Baby Keem",
      cover: "./assets/images/covers/baby_keem.jpeg",
      src: "./assets/music/baby_keem.mp3",
    },
    {
      title: "Dead Man Walking",
      artist: "Brent Faiyaz",
      cover: "./assets/images/covers/brent_faiyaz.jpeg",
      src: "./assets/music/brent_faiyaz.mp3"
    },
    {
      title: "A Keeper",
      artist: "Drake",
      cover: "./assets/images/covers/drake.jpeg",
      src: "./assets/music/drake.mp3"
    },
    {
      title: "4loko",
      artist: "Prison Mike",
      cover: "./assets/images/covers/prison_mike.jpeg",
      src: "./assets/music/prison_mike.mp3"
    }
  ]);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
      <div className="App">
        <div className="main">
          <div className="player">
            <div className="top-bar">
              <div>
                <RiArrowLeftSLine />
              </div>
              <div className="now-play"> Now playing </div>
              <div>
                <BsDot />
                <BsDot />
              </div>
            </div>

            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                songs={songs}
                nextSongIndex={nextSongIndex}
            />
          </div>
        </div>
      </div>
  );
}
