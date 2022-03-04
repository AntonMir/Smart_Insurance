import React from 'react'
// styled
import styled from 'styled-components'

export default function UserNavBar() {
    return (
        <UserNavBarWrapper>
            <ContactEl>Личный кабинет</ContactEl>
            <ContactEl>Вход</ContactEl>
            <ContactEl>Регистрация</ContactEl>
        </UserNavBarWrapper>
    )
}

const UserNavBarWrapper = styled.ul`
    display: flex;
    // display: none;
    flex-direction: column;
    margin: 0;
    opacity: 0;

    @media (max-width: 1200px) {
        display: none;
    }
`

const ContactEl = styled.li`
    color: #ccc;
    font-size: calc(0.3vw + 14px);
    line-height: 38px;
    letter-spacing: -0.02em;

    @media (min-width: 1920px) {
        font-size: 18px;
    }
`
