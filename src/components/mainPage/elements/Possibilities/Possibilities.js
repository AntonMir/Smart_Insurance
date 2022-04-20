import { useState, useEffect, useRef } from 'react'
// redux
import { store } from '@store/store.js'
// config
import config from '@config/config.js'
//carousel
import Carousel from 'react-elastic-carousel'
// components
import BlueRectangle from '@possibilities/elements/BlueRectangle.js'
// anim on scroll
import 'aos/dist/aos.css'
// Img
import iPhoneImg from '@assets/img/mainPage/possibilities/iPhone.webp'
import Screen1RU from '@assets/img/mainPage/possibilities/1RU.webp'
import Screen2RU from '@assets/img/mainPage/possibilities/2RU.webp'
import Screen3RU from '@assets/img/mainPage/possibilities/3RU.webp'
import Screen4RU from '@assets/img/mainPage/possibilities/4RU.webp'
import Screen1EN from '@assets/img/mainPage/possibilities/1EN.webp'
import Screen2EN from '@assets/img/mainPage/possibilities/2EN.webp'
import Screen3EN from '@assets/img/mainPage/possibilities/3EN.webp'
import Screen4EN from '@assets/img/mainPage/possibilities/4EN.webp'
import MobHeader from '@assets/img/mainPage/possibilities/MobHeader.png'
// styled
import styled from 'styled-components'
import './possibilities.scss'

const textRU = [
    {
        title: `Возможности`,
    },
    {
        title: `Запоминает каждую поездку`,
        text: `Каждый раз когда устройство регистрирует новую поездку – оно запоминает его во внутренней памяти`,
    },
    {
        title: `Сохраняет результаты в облаке`,
        text: `Попав с устройства в телефон, каждая поездка загружается в облачный сервис на учетную запись конкретного клиента`,
    },
    {
        title: `Анализирует поведение на дороге`,
        text: `Каждая поездка подвергается тщательному анализу, оценивая поведение водителя на дороге`,
    },
    {
        title: `Ни одна поездка не пропадёт`,
        text: `Внутренней памяти устройства хватит на десятки поездок без их передачи на телефон водителя`,
    },
]

const textEN = [
    {
        title: `Our Capabilities`,
    },
    {
        title: `Every ride is stored`,
        text: `Each time the device is registering a new ride data, it is stored in a FLASH memory area`,
    },
    {
        title: `All the data is uploading automatically to cloud storage`,
        text: `After data is transferred from the device to smartphone, 
            every ride’s data is uploading to client’s personal cloud storage, linked to his account`,
    },
    {
        title: `Analyzes the driver's behavior on the road`,
        text: `The data for each ride is reviewed by an algorithm that analyzes the client’s driving style`,
    },
    {
        title: `No data will go to waste`,
        text: `The device’s internal memory is more than enough to store dozens of rides without 
            any data loss in case the driver wouldn’t have his phone in possession`,
    },
]

