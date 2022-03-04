import { useState, useEffect } from 'react'
// redux
import { store } from '@store/store.js'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

export default function Text() {
    const [currentLang, setCurrentLang] = useState(localStorage.getItem('currentLang') || config.defaultLang)
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
        store.subscribe(() => {
            setCurrentLang(store.getState().pageLanguage)
        })
    }, [])

    // Русская версия сайта
    if (currentLang === 'RU') {
        return (
            <TextStyled
                style={loadedEl ? showEL : {}}
            >
                <H1>
                    <span>У</span>мное страхование
                    <br />
                    <Slogan>
                        <SloganEl>Прозрачность для клиентов.&nbsp;</SloganEl>
                        <SloganEl>Простота и экономия для бизнеса</SloganEl>
                    </Slogan>
                </H1>
                <P>
                    Устройство позволяет страховым компаниям предоставлять клиентам скидки на КАСКО по параметрам -
                    стиль вождения, пробег, сезонность.
                </P>
                <br />
                <P>
                    Позволяет использовать варианты страховки по принципу ”Pay as you go” без установки дорогостоящего
                    дополнительного оборудования в автомобиль.
                </P>
                <br />
                <P>
                    Вся обработка данных, а также их передача в страховую компанию в защищенном режиме производится с
                    помощью смартфона водителя.
                </P>
            </TextStyled>
        )
    }

    // site language is Eng
    if (currentLang === 'EN') {
        return (
            <TextStyled
                // onLoad={onLoadEL}
                style={loadedEl ? showEL : {}}
            >
                <H1>
                    Smart insurance
                    <br />
                    <Slogan>
                        <SloganEl>Transparency for clients,&nbsp;</SloganEl>
                        <SloganEl>Simplicity and Savings for business</SloganEl>
                    </Slogan>
                </H1>
                <P>
                    Our device allows insurance companies to provide discounts for clients with Comprehensive Coverage
                    according to their personal characteristics, such as: driving habits, mileage, seasonality.
                </P>
                <br />
                <P>
                    It allows to use the pay-as-you-go payment model for insurance policies without the need to install
                    high-cost equipment in the car.
                </P>
                <br />
                <P>All the data processing and transfer is carried out in a secure mode via the driver’ smartphone.</P>
            </TextStyled>
        )
    }
}

const TextStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 45%;
    margin-top: -50px;
    transition: all 1.3s ease;
    transform: translateX(-900px);
    opacity: 0;

    @media (max-width: 991px) {
        max-width: 100%;
        margin-top: 0;
    }
`

const H1 = styled.h1`
    font-size: calc(2vw + 10px);
    margin: 0 0 40px 0;
    font-weight: bold;
    line-height: 60px;
    letter-spacing: -0.022em;
    color: #091f2c;

    &:first-letter {
        background: #4bcbe4;
        padding: 4px 1px 4px 12px;
        margin: 0 -1px 0 0;
    }

    @media (min-width: 1920px) {
        font-size: 48px;
    }

    @media (max-width: 991px) {
        max-width: 100%;
        margin: 20px 0;
        font-size: calc(2vw + 20px);
        line-height: 40px;
    }

    @media (max-width: 600px) {
        max-width: 100%;
        margin: 20px 0 20px;
    }
`

const Slogan = styled.div`
    display: flex;
    font-size: calc(0.6vw + 7px);
    letter-spacing: -0.04em;
    margin: 0 0 0 1em;
    line-height: 30px;
    color: #274557;
    white-space: nowrap;
    font-weight: bold;

    @media (min-width: 1920px) {
        font-size: 18px;
    }

    @media (max-width: 991px) {
        max-width: 100%;
    }

    @media (max-width: 600px) {
        font-size: 12px;
        display: block;
        line-height: 5px;
        white-space: normal;
    }
`

const SloganEl = styled.p``

const P = styled.p`
    font-size: calc(0.9vw + 9px);
    letter-spacing: -0.04em;
    margin: 0 2vw 10px;
    color: #274557;

    @media (min-width: 1920px) {
        font-size: 26px;
        margin: 0 35px 10px;
    }

    @media (max-width: 1599px) {
        max-width: 100%;
        font-size: calc(0.8vw + 9px);
        margin: 0 2vw 0;
    }

    @media (max-width: 991px) {
        font-size: calc(0.9vw + 9px);
        max-width: 100%;
        margin: 0 2vw 0;
    }
`
