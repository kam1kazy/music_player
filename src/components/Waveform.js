import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import WaveSurfer from 'wavesurfer.js'
import Controls from "./Controls"

const Waveform = (props) => {
    const containerRef = useRef()

    // Создает ссылку на Waveform и ставит трек на паузу
    const waveSurferRef = useRef({
        isPlaying: () => false
    })

    // - Старт/Пауза трека
    const togglePlay = () => {
        waveSurferRef.current.playPause()
    }

    useEffect(() => {
        // Инициализирует плагин
        const waveSurfer = WaveSurfer.create({
            // При помощи ссылки из Ref выбираем блок
            container: containerRef.current,
            height: 50
        })

        // Загружаем трек в плагин
        waveSurfer.on('ready', () => {
            waveSurferRef.current = waveSurfer
        })
        waveSurfer.load(props.audio)

        return () => {
            waveSurfer.destroy()
        }
    }, [props.audio])

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

Waveform.propTypes = {
    audio: PropTypes.string.isRequired,
}

export default Waveform
