import React, { useState, useEffect } from 'react'
// styled
import styled from 'styled-components'

// Динамический импорт всех webp картинок из папки
const importAll = (r) => {
    return r.keys().map(r)
}
const allTabletImg = importAll(require.context('@img/tablet', false, /\.webp$/))

const Tablet = (props) => {
    // позиция вьюпорта
    const [scrollPos, setScrollPos] = useState(0)

    // console.log('---', 'props', props)

    useEffect(() => {
        window.onscroll = () => {
            // обновляем позицию вьюпорта при прокрутке
            setScrollPos(window.pageYOffset - props.heightBefor)
        }
        return () => {
            window.onscroll = () => {
                // убираем слушатель, если уходим с главной страницы
                return null
            }
        }
    })

    // высчитываем высоту документа
    // const body = document.body
    // const html = document.documentElement
    // const height = Math.max(
    //     body.scrollHeight,
    //     body.offsetHeight,
    //     html.clientHeight,
    //     html.scrollHeight,
    //     html.offsetHeight,
    // )

    const mechanismHeight = props.height
    // Параметр, зависящий от конечной высоты документа
    // let chunk
    // if (height <= 500) chunk = height / 150
    // if (height > 500 && height <= 1500) chunk = height / 100
    // if (height > 1500 && height <= 2500) chunk = height / 60
    // if (height > 2500 && height <= 3500) chunk = height / 46 // current desctop height 2990
    // if (height > 3500 && height <= 6000) chunk = height / 38 // current phone height 3700+-
    // if (height > 6000 && height <= 8000) chunk = height / 37
    // if (height > 8000) chunk = height / 33
    // const chunk = height / 100 //1000px
    // const chunk = height / 50 //2000px
    // const chunk = height / 40 //3000px
    // const chunk = height / 38 //5000px
    // const chunk = height / 33 //10000px

    // let chunk = height / 60
    let chunk = mechanismHeight / 31
    // console.log(chunk)

    const visible = {
        display: 'block',
    }

    const hidden = {
        display: 'none',
    }

    return (
        <TabletStyle>
            {/*отрисуем каждую картинку */}
            {allTabletImg.map((el) => {
                // если картинка последняя не скрываем ее
                if (scrollPos < 0 && allTabletImg.indexOf(el) === 0) {
                    return <Img src={allTabletImg[0].default} alt="tablet" key={allTabletImg.indexOf(el)} />
                }
                if (scrollPos > 0 + mechanismHeight && allTabletImg.indexOf(el) === allTabletImg.length - 1) {
                    return (
                        <Img
                            src={allTabletImg[allTabletImg.length - 1].default}
                            alt="tablet"
                            key={allTabletImg.indexOf(el)}
                        />
                    )
                }

                // в зависимости от положения отрисовываем соответствующую картинку
                return (
                    <Img
                        style={
                            scrollPos >= chunk * allTabletImg.indexOf(el) &&
                                scrollPos < chunk * (allTabletImg.indexOf(el) + 1)
                                ? visible
                                : hidden
                        }
                        src={el.default}
                        alt="tablet"
                        key={allTabletImg.indexOf(el)}
                    />
                )
            })}
        </TabletStyle>
    )
}

const TabletStyle = styled.div`
    position: sticky;
    top: 20%;
    width: calc(10vw + 200px);
    height: 10%; // TODO пробросить сюда высоту динамически
    margin-top: 5%;
    margin-left: 5%;

    @media (max-width: 1200px) {
        height: 440px;
    }
    @media (max-width: 991px) {
        left: calc(50% - 170px);
        display: none;
    }
`

const Img = styled.img`
    width: 100%;
    height: auto;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
`

export default Tablet
