import React, { useState, useEffect } from 'react'
// components
import Logo from '@header/elements/Logo.js'
import Nav from '@header/elements/Nav.js'
import LanguageChanger from '@header/elements/LangChanger.js'
// import RequestDemo from '@header/elements/RequestDemo.js'
// import Search from '@header/elements/Search.js'
import BurgerBtn from '@header/elements/BurgerBtn.js'
// redux
import { store } from '@store/store.js'
// img
import wave from '@img/header/wave.svg'
// styles
import styled from 'styled-components'

const visible = {
    height: '100vh',
    opacity: '1',
}

export default function Header() {

    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false)
    const [loadedEl, setLoadedEl] = useState(false);

    const showEL = {
        transform: 'translateX(0)',
        opacity: 1
    }

    function onLoadEL() {
        setLoadedEl(true);
    }

    setTimeout(onLoadEL, 500)

    useEffect(() => {
        let isMounted = true
        store.subscribe(() => {
            if (isMounted) {
                setBurgerMenuIsOpen(store.getState().burgerMenuIsOpen)
            }
        })
        return () => {
            isMounted = false
        }
    }, [])

    return (
        <HeaderStyled style={loadedEl ? showEL : {}}>
            <HeaderElWrapper>
                <Logo />
                <HeaderPopUpWrapper style={burgerMenuIsOpen ? visible : {}}>
                    <Nav />
                    <LanguageChanger />
                    {/* <SignIn /> */}
                    {/* <RequestDemo /> */}
                    {/* <Search /> */}
                </HeaderPopUpWrapper>
                <BurgerBtn />
            </HeaderElWrapper>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
    margin: 0;
    padding: 0;
    background-color: #091f2c;
    transition: all 1.3s ease;
    transform: translateY(-50px);
    opacity: 0;
`

const HeaderElWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 1599px) {
        max-width: 1140px;
    }
    @media (max-width: 1200px) {
        max-width: 960px;
        padding: 0 2%;
    }
    @media (max-width: 991px) {
        max-width: 750px;
    }
    @media (max-width: 800px) {
        padding: 0 8%;
    }
`

const HeaderPopUpWrapper = styled.div`
    display: flex;
    align-items: center;
    // justify-content: flex-end;
    justify-content: space-around;
    flex: 1;
    height: 100%;
    transition: height 0.3s ease-out, opacity 0.5s ease-out;

    @media (max-width: 991px) {
        position: absolute;
        top: 0;
        left: 0;
        flex-direction: column;
        justify-content: flex-start;
        overflow: auto;
        background-color: #fff;
        width: 100vw;
        height: 0;
        opacity: 0;
        background-image: url(${wave}) !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        background-size: 100% auto !important;
    }
`
