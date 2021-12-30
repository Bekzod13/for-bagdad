import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

// import images
import logo from '../../images/hero/logo.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="header">
                    <Link to="/" className='logo'>
                        <img src={logo} alt="logo" />
                        <span>SERBEMA-2022</span>
                    </Link>
                    <div className="nav-links">
                        <Link to='/' className="nav-link">home</Link>
                        <Link to='/' className="nav-link">commite</Link>
                        <Link to='/' className="nav-link">speakers</Link>
                        <Link to='/' className="nav-link">schedule</Link>
                        <Link to='/' className="nav-link">call for contribution</Link>
                        <Link to='/' className="nav-link">conference fee</Link>
                        <Link to='/' className="nav-link">venue</Link>
                        <Link to='/' className="nav-link">contact</Link>
                        <Link to='/' className="nav-link">history</Link>
                    </div>
                </div>
                <div className="hero-text">
                    International Conference on Sustainable Management of Earth Resources and Biodiversity
                </div>
                <div className="hero-date-location">
                    <p className="hero-date">october <span>14th - 16th 2022</span></p>
                    <p className="hero-location">uzbekistan, tashkent</p>
                </div>
                <div className="hero-buttons">
                        <Link to="/" className="hero-btn">SERBEMA-2022</Link>
                        <Link to="/" className="hero-btn">submit paper </Link>
                        <Link to="/" className="hero-btn">important</Link>
                        <Link to="/login" className="hero-btn">login</Link>
                        <Link to="/register" className="hero-btn">registration</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
