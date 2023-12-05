import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@ui5/webcomponents-react'
import reportWebVitals from './reportWebVitals'
import './App.scss'
import Router from './main/routes'
import { NavBar } from './presentation/components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <NavBar />
            <Router />
        </ThemeProvider>
    </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
