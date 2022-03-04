import { useState, useEffect, useRef } from 'react'
// redux
import { store } from '@store/store.js'
// config
import config from '@config/config.js'
// components
import MechCard from '@mechanism/elements/MechСard.js'
import Text from '@mechanism/elements/Text.js'
import Tablet from '@mechanism/elements/Tablet.js'
// anim on scroll
import 'aos/dist/aos.css'
// Img
import Mech1RU from '@img/mainPage/mechanism/Mech1.webp'
import Mech2RU from '@img/mainPage/mechanism/Mech2.webp'
import Mech3RU from '@img/mainPage/mechanism/Mech3.webp'
import Mech4RU from '@img/mainPage/mechanism/Mech4.webp'
import Mech4EN from '@img/mainPage/mechanism/Mech4EN.webp'
import Mech5RU from '@img/mainPage/mechanism/Mech5.webp'
// styled
import styled from 'styled-components'

const MechListRU = [
    {
        id: 1,
        title: 'Простота и надёжность',
        text: 'Лаконичный дизайн, небольшие габариты и отсутствие лишних элементов',
        img: Mech1RU,
    },
    {
        id: 2,
        title: 'Автономная работа',
        text: 'Модуль FLASH памяти, позволяет сохранять поездки даже если телефон водителя недоступен',
        img: Mech2RU,
    },
    {
        id: 3,
        title: 'Большой срок службы',
        text: 'До года работы от момента первого включения без подзарядки или замены батарей',
        img: Mech3RU,
    },
    {
        id: 4,
        title: 'Шифрование и безопасность',
        text: `После установки соединения с телефоном водителя, другой телефон больше не сможет 
                к нему подключиться, не получив разрешения`,
        img: Mech4RU,
    },
    {
        id: 5,
        title: 'Простота в использовании ',
        text: 'Устройство клеится на лобовое стекло при помощи идущей в комплекте прочной клейкой ленты',
        img: Mech5RU,
    },
]

const MechListEN = [
    {
        id: 1,
        title: 'Simplicity and reliability',
        text: 'Laconic and compact design with no unnecessary elements',
        img: Mech1RU,
    },
    {
        id: 2,
        title: 'Autonomous operation',
        text: 'FLASH memory storage is capable of saving ride data even when the driver’s phone is unavailable',
        img: Mech2RU,
    },
    {
        id: 3,
        title: 'Long lifespan',
        text: 'Up to a year of battery life once the device is turned on  with no need to recharge or replace the battery',
        img: Mech3RU,
    },
    {
        id: 4,
        title: 'Encryption and security',
        text: `Once connection with a smartphone is established, no other smartphone will 
                be able to connect without permission from that "main" smartphone`,
        img: Mech4EN,
    },
    {
        id: 5,
        title: 'Ease of use',
        text: 'The device is attached to the windshield via the included double sided adhesive tape',
        img: Mech5RU,
    },
]

export default function Mechanism(props) {
    const mechRef = useRef(0)

    const [mechHeight, setmechHeight] = useState(0)
    const [currentLang, setCurrentLang] = useState(localStorage.getItem('currentLang') || config.defaultLang)

    const langText = currentLang === 'RU' ? MechListRU : MechListEN

    useEffect(() => {
        // change Language
        store.subscribe(() => {
            setCurrentLang(store.getState().pageLanguage)
        })
    }, [])

    useEffect(() => {
        setmechHeight(mechRef.current.getBoundingClientRect().height)
    }, [mechHeight, mechRef]) // TODO rewiew хз почему это работает

    return (
        <MechWrapperStyled
            data-aos='fade-up'
            data-aos-anchor-placement="top-center"
        >
            <MechanismStyled ref={mechRef}>
                <Content>
                    <Text />

                    <MechWrapper>
                        {langText.map((el) => {
                            return <MechCard el={el} key={el.id} />
                        })}
                    </MechWrapper>
                </Content>

                <Tablet height={mechHeight} heightBefor={props.heightBefor} />
                {/* <PL /> */}
            </MechanismStyled>
        </MechWrapperStyled>
    )
}

const MechWrapperStyled = styled.div`
    z-index: -1;
    margin-top: 50px;
    margin-bottom: -50px;
    padding-top: 140px;
    background-color: #E6F3FF;

    @media (max-width: 800px) {
        padding-top: 120px;
    }
`

const MechanismStyled = styled.div`

    display: flex;
    margin: -60px auto 0;
    padding: 40px 0 100px;
    max-width: 1440px;

    @media (max-width: 1599px) {
        max-width: 1140px;
    }
    @media (max-width: 1200px) {
        max-width: 960px;
        padding: 0 2% 70px;
    }
    @media (max-width: 991px) {
        max-width: 750px;
    }
    @media (max-width: 800px) {
        padding: 0 8% 70px;
    }
`

const Content = styled.div`
    min-width: 70%;

    @media (max-width: 991px) {
        width: 100%;
    }
`

const MechWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-row-gap: 55px;
    grid-column-gap: 25px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    @media (max-width: 991px) {
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(239px, 1fr));
    }

    @media (max-width: 380px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`
