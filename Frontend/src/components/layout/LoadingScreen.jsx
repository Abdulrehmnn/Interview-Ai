import React from 'react'
import './loading-screen.scss'

const LoadingScreen = ({ message = 'Loading...' }) => (
    <main className="loading-screen">
        <div className="loading-screen__spinner" />
        <p className="loading-screen__text">{message}</p>
    </main>
)

export default LoadingScreen
