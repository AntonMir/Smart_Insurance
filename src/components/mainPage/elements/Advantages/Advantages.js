import { useState, useEffect, useRef } from 'react'
// redux
import { store } from '@store/store.js'
// config
import config from '@config/config.js'
//carousel
import Carousel from 'react-elastic-carousel'
// components
import BlueRectangle from '@advantages/elements/BlueRectangle.js'
// anim on scroll
import 'aos/dist/aos.css'
// Img
import Screen1 from '@assets/img/mainPage/advantages/Screen1.webp'
import Screen2 from '@assets/img/mainPage/advantages/Screen2.webp'
import Screen3 from '@assets/img/mainPage/advantages/Screen3.webp'
// styled
import styled from 'styled-components'
import './advantages.scss'

const textRU = [
    {
        title: `Преимущества`,
    },
    {
        title: `Нет телефона - нет проблем`,
        text: `Даже если водитель забудет взять с собой телефон, поездка сохранится 
                на устройстве и передастся при следующем удобном случае`,
    },
    {
        title: `Нет GPS - нет проблем`,
        text: `Алгоритмы оценки стиля вождения не привязаны к GPS 
                и могут выполняться без доступа к спутниковой навигации`,
    },
    {
        title: `Закончилась память - нет проблем`,
        text: `Если на устройстве закончилась память, оно запомнит когда 
                это случилось и передаст соответствующую информацию`,
    },
]

const textEN = [
    {
        title: `Our Advantages`,
    },
    {
        title: `No phone – no problem`,
        text: `Even if the driver forgets the cellphone, the device will store 
                all the ride data in FLASH memory and perform the transfer at the nearest opportunity`,
    },
    {
        title: `No GPS – no problem`,
        text: `Driving style assessment algorithms do not depend on GPS data and can 
                work just fine without access to satellite navigation`,
    },
    {
        title: `Not enough memory – no problem`,
        text: `If the device runs out of memory, it will record the moment that happened and 
                pass the relevant information at the nearest opportunity`,
    },
]

export default function Advantages() {
    // get carousel
    const carouselRef = useRef(0)

    // carousel settings
    const carousel = carouselRef.current
    const carouselSpeed = 4000

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

    return (
        <AdvantagesStyled
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
                        <P>{langText[1].text}</P>
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
                        <P>{langText[2].text}</P>
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
                        <P>{langText[3].text}</P>
                    </Li>
                </Ul>
            </TextStyled>

            <CarouselWrapper>
                <CarouselStyle
                    ref={carouselRef}
                    onChange={(currentItem, pageIndex) => {
                        setSelectedOption(pageIndex)
                        if (pageIndex === 2 && autoPlay) {
                            setTimeout(() => {
                                carousel.goTo(0)
                            }, [carouselSpeed])
                        }
                    }}
                    enableAutoPlay={autoPlay}
                    autoPlaySpeed={carouselSpeed}
                >
                    <Img selectedOption={selectedOption} src={Screen1} alt="screen" loading='lazy' />
                    <Img selectedOption={selectedOption} src={Screen2} alt="screen" loading='lazy' />
                    <Img selectedOption={selectedOption} src={Screen3} alt="screen" loading='lazy' />
                </CarouselStyle>

                <BlueRectangle />

                <ButtonsWrapper>
                    <Btn
                        onClick={() => {
                            setSelectedOption(0)
                            carousel.goTo(0)
                        }}
                        style={selectedOption === 0 ? { background: '#FF8764' } : {}}
                    ></Btn>
                    <Btn
                        onClick={() => {
                            setSelectedOption(1)
                            carousel.goTo(1)
                        }}
                        style={selectedOption === 1 ? { background: '#FF8764' } : {}}
                    ></Btn>
                    <Btn
                        onClick={() => {
                            setSelectedOption(2)
                            carousel.goTo(2)
                        }}
                        style={selectedOption === 2 ? { background: '#FF8764' } : {}}
                    ></Btn>
                </ButtonsWrapper>
            </CarouselWrapper>
        </AdvantagesStyled>
    )
}

const AdvantagesStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 100px auto 40px;
    padding: 30px 0 20px;
    max-width: 1440px;

    @media (max-width: 1599px) {
        max-width: 1140px;
    }

    @media (max-width: 1200px) {
        max-width: 960px;
        padding: 0 2%;
    }

    @media (max-width: 991px) {
        max-width: 750px;
        padding: 0 2% 520px;
    }

    @media (max-width: 800px) {
        padding: 0 8% 520px;
    }

    @media (max-width: 600px) {
        padding: 70px 8% 360px;
        margin: 0 auto;
    }

    @media (max-width: 460px) {
        padding-bottom: 260px;
    }

    @media (max-width: 360px) {
        padding-bottom: 240px;
    }
`

const TextStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50%;

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
        margin: 0 0 10px 0;
        font-size: calc(2vw + 20px);
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
`

const Li = styled.div`
    letter-spacing: -0.04em;
    color: #274557;
    margin: 0 0 30px 0;
    padding: 0;
    cursor: pointer;

    @media (max-width: 991px) {
        margin: 0 0 20px 0;
    }
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const H2 = styled.h2`
    font-size: calc(1.4vw + 8px);
    padding: 0 0 10px 0;
    margin: 0;

    @media (min-width: 1920px) {
        font-size: 35px;
    }

    @media (max-width: 991px) {
        margin: 0 0 3px 0;
        padding: 0;
        font-size: calc(1.4vw + 12px);
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
    font-size: calc(0.9vw + 9px);
    letter-spacing: -0.04em;
    margin: 0;

    @media (min-width: 1920px) {
        font-size: 23.5px;
    }
`

const CarouselWrapper = styled.div`
    position: absolute;
    left: 50%;
    display: flex;

    height: calc(27vw + 110px);
    width: calc(35vw + 100px);
    z-index: 1;

    @media (min-width: 1920px) {
        height: 623px;
        width: 740px;
    }

    @media (max-width: 991px) {
        height: calc(27vw + 250px);
        width: calc(35vw + 300px);
        left: calc(50% - (17.5vw + 150px));
        top: 50%;
    }

    @media (max-width: 600px) {
        height: calc(25vw + 220px);
        width: calc(35vw + 300px);
        left: calc(50% - (17.5vw + 150px));
        top: 53%;
    }

    @media (max-width: 460px) {
        height: calc(22vw + 200px);
        width: calc(34vw + 240px);
        left: calc(50% - (17vw + 120px));
        top: 61%;
    }

    @media (max-width: 360px) {
        height: calc(20vw + 180px);
        width: calc(30vw + 220px);
        left: calc(50% - (15vw + 110px));
        top: 66%;
    }
`

const CarouselStyle = styled(Carousel)`
    position: relative;
    display: flex;
    overflow: hidden;
    height: 66%;
    width: 81%;
    margin: auto;
    border-radius: 10px;
`

const Img = styled.img`
    height: auto;
    width: 96%;
    pointer-events: none;
    padding: 0 1%;
    border-radius: 10px;
`

const ButtonsWrapper = styled.div`
    position: absolute;
    left: 36.5%;
    width: 25%;
    bottom: 12%;
    display: flex;
    justify-content: space-between;
`

const Btn = styled.div`
    width: 25%;
    height: 6px;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;

    @media (max-width: 991px) {
        height: 5px;
    }

    @media (max-width: 600px) {
        height: 4px;
    }
`
