import React from 'react'
// styled
import styled from 'styled-components'

export default function BlueRectangle() {
    return <BlueRectangleStyled></BlueRectangleStyled>
}

const BlueRectangleStyled = styled.div`
    position: absolute;
    left: 26.5%;
    height: calc(23vw + 200px);
    width: 46.5%;
    max-height: 650px;
    background: #0092a8;
    z-index: -1;

    @media (min-width: 1920px) {
        width: 330px;
    }

    @media (max-width: 991px) {
        height: calc(15vw + 380px);
        left: 27.5%;
        width: 46%;
    }

    @media (max-width: 600px) {
        height: calc(14vw + 280px);
        transform: translateY(20px);
        left: 27%;
        width: 45%;
    }

    @media (max-width: 460px) {
        height: calc(14vw + 210px);
    }

    @media (max-width: 360px) {
        height: calc(13vw + 185px);
    }
`
