import { useState, useEffect } from 'react'
// redux
import { store } from '@store/store.js'
// config
import config from '@config/config.js'
// Link
import { HashLink } from 'react-router-hash-link'
// styled
import styled from 'styled-components'

export default function MainNavBar() {
    const [currentLang, setCurrentLang] = useState(localStorage.getItem('currentLang') || config.defaultLang)

    useEffect(() => {
        store.subscribe(() => {
            setCurrentLang(store.getState().pageLanguage)
        })
    }, [])

    // Русская версия сайта
    if (currentLang === 'RU') {
        return (
            <MainNavBarStyled>
                <ContactEl to="#top" smooth>
                    Умное страхование
                </ContactEl>
                <ContactEl to="#possibilities" smooth>
                    Возможности
                </ContactEl>
                <ContactEl to="#mechanism" smooth>
                    Устройство
                </ContactEl>
                <ContactEl to="#advantages" smooth>
                    Преимущества
                </ContactEl>
                <ContactEl to="#FeedbackForm" smooth>
                    Обратная связь
                </ContactEl>
            </MainNavBarStyled>
        )
    }

    // site language is Eng
    if (currentLang === 'EN') {
        return (
            <MainNavBarStyled>
                <ContactEl to="#top" smooth>
                    Smart Insurance
                </ContactEl>
                <ContactEl to="#possibilities" smooth>
                    Our Capabilities
                </ContactEl>
                <ContactEl to="#mechanism" smooth>
                    Our Device
                </ContactEl>
                <ContactEl to="#advantages" smooth>
                    Our Advantages
                </ContactEl>
                <ContactEl to="#FeedbackForm" smooth>
                    Contact Us
                </ContactEl>
            </MainNavBarStyled>
        )
    }
}

const MainNavBarStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;

    @media (max-width: 450px) {
        margin-bottom: 50px;
    }
`

const ContactEl = styled(HashLink)`
    color: #ccc;
    font-size: calc(0.3vw + 14px);

    line-height: 38px;
    letter-spacing: -0.02em;

    @media (min-width: 1920px) {
        font-size: 18px;
    }
`
