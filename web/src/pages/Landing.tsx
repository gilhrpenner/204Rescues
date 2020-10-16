import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../styles/pages/landing.scss';

// Resources
import logoImg from '../images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="204 Rescues" />

                <main>
                    <h1>Bring happiness to your home</h1>
                    <p>Find local rescues near you.</p>
                </main>

                <div className="location">
                    <strong>Winnipeg</strong>
                    <span>Manitoba</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>
            </div>
        </div>
    );
}

export default Landing;
