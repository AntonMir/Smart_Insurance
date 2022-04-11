import React, { useEffect, useState } from 'react'
// components
import SmartInsurance from '@mainPage/elements/SmartInsurance/SmartInsurance.js'
import Possibilities from '@mainPage/elements/Possibilities/Possibilities.js'
import Mechanism from '@mainPage/elements/Mechanism/Mechanism.js'
import Advantages from '@mainPage/elements/Advantages/Advantages.js'
import FeedbackForm from '@mainPage/elements/FeedbackForm/FeedbackForm.js'
import Video from '@mainPage/elements/Video.js'
// anim on scroll
import Aos from 'aos';
import 'aos/dist/aos.css'
// styled
import styled from 'styled-components'

export default function MainPage() {
    const [smartInsuranceHeight, setSmartInsuranceHeight] = useState(0) // SmartInsurance height
    const [possabilatiesHeight, setPossabilatiesHeight] = useState(0) // Possibilities height
    const [videoHeight, setVideoHeight] = useState(0) // Video height

    const [sumHeight, setSumHeight] = useState(0)

    useEffect(() => {
        // Animation in Scroll settings
        Aos.init({
            duration: 1000,
            offset: 300,
            delay: 0,
            once: true,
        });
    }, [])

    useEffect(() => {
        setSumHeight(smartInsuranceHeight + possabilatiesHeight + videoHeight)
    }, [smartInsuranceHeight, possabilatiesHeight, videoHeight])

    return (
        <Main>
            <span id="smartInsurance"></span>
            <SmartInsurance collbackHeight={setSmartInsuranceHeight} />

            <span id="video"></span>
            <Video collbackHeight={setVideoHeight} />

            <span id="possibilities"></span>
            <Possibilities collbackHeight={setPossabilatiesHeight} />

            <span id="mechanism"></span>
            <Mechanism heightBefor={sumHeight} />

            <span id="advantages"></span>
            <Advantages />

            <span id="FeedbackForm"></span>
            <FeedbackForm />
        </Main>
    )
}

const Main = styled.div`
    margin: 0 auto;
    max-width: 1920px;
`
