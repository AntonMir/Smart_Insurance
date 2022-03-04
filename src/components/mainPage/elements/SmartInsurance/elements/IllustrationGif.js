import { useState, useEffect } from 'react'
// redux
import { store } from '@store/store.js'
// config
import config from '@config/config.js'
// img
import illustrateGifRU from '@img/mainPage/smartInsurance/illustrateGifRU.gif'
import illustrateGifEN from '@img/mainPage/smartInsurance/illustrateGifEN.gif'
import illustrateEN from '@img/mainPage/smartInsurance/illustrateEN.webp'
import illustrateRU from '@img/mainPage/smartInsurance/illustrateRU.webp'
import tablet from '@img/mainPage/smartInsurance/tablet.webp'
// styled
import styled from 'styled-components'

export default function Illustration() {
    const [currentLang, setCurrentLang] = useState(localStorage.getItem('currentLang') || config.defaultLang)
    const [loadedGif, setLoadedGif] = useState(false);
    const [loadedEl, setLoadedEl] = useState(false);

    const showEL = {
        transform: 'translateX(0)',
        opacity: 1
    }

    function onLoadGif() {
        setLoadedGif(true);
    }

    function onLoadEL() {
        setLoadedEl(true);
    }

    setTimeout(onLoadEL, 500)

    useEffect(() => {
        store.subscribe(() => {
            setCurrentLang(store.getState().pageLanguage)
        })
    }, [])

    return (
        <IllustrationStyled
            // onLoad={onLoadEL}
            style={loadedEl ? showEL : {}}
        >
            <Img
                style={{ display: loadedGif ? 'block' : 'none' }}
                onLoad={onLoadGif}
                src={currentLang === 'RU' ? illustrateGifRU : illustrateGifEN}
                alt="illustrate"
            />
            {!loadedGif && <Img src={currentLang === 'RU' ? illustrateRU : illustrateEN} alt="illustrate" />}
            <Tablet
                src={tablet}
                alt="tablet"
            />
        </IllustrationStyled>
    )
}

const IllustrationStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;
    z-index: -1;
    transition: all 1.3s ease;
    transform: translateX(1100px);
    opacity: 0;
    margin-bottom: 11%;

    @media (max-width: 991px) {
        margin-bottom: 20%;
    }
`

const Img = styled.img`
    width: 100%;
    height: auto;
`

const Tablet = styled.img`
    position: absolute;
    top: 27%;
    left: 1%;
    width: 50%;
    height: auto;
    // background-color: red;
`