export default function Possibilities(props) {
    // get our component
    const possibilitiesRef = useRef(0)

    // get carousel
    const carouselRef = useRef(0)

    // carousel settings
    const carousel = carouselRef.current
    const carouselSpeed = 4000

    // component's height
    const [possibilitiesHeight, setPossibilitiesHeight] = useState(0)

    // selected text and selected slide
    const [selectedOption, setSelectedOption] = useState(0)

    // autoplay slider
    const [autoPlay, setAutoPlay] = useState(true)

    // save language state
    const [currentLang, setCurrentLang] = useState(localStorage.getItem('currentLang') || config.defaultLang)
    const langText = currentLang === 'RU' ? textRU : textEN

    useEffect(() => {
        // change Language
        store.subscribe(() => {
            setCurrentLang(store.getState().pageLanguage)
        })
    }, [])

    useEffect(() => {
        // save component's height to state
        setPossibilitiesHeight(possibilitiesRef.current.getBoundingClientRect().height)

        // sand component's height to parent
        props.collbackHeight(possibilitiesHeight)
    }, [possibilitiesHeight, possibilitiesRef, props])

    return (
        <PossibilitiesStyled
            ref={possibilitiesRef}
            data-aos='fade-up'
            data-aos-anchor-placement="top-center"
        >
            <TextStyled>
                <H1>
                    {langText[0].title}
                </H1>
                <Ul
                    onMouseEnter={() => {
                        setAutoPlay(false)
                    }}
                    onMouseLeave={() => {
                        setAutoPlay(true)
                    }}
                >
                    <Li
                        onMouseEnter={() => {
                            setSelectedOption(0)
                            carousel.goTo(0)
                        }}
                    >
                        <Title>
                            <H2>
                                {langText[1].title}
                                <Border style={selectedOption === 0 ? { opacity: 1 } : {}}></Border>
                            </H2>
                        </Title>
                        <P style={selectedOption === 0 ? { opacity: 1, marginTop: 0, lineHeight: 1.5 } : {}}>
                            {langText[1].text}
                        </P>
                    </Li>

                    <Li
                        onMouseEnter={() => {
                            setSelectedOption(1)
                            carousel.goTo(1)
                        }}
                    >
                        <Title>
                            <H2>
                                {langText[2].title}
                                <Border style={selectedOption === 1 ? { opacity: 1 } : {}}></Border>
                            </H2>
                        </Title>
                        <P style={selectedOption === 1 ? { opacity: 1, marginTop: 0, lineHeight: 1.5 } : {}}>
                            {langText[2].text}
                        </P>
                    </Li>

                    <Li
                        onMouseEnter={() => {
                            setSelectedOption(2)
                            carousel.goTo(2)
                        }}
                    >
                        <Title>
                            <H2>
                                {langText[3].title}
                                <Border style={selectedOption === 2 ? { opacity: 1 } : {}}></Border>
                            </H2>
                        </Title>
                        <P style={selectedOption === 2 ? { opacity: 1, marginTop: 0, lineHeight: 1.5 } : {}}>
                            {langText[3].text}
                        </P>
                    </Li>

                    <Li
                        onMouseEnter={() => {
                            setSelectedOption(3)
                            carousel.goTo(3)
                        }}
                    >
                        <Title>
                            <H2>
                                {langText[4].title}
                                <Border style={selectedOption === 3 ? { opacity: 1 } : {}}></Border>
                            </H2>
                        </Title>
                        <P style={selectedOption === 3 ? { opacity: 1, marginTop: 0, lineHeight: 1.5 } : {}}>
                            {langText[4].text}
                        </P>
                    </Li>
                </Ul>
            </TextStyled>
            <IPhoneWrapper
                onMouseEnter={() => {
                    setAutoPlay(false)
                }}
                onMouseLeave={() => {
                    setAutoPlay(true)
                }}
            >
                <MobHeaderImg loading='lazy' src={MobHeader}></MobHeaderImg>
                <IPhone
                    ref={carouselRef}
                    onChange={(currentItem, pageIndex) => {
                        setSelectedOption(pageIndex)
                        if (pageIndex === 3 && autoPlay) {
                            setTimeout(() => {
                                carousel.goTo(0)
                            }, [carouselSpeed])
                        }
                    }}
                    enableAutoPlay={autoPlay}
                    autoPlaySpeed={carouselSpeed}
                >
                    <Img src={currentLang === 'RU' ? Screen1RU : Screen1EN} alt="screen" />
                    <Img src={currentLang === 'RU' ? Screen2RU : Screen2EN} alt="screen" />
                    <Img src={currentLang === 'RU' ? Screen3RU : Screen3EN} alt="screen" />
                    <Img src={currentLang === 'RU' ? Screen4RU : Screen4EN} alt="screen" />
                </IPhone>
            </IPhoneWrapper>

            <BlueRectangle />
        </PossibilitiesStyled>
    )
}

const PossibilitiesStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 70px 0 -100px;
    margin: 100px auto 0;
    max-width: 1440px;

    @media (max-width: 1599px) {
        max-width: 1140px;
    }

    @media (max-width: 1200px) {
        max-width: 960px;
        padding: 40px 2% -130px;
    }

    @media (max-width: 991px) {
        padding-bottom: 790px;
        padding-top: 0;
        margin-top: 100px;
        max-width: 750px;
    }

    @media (max-width: 800px) {
        padding: 0 8% 790px 8%;
        margin-top: 80px;
    }

    @media (max-width: 600px) {
        padding: 0 8% 650px 8%;
    }

