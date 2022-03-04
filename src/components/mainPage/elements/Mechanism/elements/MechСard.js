import React from 'react'
// styled
import styled from 'styled-components'

export default function MechСard(props) {
    const { el } = props

    return (
        <Mech>
            <Img src={el.img} alt="mechEl" />
            <TextWrapper>
                <H1>{el.title}</H1>
                <P>{el.text}</P>
            </TextWrapper>
        </Mech>
    )
}

const Mech = styled.div`
    position: relative;
    margin: 100px 0 0;
    padding: 4%;
    background-color: #0092a8;
    max-width: 450px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

    @media (max-width: 1200px) {
        margin: 70px auto 0;
    }

    @media (max-width: 991px) {
        margin: 50px auto 0;
    }

    @media (max-width: 800px) {
        margin: 40px auto 0;
    }

    @media (max-width: 450px) {
        margin: 40px auto 0;
    }
`

const Img = styled.img`
    position: absolute;
    left: 8%;
    transform: translateY(-160px);
    width: 84%;

    @media (max-width: 1599px) {
        transform: translateY(-130px);
    }

    @media (max-width: 1200px) {
        transform: translateY(-100px);
    }

    @media (max-width: 991px) {
        transform: translateY(-120px);
    }

    @media (max-width: 800px) {
        transform: translateY(-90px);
        left: 10%;
        width: 80%;
    }

    @media (max-width: 700px) {
        transform: translateY(-75px);
    }

    @media (max-width: 600px) {
        transform: translateY(-120px);
        left: 15%;
        width: 70%;
    }

    @media (max-width: 450px) {
        transform: translateY(-105px);
        left: 10%;
        width: 80%;
    }
`

const TextWrapper = styled.div`
    border: 1px #fff solid;
    padding: 25% 3% 3% 5%;
    height: 100%;

    @media (max-width: 450px) {
        padding: 21% 3% 3% 5%;
    }
`

const H1 = styled.h1`
    font-size: calc(0.5vw + 15px);
    font-weight: bold;
    color: #fff;
    margin-bottom: 0;

    @media (min-width: 1920px) {
        font-size: 25px;
    }

    @media (max-width: 1599px) {
        font-size: calc(0.5vw + 14px);
    }

    @media (max-width: 1200px) {
        font-size: calc(0.3vw + 20px);
    }

    @media (max-width: 991px) {
        font-size: calc(0.3vw + 16px);
    }

    @media (max-width: 450px) {
        font-size: calc(0.3vw + 20px);
        line-height: 25px;
    }
`

const P = styled.p`
    font-size: calc(0.6vw + 6px);
    color: #fff;
    font-weight: 100;
    padding-right: 10%;

    @media (min-width: 1920px) {
        font-size: 18px;
    }

    @media (max-width: 1599px) {
        font-size: calc(0.3vw + 8px);
    }

    @media (max-width: 1200px) {
        font-size: calc(0.3vw + 10px);
    }

    @media (max-width: 991px) {
        font-size: calc(0.4vw + 9px);
    }

    @media (max-width: 600px) {
        max-width: 100%;
        font-size: calc(0.4vw + 12px);
    }

    @media (max-width: 450px) {
    }
`
