import React, { useEffect, useRef, useState } from 'react'
// video
import AVtelmaVideo720EN from '@assets/video/AVtelmaVideo720EN.m4v'
import AVtelmaVideo720RU from '@assets/video/AVtelmaVideo720RU.mp4'
// import AVtelmaVideoPosterEN from '@assets/video/videoPosterEN.webp'
// import AVtelmaVideoPosterRU from '@assets/video/videoPosterRU.webp'
// config
import config from '@config/config.js'
// anim on scroll
// import 'aos/dist/aos.css'
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
        <VideoStyled
            ref={videoRef}
        // data-aos='fade-up'
        >
            <video
                preload="auto"
                loop
                muted
                autoPlay={true}
            // poster={config.defaultLang === 'RU' ? AVtelmaVideoPosterRU : AVtelmaVideoPosterEN}
            >
                <source
                    src={config.defaultLang === 'RU' ? AVtelmaVideo720RU + '#t=2' : AVtelmaVideo720EN + '#t=2'}
                    type='video/webm'
                />
            </video>
        </VideoStyled>
    )
}

const VideoStyled = styled.div`
    margin: -80px auto 0;
    padding: 80px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: #E3F4FF;
    height: 100vh;

    & > video {
        width: auto;
        max-height: 90%;
    }

    @media (max-width: 1440px) {
        height: auto;
        padding: 100px 0;

        & > video {
            width: 70%;
        }
    }

    @media (max-width: 991px) {
        padding: 50px 0;
        margin: 0 auto;
    }
`