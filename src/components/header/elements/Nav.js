import { useState, useEffect } from 'react'
// Link
import { HashLink } from 'react-router-hash-link'
// redux
import { store } from '@store/store.js'
// config
import config from '@config/config.js'
// styles
import styled from 'styled-components'

export default function Nav() {
    const [currentLang, setCurrentLang] = useState(localStorage.getItem('currentLang') || config.defaultLang)

    useEffect(() => {
        store.subscribe(() => {
            setCurrentLang(store.getState().pageLanguage)
        })
    }, [])

    // Русская версия сайта
    if (currentLang === 'RU') {
        return (
            <NavStyled>
                <NavList>
                    <NavEl className="header-nav-el">
                        <CustomLink to="#top" smooth>
                            Умное страхование
                        </CustomLink>
                    </NavEl>
                    <NavEl className="header-nav-el">
                        <CustomLink to="#possibilities" smooth>
                            Возможности
                        </CustomLink>
                    </NavEl>
                    <NavEl className="header-nav-el">
                        <CustomLink to="#mechanism" smooth>
                            Устройство
                        </CustomLink>
                    </NavEl>
                    <NavEl className="header-nav-el">
                        <CustomLink to="#advantages" smooth>
                            Преимущества
                        </CustomLink>
                    </NavEl>
                    <NavEl className="header-nav-el">
                        <CustomLink to="#FeedbackForm" smooth>
                            Обратная связь
                        </CustomLink>
                    </NavEl>
                </NavList>
            </NavStyled>
        )
    }

    // site language is Eng
    if (currentLang === 'EN') {
        return (
            <NavStyled>
                <NavList>
                    <NavEl className="header-nav-el">
                        <CustomLink to="#top" smooth>
                            Smart Insurance
                        </CustomLink>
                    </NavEl>
                    <NavEl className="header-nav-el">
                        <CustomLink to="#possibilities" smooth>
                            Our Capabilities
                        </CustomLink>
                    </NavEl>
                    <NavEl className="header-nav-el">
                        <CustomLink to="#mechanism" smooth>
                            Our Device
                        </CustomLink>
                    </NavEl>
                    <NavEl className="header-nav-el">
                        <CustomLink to="#advantages" smooth>
                            Our Advantages
                        </CustomLink>
                    </NavEl>
                    <NavEl className="header-nav-el">
                        <CustomLink to="#FeedbackForm" smooth>
                            Contact Us
                        </CustomLink>
                    </NavEl>
                </NavList>
            </NavStyled>
        )
    }
}

const NavStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    flex: 1;

    @media (max-width: 991px) {
        margin-top: 80px;
        flex: 0;
    }
`

const NavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 991px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const NavEl = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0 10px;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    height: 80px;

    &:before,
    &:after {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        border-bottom: 7px solid #091f2c;
        content: '';
        transition: all 0.3s ease;
    }
    &:hover {
        &:before,
        &:after {
            width: 60%;
            border-bottom: 7px solid #00b5d6;
        }
        &:after {
            transform: translateX(-98%);
        }
    }

    @media (max-width: 991px) {
        margin: 0;
        height: 40px;

        &:before,
        &:after {
            display: none;
        }
    }
`

const CustomLink = styled(HashLink)`
    display: flex;
    align-items: center;
    height: 100%;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 1130px) {
        font-size: 13px;
    }

    @media (max-width: 991px) {
        color: #000;
    }
`
