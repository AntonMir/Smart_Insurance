import React, { useEffect, useRef, useState } from 'react'
// components
import Text from '@smartInsurance/elements/Text.js'
import IllustrationGif from '@smartInsurance/elements/IllustrationGif.js'
// styled
import styled from 'styled-components'

export default function SmartInsurance(props) {
    const smartInsuranceRef = useRef(0)
    const [smartInsuranceHeight, setSmartInsuranceHeight] = useState(0)

    useEffect(() => {
        setSmartInsuranceHeight(smartInsuranceRef.current.getBoundingClientRect().height)
        props.collbackHeight(smartInsuranceHeight)
    }, [smartInsuranceHeight, smartInsuranceRef, props])

    return (
        <SmartInsuranceStyled ref={smartInsuranceRef}>
            <Text />
            <IllustrationGif />
        </SmartInsuranceStyled>
    )
}

const SmartInsuranceStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: -30px auto -100px;
    max-width: 1440px;
    min-height: 907.30px;

    @media (max-width: 1599px) {
        max-width: 1140px;
        padding-top: 50px;
        margin: -30px auto -50px;
    }

    @media (max-width: 1200px) {
        max-width: 960px;
        padding: 60px 2% 0;
    }

    @media (max-width: 991px) {
        max-width: 750px;
        flex-direction: column;
        overflow: hidden;
        margin: -30px auto -30px;
    }

    @media (max-width: 800px) {
        padding: 60px 8% 0;
    }
`
