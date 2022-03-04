import React, { useEffect, useRef, useState } from 'react'
// video
import AVtelmaVideo720EN from '@assets/video/AVtelmaVideo720EN.m4v'
import AVtelmaVideo720RU from '@assets/video/AVtelmaVideo720RU.mp4'
import AVtelmaVideoPosterEN from '@assets/video/videoPosterEN.webp'
import AVtelmaVideoPosterRU from '@assets/video/videoPosterRU.webp'
// config
import config from '@config/config.js'
// anim on scroll
import 'aos/dist/aos.css'
// styled
import styled from 'styled-components'

export default function Video(props) {
    const videoRef = useRef(0)
    const [videoHeight, setVideoHeight] = useState(0)

    useEffect(() => {
        setVideoHeight(videoRef.current.getBoundingClientRect().height)
        props.collbackHeight(videoHeight)
    }, [videoHeight, videoRef, props])

    return (
        <VideoStyled ref={videoRef} data-aos='fade-up'>
            <video controls poster={config.defaultLang === 'RU' ? AVtelmaVideoPosterRU : AVtelmaVideoPosterEN}>
                <source src={config.defaultLang === 'RU' ? AVtelmaVideo720RU : AVtelmaVideo720EN} />
            </video>
        </VideoStyled>
    )
}

const VideoStyled = styled.div`
    margin: 100px auto 0;
    padding: 140px 0;
    display: flex;
    justify-content: center;
    background-color: #E3F4FF;

    & > video {
        width: 60%;
        height: auto;
    }

    @media (max-width: 1440px) {
        margin: 80px auto 0;
        padding: 100px 0;

        & > video {
            width: 70%;
        }

    }

    @media (max-width: 991px) {
        padding: 50px 0;

        & > video {
            width: 85%;
        }

    }
`