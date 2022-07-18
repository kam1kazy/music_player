import "./styles.css";
import { useState, useEffect } from "react";
import Player from "./components/Player";

// React Icons
import { BsDot } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import Playlist from "./components/Playlist";

import {useDispatch} from "react-redux";
import {changePropsSongInReducer } from './store/toolkitSlice'

export default function App() {
  // ID для текущего и следущего трека
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [openPlaylist, setOpenPlaylist] = useState(false)
  const dispatch = useDispatch()

  // Треклист
  const [songs, setSongs] = useState([
    {
      trackId: 1,
      title: "first order of business",
      artist: "Baby Keem",
      cover: "./assets/images/covers/baby_keem.jpeg",
      src: "/assets/music/baby_keem.mp3",
      favorite: "false"
    },
    {
      trackId: 2,
      title: "Dead Man Walking",
      artist: "Brent Faiyaz",
      cover: "./assets/images/covers/brent_faiyaz.jpeg",
      src: "./assets/music/brent_faiyaz.mp3",
      favorite: "false"
    },
    {
      trackId: 3,
      title: "A Keeper",
      artist: "Drake",
      cover: "./assets/images/covers/drake.jpeg",
      src: "./assets/music/drake.mp3",
      favorite: "false"
    },
    {
      trackId: 4,
      title: "4loko",
      artist: "Prison Mike",
      cover: "./assets/images/covers/prison_mike.jpeg",
      src: "./assets/music/prison_mike.mp3",
      favorite: "false"
    }
  ]);

  // Проверка на кол-во треков, если Индекс больше Длины массивы
  // перейти к первому треку (листает песни по кругу)
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  const favoriteSong = (id) => {
    let updatedSongs = songs.map((song) => {
      if (song.trackId === id) {
        let changeProps = {...song}
        changeProps.favorite = !changeProps.favorite
        song = changeProps
      }
      return song
    })

    dispatch(changePropsSongInReducer(updatedSongs))
    setSongs(updatedSongs)
  }

  let sortTracklist = songs.sort((a, b) => a.favorite - b.favorite)

  return (
      <div className="App">
        <div className="main">
          <div className="player">
            <div className="top-bar">
              <div>
                <RiArrowLeftSLine />
              </div>
              <div className="now-play"> Now playing </div>
              <div onClick={() => setOpenPlaylist(true)}>
                <BsDot />
                <BsDot />
              </div>
            </div>
            <Playlist
                openPlaylist={openPlaylist}
                setOpenPlaylist={setOpenPlaylist}
                favoriteSong={favoriteSong}
                songs={sortTracklist}
            />
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
