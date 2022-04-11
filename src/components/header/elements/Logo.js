import { useState } from 'react'
// img
import logo from '@img/header/logo.svg'
import logoBlack from '@img/header/logoBlack.svg'
// config
import config from '@config/config.js'
// redux
import { store } from '@store/store.js'
// styles
import styled from 'styled-components'

export default function Logo() {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false)
    const currentLang = localStorage.getItem('currentLang') || config.defaultLang


    store.subscribe(() => {
        setTimeout(() => {
            setBurgerMenuIsOpen(store.getState().burgerMenuIsOpen)
        }, 300)
    })

    return (
        <CustomLink href={currentLang === 'RU' ? 'https://avtelma.ru/' : 'https://avtelma.com/'} >
            <IMG src={burgerMenuIsOpen ? logoBlack : logo} alt="logo" />
        </CustomLink>
    )
}

const CustomLink = styled.a`
    flex: 0;
    display: flex;
    align-items: center;
    padding: 0;
    text-decoration: none;
    user-select: none;
    height: 80px;
    z-index: 9999;

    @media (max-width: 1200px) {
        height: 70px;
    }
    @media (max-width: 800px) {
        height: 65px;
    }
`

const IMG = styled.img`
    width: auto;
    height: 45%;
    margin-right: 10px;

    @media (max-width: 1200px) {
        height: 41%;
    }
    @media (max-width: 800px) {
        height: 38%;
    }
`
