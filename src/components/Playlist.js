import React, {useEffect, useState} from 'react';
import { GrFavorite } from 'react-icons/gr'
import { MdClose, MdFavorite } from 'react-icons/md'
import classnames from 'classnames';

function Playlist(props) {
    const [closePlaylist, setClosePlaylist] = useState(true)
    const {favoriteSong, songs} = props

    useEffect(() => {
        setClosePlaylist(false)
    },[props.openPlaylist])

    useEffect(() => {
        props.setOpenPlaylist(false)
    },[closePlaylist])

    return (
        <div className={classnames('playlist', { 'active': props.openPlaylist })}>
            <div className="playlist-control">
                <MdClose onClick={() => setClosePlaylist(true)}/>
            </div>
            <ul>
                {songs.map((song) => {
                    return (
                        <li key={song.trackId} className={song.trackId} onClick={() => favoriteSong(song.trackId)}>
                            <strong>{song.title}</strong> by {song.artist}
                            <span>
                                {song.favorite ?
                                    <GrFavorite /> :
                                    <MdFavorite />
                                }
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Playlist;