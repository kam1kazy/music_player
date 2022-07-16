import React, { useEffect, useRef } from 'react'
import WaveSurfer from 'wavesurfer.js'
import Controls from "./Controls"

const Waveform = (props) => {
    const containerRef = useRef()

    // Создает ссылку на Waveform и ставит трек на пузу
    const waveSurferRef = useRef({
        isPlaying: () => false
    })

    //  Waveform
    useEffect(() => {
        // Инициализирует плагин
        const waveSurfer = WaveSurfer.create({
            container: containerRef.current,
            height: 50
        })
        // Загружаем трек в плагин
        waveSurfer.load(props.audio)
        waveSurfer.on('ready', () => {
            waveSurferRef.current = waveSurfer
        })

        return () => {
            waveSurfer.destroy()
        }
    }, [props.audio])


    // - Старт/Пауза трека
    const togglePlay = () => {
        waveSurferRef.current.playPause()
    }

    return (
        <>
            <div className="wafetimeline" ref={containerRef} />

            <Controls
                togglePlay={togglePlay}
                SkipSong={props.SkipSong}
            />
        </>
    )
}
export default Waveform