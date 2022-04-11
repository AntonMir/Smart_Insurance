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
    const [loadedPH, setLoadedPH] = useState(false);
    const [loadedEl, setLoadedEl] = useState(false);

    const showEL = {
        transform: 'translateX(0)',
        opacity: 1
    }

    function onLoadGif() {
        setLoadedGif(true);
    }

    function onLoadPH() {
        setLoadedPH(true);
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
            style={loadedEl ? showEL : {}}
        >
            <Img
                style={{ display: loadedGif ? 'block' : 'none' }}
                onLoad={onLoadGif}
                src={currentLang === 'RU' ? illustrateGifRU : illustrateGifEN}
                alt="illustrate"
            />
            {!loadedGif &&
                <Img
                    onLoad={onLoadPH}
                    src={currentLang === 'RU' ? illustrateRU : illustrateEN}
                    alt="illustrate"
                />
            }
            <Tablet
                style={{ bottom: loadedPH || loadedGif ? '-18%' : '-80%' }}
                src={tablet}
                alt="tablet"
                loadedGif={loadedGif}
                loadedPH={loadedPH}
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
    min-height: 400px;

    @media (max-width: 1599px) {
        min-height: 330px;
    }

    @media (max-width: 1200px) {
        min-height: 230px;
    }

    @media (max-width: 991px) {
        margin-bottom: 20%;
        min-height: 200px;
    }

    @media (max-width: 800px) {
        min-height: none;
    }

`

const Img = styled.img`
    width: 100%;
    height: auto;

    @media (max-width: 991px) {
        height: 100%;
        margin: auto 0;
    }
`

const Tablet = styled.img`
    position: absolute;
    left: 7%;
    width: 35%;
    height: auto;
`
