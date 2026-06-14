import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../../features/auth/hooks/useAuth'
import './app-navbar.scss'

const AppNavbar = ({ active = 'home' }) => {
    const { user, handleLogout } = useAuth()
    const navigate = useNavigate()

    const onLogout = async () => {
        await handleLogout()
        navigate('/')
    }

    return (
        <header className="app-navbar">
            <div className="app-navbar__inner">
                <Link to="/home" className="app-navbar__brand">
                    <span className="app-navbar__logo">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L14.5 8.5L21 9.5L16.5 14.5L17.5 21L12 18L6.5 21L7.5 14.5L3 9.5L9.5 8.5L12 2Z" fill="url(#logoGrad)" />
                            <defs>
                                <linearGradient id="logoGrad" x1="3" y1="2" x2="21" y2="21">
                                    <stop stopColor="#6366f1" />
                                    <stop offset="1" stopColor="#8b5cf6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <span className="app-navbar__name">InterviewAI</span>
                </Link>

                <nav className="app-navbar__links">
                    <Link
                        to="/home"
                        className={`app-navbar__link ${active === 'home' ? 'app-navbar__link--active' : ''}`}
                    >
                        Dashboard
                    </Link>
                </nav>

                <div className="app-navbar__actions">
                    {user && (
                        <span className="app-navbar__user">
                            {user.username || user.email}
                        </span>
                    )}
                    <button onClick={onLogout} className="button button--ghost">
                        Logout
                    </button>
                </div>
            </div>
        </header>
    )
}

export default AppNavbar
