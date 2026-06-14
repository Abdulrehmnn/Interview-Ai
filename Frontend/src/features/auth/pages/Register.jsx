import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import LoadingScreen from '../../../components/layout/LoadingScreen'
import '../auth.form.scss'

const Register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const { loading, handleRegister } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSubmitting(true)

        const result = await handleRegister({ username, email, password })
        setSubmitting(false)

        if (result.success) {
            navigate('/home')
        } else {
            setError(result.message)
        }
    }

    if (loading) return <LoadingScreen message="Loading..." />

    return (
        <div className="auth-page">
            <div className="auth-page__brand">
                <Link to="/" className="auth-page__logo">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L14.5 8.5L21 9.5L16.5 14.5L17.5 21L12 18L6.5 21L7.5 14.5L3 9.5L9.5 8.5L12 2Z" fill="url(#authGrad2)" />
                        <defs>
                            <linearGradient id="authGrad2" x1="3" y1="2" x2="21" y2="21">
                                <stop stopColor="#6366f1" /><stop offset="1" stopColor="#8b5cf6" />
                            </linearGradient>
                        </defs>
                    </svg>
                    InterviewAI
                </Link>
                <div className="auth-page__brand-content">
                    <h2>Start preparing smarter</h2>
                    <p>Create your free account and get a personalized interview strategy in under 30 seconds.</p>
                    <ul className="auth-page__features">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                            AI-generated technical &amp; behavioral questions
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                            Personalized day-by-day prep roadmap
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                            Skill gap analysis with match score
                        </li>
                    </ul>
                </div>
            </div>

            <div className="auth-page__form-side">
                <div className="form-container">
                    <div className="form-container__header">
                        <h1>Create Account</h1>
                        <p>Get started with your free account</p>
                    </div>

                    {error && <div className="form-error">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Your username"
                                required
                                disabled={submitting}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                                disabled={submitting}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Create a password"
                                required
                                disabled={submitting}
                            />
                        </div>
                        <button className="button button--primary button--full" type="submit" disabled={submitting}>
                            {submitting ? 'Creating account...' : 'Get Started'}
                        </button>
                    </form>

                    <p className="form-container__footer">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                    <Link to="/" className="form-container__back">&larr; Back to home</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
