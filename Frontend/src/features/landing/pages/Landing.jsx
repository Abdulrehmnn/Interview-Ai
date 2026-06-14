import React from 'react'
import { Link, Navigate } from 'react-router'
import { useAuth } from '../../auth/hooks/useAuth'
import LoadingScreen from '../../../components/layout/LoadingScreen'
import '../style/landing.scss'

const FEATURES = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
        title: 'AI-Powered Strategy',
        desc: 'Get a personalized interview plan tailored to your resume and the job description.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        title: 'Technical Questions',
        desc: 'Practice role-specific technical questions with model answers and interviewer intent.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        title: 'Behavioral Prep',
        desc: 'Master STAR-format behavioral questions designed for your target role.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
        ),
        title: 'Preparation Roadmap',
        desc: 'Follow a day-by-day study plan to close skill gaps before your interview.',
    },
]

const STEPS = [
    { num: '01', title: 'Paste Job Description', desc: 'Copy the full job posting you are applying for.' },
    { num: '02', title: 'Upload Your Resume', desc: 'Or write a quick self-description of your experience.' },
    { num: '03', title: 'Get Your Plan', desc: 'AI generates questions, answers, and a prep roadmap in seconds.' },
]

const Landing = () => {
    const { user, loading } = useAuth()

    if (loading) return <LoadingScreen message="Loading..." />

    if (user) return <Navigate to="/home" replace />

    return (
        <div className="landing">
            {/* Navbar */}
            <header className="landing-nav">
                <div className="landing-nav__inner">
                    <Link to="/" className="landing-nav__brand">
                        <span className="landing-nav__logo">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L14.5 8.5L21 9.5L16.5 14.5L17.5 21L12 18L6.5 21L7.5 14.5L3 9.5L9.5 8.5L12 2Z" fill="url(#navGrad)" />
                                <defs>
                                    <linearGradient id="navGrad" x1="3" y1="2" x2="21" y2="21">
                                        <stop stopColor="#6366f1" /><stop offset="1" stopColor="#8b5cf6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        InterviewAI
                    </Link>
                    <div className="landing-nav__actions">
                        <Link to="/login" className="button button--ghost">Login</Link>
                        <Link to="/register" className="button button--primary">Get Started</Link>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="hero">
                <div className="hero__glow" />
                <div className="hero__content">
                    <span className="hero__badge">AI Interview Preparation Platform</span>
                    <h1 className="hero__title">
                        Ace Your Next Interview with{' '}
                        <span className="hero__highlight">AI-Powered Prep</span>
                    </h1>
                    <p className="hero__subtitle">
                        Upload your resume, paste the job description, and get a custom strategy
                        with technical questions, behavioral prep, and a day-by-day roadmap.
                    </p>
                    <div className="hero__cta">
                        <Link to="/register" className="button button--primary button--lg">
                            Get Started Free
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                        <Link to="/login" className="button button--outline button--lg">Login</Link>
                    </div>
                    <div className="hero__stats">
                        <div className="hero__stat">
                            <strong>500+</strong>
                            <span>Questions Generated</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <strong>30s</strong>
                            <span>Plan Generation</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <strong>100%</strong>
                            <span>Personalized</span>
                        </div>
                    </div>
                </div>

                {/* Hero Visual */}
                <div className="hero__visual">
                    <div className="hero-card">
                        <div className="hero-card__header">
                            <span className="hero-card__dot hero-card__dot--red" />
                            <span className="hero-card__dot hero-card__dot--yellow" />
                            <span className="hero-card__dot hero-card__dot--green" />
                            <span className="hero-card__title">Interview Strategy</span>
                        </div>
                        <div className="hero-card__body">
                            <div className="hero-card__score">
                                <span className="hero-card__score-value">87</span>
                                <span className="hero-card__score-label">Match Score</span>
                            </div>
                            <div className="hero-card__items">
                                <div className="hero-card__item">
                                    <span className="hero-card__tag hero-card__tag--tech">Technical</span>
                                    <p>Explain React reconciliation and virtual DOM...</p>
                                </div>
                                <div className="hero-card__item">
                                    <span className="hero-card__tag hero-card__tag--beh">Behavioral</span>
                                    <p>Tell me about a time you resolved a conflict...</p>
                                </div>
                                <div className="hero-card__item">
                                    <span className="hero-card__tag hero-card__tag--road">Day 3</span>
                                    <p>Practice system design patterns &amp; scalability...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="features">
                <div className="section-header">
                    <h2>Everything You Need to <span className="text-gradient">Prepare</span></h2>
                    <p>From question banks to study roadmaps — all tailored to your target role.</p>
                </div>
                <div className="features__grid">
                    {FEATURES.map((f, i) => (
                        <div key={i} className="feature-card">
                            <div className="feature-card__icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How it works */}
            <section className="how-it-works">
                <div className="section-header">
                    <h2>How It <span className="text-gradient">Works</span></h2>
                    <p>Three simple steps to your personalized interview plan.</p>
                </div>
                <div className="steps">
                    {STEPS.map((step, i) => (
                        <div key={i} className="step">
                            <span className="step__num">{step.num}</span>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-banner">
                <div className="cta-banner__inner">
                    <h2>Ready to land your dream job?</h2>
                    <p>Join thousands of candidates preparing smarter with AI.</p>
                    <Link to="/register" className="button button--primary button--lg">
                        Get Started — It's Free
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="landing-footer__inner">
                    <span className="landing-footer__brand">InterviewAI</span>
                    <div className="landing-footer__links">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Help</a>
                    </div>
                    <p className="landing-footer__copy">&copy; 2026 InterviewAI. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Landing
