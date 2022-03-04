// redux
import { store } from '@store/store.js'
import { changeLanguage } from '@store/actions.js'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

export default function AvalibleLang(props) {
    const { lang } = props

    const changeLanguageHandler = (event) => {
        store.dispatch(changeLanguage(lang))
        localStorage.setItem('currentLang', config.defaultLang)
    }

    return <Lang onClick={changeLanguageHandler}>{lang}</Lang>
}

const Lang = styled.li`
    padding: 3px 16px;
    border-top: 3px solid #00b5d6;
    color: #aaa;
    cursor: pointer;
    user-select: none;
    transition: all 0.5s ease;

    &:hover {
        color: #000;
    }
`
