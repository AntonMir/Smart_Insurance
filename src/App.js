import React, { useEffect } from 'react'
// routes
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// components
import MainPage from '@mainPage/MainPage.js'
import Header from '@header/Header.js'
import Footer from '@footer/Footer.js'
// config
import config from '@config/config.js'
// redux
import { store } from '@store/store.js'
import { changeBurgerMenu } from '@store/actions.js'
// styles
import 'materialize-css'

export default function App() {

    useEffect(() => {
        window.onclick = (event) => {
            store.dispatch(changeBurgerMenu(false))
        }
        window.onresize = (event) => {
            store.dispatch(changeBurgerMenu(false))
        }

        return () => {
            window.onclick = (event) => {
                return
            }
            window.onresize = (event) => {
                return
            }
        }
    }, [])

    useEffect(() => {
        // install chosen Language
        localStorage.setItem('currentLang', config.defaultLang)
    }, [])

    return (
        <Router>
            <Header />
            <Route exact path="/" component={MainPage} />
            <Redirect to="/" />
            <Footer />
        </Router>
    )
}
