import "./styles.css";
import { useState, useEffect } from "react";
import Player from "./components/Player";

// React Icons
import { BsDot } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";

export default function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex+1);

  const [songs] = useState([
    {
      title: "first order of business",
      artist: "Baby Keem",
      cover: "./assets/images/covers/baby_keem.jpeg",
      src: "./assets/music/baby_keem.mp3"
    },
    {
      title: "Dead Man Walking",
      artist: "Brent Faiyaz",
      cover: "./assets/images/covers/brent_faiyaz.jpeg",
      src: "./assets/music/brent_faiyaz.mp3"
    },
  ]);

  useEffect(() => {
    setCurrentSongIndex(() => {
      if(currentSongIndex + 1 > songs.length -1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex])

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
              song={songs}
              nextSongIndex={nextSongIndex}
          />

        </div>
      </div>
    </div>
  );
}
