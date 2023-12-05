import React from 'react';
import Logo from '../img/logo-para-fondo-oscuro.png';
import '../style/Header.css';
import Enlaces from './Enlaces';

function Header() {
    return (
        <>
            <header id="inicio">
                <nav className="navbar navbar-expand-lg bg-transparent" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={Logo} alt="logo AG" width="36" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav nav-underline">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                <a className="nav-link" aria-current="page" href="./html-css.html">HTML&CSS</a>
                            </div>
                        </div>
                    </div>
                </nav>

                <section>
                    <h1>Armnell Gómez</h1>
                    <h2>Web Developer</h2>
                </section>
                <Enlaces />
            </header>
        </>
    )
}

export default Header;