`

const TextStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 58%;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`

const H1 = styled.h1`
    font-size: calc(2vw + 10px);
    margin: 0 0 40px 0;
    font-weight: bold;
    line-height: 80px;
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
        font-size: calc(2vw + 20px);
        margin: 0 0 20px 0;
    }
`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 2vw 10px;

    @media (min-width: 1920px) {
        margin: 0 35px 10px;
    }

    @media (max-width: 991px) {
        position: absolute;
        margin-top: 85px;
    }
`

const Li = styled.div`
    display: flex;
    flex-direction: column;
    letter-spacing: -0.04em;
    color: #274557;
    margin: 0 0 30px 0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    @media (max-width: 991px) {
        margin: 0;
        padding: 10px 0;
    }
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    -webkit-tap-highlight-color: transparent;
`

const H2 = styled.h2`
    font-size: calc(1.3vw + 14px);
    padding: 0 0 10px 0;
    margin: 0;

    @media (min-width: 1920px) {
        font-size: 35px;
    }

    @media (max-width: 991px) {
    }
`

const Border = styled.div`
    margin: 5px 0 0 0;
    height: 3px;
    background: linear-gradient(90deg, rgba(0, 181, 214, 0.95) 10%, rgba(255, 74, 30, 1) 80%);
    opacity: 0;
    border-radius: 10px;

    @media (max-width: 600px) {
        height: 2px;
    }
`

const P = styled.p`
    font-size: calc(0.8vw + 9px);
    letter-spacing: -0.04em;
    margin: 0;
    padding: 0;
    z-index: -1;
    -webkit-tap-highlight-color: transparent;

    transition: all 0.3s ease;

    @media (min-width: 1920px) {
        font-size: 23.5px;
    }

    @media (max-width: 991px) {
        font-size: calc(0.9vw + 9px);
        margin-top: -35px;
        opacity: 0;
        line-height: 0.5;
        margin-bottom: 10px;
    }
`

const IPhoneWrapper = styled.div`
    position: absolute;
    left: 68%;
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    background-image: url(${iPhoneImg});
    background-size: 100%;
    background-position: center top;

    height: calc(25vw + 325px);
    width: calc(10vw + 142px);
    flex: 1;
    z-index: 1;

    @media (min-width: 3000px) {
        left: calc(50% + 150px);
    }

    @media (min-width: 1920px) {
        height: 800px;
        width: 330px;
        left: calc(57% + 150px);
    }

    @media (max-width: 1599px) {
        left: calc(35% + 350px);
    }

    @media (max-width: 1439px) {
        left: calc(40% + 300px);
    }

    @media (max-width: 1199px) {
        left: calc(50% + 145px);
    }

    @media (max-width: 991px) {
        left: calc(50% - (5vw + 71px));
        transform: translateY(600px);
    }

    @media (max-width: 600px) {
        transform: translateY(520px);
    }
`

const MobHeaderImg = styled.img`
    display: none;
    position: absolute;
    top: 18%;
    height: 3%;
    width: 84.6%;
    z-index: 1;
    border-radius: 10px 10px 0 0;

    @media (max-width: 1600px) {
        width: 83.8%;
    }

    @media (max-width: 1200px) {
        width: 82.5%;
    }

    @media (max-width: 1000px) {
        width: 82.2%;
    }

    @media (max-width: 991px) {
        width: 82.5%;
    }

    @media (max-width: 800px) {
        width: 81%;
    }

    @media (max-width: 600px) {
        top: 17.6%;
        height: 3.2%;
        width: 84%;
    }
    @media (max-width: 450px) {
        width: 83%;
    }
`

const IPhone = styled(Carousel)`
    overflow: hidden;
    height: 63%;
    width: 90.5%;
    margin: auto;

    @media (max-width: 600px) {
        height: 68%;
        width: 94%;
        margin-top: 43%;
    }
`

const Img = styled.img`
    height: auto;
    width: 100%;
    pointer-events: none;
    // margin-top: 2%;
`
