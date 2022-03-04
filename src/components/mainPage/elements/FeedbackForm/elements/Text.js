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
                <H1>Обратная связь</H1>
                <P>
                    Если у вас остались вопросы или предложения, вы можете нам написать и мы с удовольствие ответим на
                    ваши вопросы
                </P>
            </TextStyled>
        )
    }

    // site language is Eng
    if (currentLang === 'EN') {
        return (
            <TextStyled>
                <H1>Contact us</H1>
                <P>
                    If you have additional questions or suggestions about out product, please do not hesitate to inquire
                    by e-mail: our team of experts will answer all your questions
                </P>
            </TextStyled>
        )
    }
}

const TextStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 70%;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`

const H1 = styled.h1`
    font-size: calc(2vw + 10px);
    margin: 0 0 40px 0;
    font-weight: bold;
    line-height: 80px;
    color: #091f2c;

    &:first-letter {
        background: #4bcbe4;
        padding: 4px 1px 4px 12px;
        margin: 0 -1px 0 0;
    }

    @media (min-width: 1920px) {
        font-size: 48px;
    }

    @media (max-width: 991px) {
        margin: 0 0 10px 0;
        font-size: calc(2vw + 20px);
    }
`

const P = styled.p`
    font-size: calc(0.9vw + 9px);
    margin: 0 2vw 10px;
    letter-spacing: -0.04em;
    color: #274557;

    @media (min-width: 1920px) {
        font-size: 26px;
        margin: 0 35px 10px;
    }

    @media (max-width: 991px) {
        max-width: 100%;
        margin: 0 2vw 0;
    }
`
