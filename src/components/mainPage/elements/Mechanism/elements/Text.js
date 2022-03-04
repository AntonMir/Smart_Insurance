import { useState, useEffect } from 'react'
// redux
import { store } from '@store/store.js'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

export default function Text() {
    const [currentLang, setCurrentLang] = useState(localStorage.getItem('currentLang') || config.defaultLang)

    useEffect(() => {
        store.subscribe(() => {
            setCurrentLang(store.getState().pageLanguage)
        })
    }, [])

    // Русская версия сайта
    if (currentLang === 'RU') {
        return (
            <TextStyled>
                <H1>Устройство</H1>
            </TextStyled>
        )
    }

    // site language is Eng
    if (currentLang === 'EN') {
        return (
            <TextStyled>
                <H1>Our Device</H1>
            </TextStyled>
        )
    }
}

const TextStyled = styled.div``

const H1 = styled.h1`
    font-size: calc(2vw + 10px);
    margin: 0 0 40px 0;
    font-weight: bold;
    letter-spacing: -0.022em;
    color: #091f2c;

    &:first-letter {
        background: #4bcbe4;
        padding: 4px 1px 4px 12px;
        margin: 0 -1px 0 0;
    }

    @media (min-width: 1920px) {
        font-size: 48px;
    }

    @media (max-width: 1200px) {
        margin-bottom: 60px;
    }

    @media (max-width: 991px) {
        max-width: 100%;
        font-size: calc(2vw + 20px);
    }

    @media (max-width: 600px) {
        max-width: 100%;
        margin: 0 0 40px 0;
    }
`
