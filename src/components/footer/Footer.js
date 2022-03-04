import React from 'react'
// img
import logoGif from '@img/footer/logoGif.gif'
// components
import Logo from '@footer/elements/Logo.js'
import Contacts from '@footer/elements/Contacts.js'
import MainNavBar from '@footer/elements/MainNavBar.js'
import UserNavBar from '@footer/elements/UserNavBar.js'
// styled
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterStyled>
            <Logo />
            <NavBarWrapper>
                <MainNavBar />
                <Contacts />
            </NavBarWrapper>

            <ContactsWrapper>
                <Img src={logoGif} alt="logoGif" />
                <UserNavBar />
            </ContactsWrapper>
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #002c33;
    margin-top: 0;
    padding: 5% 5% 5% 6%;

    @media (max-width: 1200px) {
        flex-direction: column;
        padding: 8% 5% 2% 6%;
    }

    // @media (max-width: 991px) {
    //     margin-top: 1100px;
    // }

    // @media (max-width: 600px) {
    //     margin-top: 800px;
    // }

    // @media (max-width: 450px) {
    //     margin-top: 700px;
    // }

    // @media (max-width: 400px) {
    //     margin-top: 550px;
    // }
`

const NavBarWrapper = styled.span`
    display: flex;
    // justify-content: space-around;
    justify-content: space-evenly;
    flex: 1;

    @media (max-width: 1200px) {
        margin: 70px;
    }

    @media (max-width: 600px) {
        margin: 50px 10px 50px 35px;
    }

    @media (max-width: 450px) {
        margin: 50px 0 50px 45px;
        flex-direction: column;
        // align-items: center;
    }

    @media (max-width: 350px) {
        margin: 50px 0 50px 20px;
        flex-direction: column;
        // align-items: center;
    }
`
const ContactsWrapper = styled.span`
    display: flex;
    justify-content: space-around;
    // flex: 1;

    @media (max-width: 1200px) {
        margin: 0 70px 70px;
    }

    @media (max-width: 600px) {
        margin: 0 0 50px;
    }

    // @media (max-width: 450px) {
    //     margin: 0 20px 50px 35px;
    // }

    // @media (max-width: 350px) {
    //     margin: 0 0 50px 0;
    // }
`

const Img = styled.img`
    width: auto;
    height: 150px;

    @media (max-width: 450px) {
        height: 100px;
    }
`
