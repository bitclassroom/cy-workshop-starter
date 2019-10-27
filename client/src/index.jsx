import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import App from './app/App'

import './styles.css'

const isDev = process.env.NODE_ENV === 'development'
const HotApp = isDev ? hot(App) : App

ReactDOM.render(
    <BrowserRouter>
        <HotApp />
    </BrowserRouter>,
    document.getElementById('root')
)
