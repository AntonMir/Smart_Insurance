import React from 'react'
// styled
import styled from 'styled-components'

export default function BlueRectangle() {
    return <BlueRectangleStyled></BlueRectangleStyled>
}

const BlueRectangleStyled = styled.div`
    position: absolute;
    left: 7%;
    top: 40%;
    height: 45%;
    width: 86%;
    background: #0092a8;
    z-index: -1;

    @media (max-width: 991px) {
        display: none;
    }
`
