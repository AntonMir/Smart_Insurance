import React from 'react'
// styled
import styled from 'styled-components'

export default function BlueRectangle() {
    return <BlueRectangleStyled></BlueRectangleStyled>
}

const BlueRectangleStyled = styled.div`
    position: absolute;
    left: 58%;
    height: calc(15vw + 100px);
    max-height: 350px;
    width: 100%;
    max-width: calc(20% + 310px);
    background: #0092a8;
    z-index: -1;

    @media (min-width: 1920px) {
        max-width: 600px;
        left: 58%;
    }

    @media (max-width: 1599px) {
        max-width: calc(20% + 250px);
    }

    @media (max-width: 1199px) {
        max-width: calc(20% + 200px);
    }

    @media (max-width: 991px) {
        left: 0%;
        width: 100%;
        max-width: none;
        height: calc(17vw + 100px);
        transform: translateY(600px);
    }

    @media (max-width: 600px) {
        transform: translateY(520px);
    }
`
