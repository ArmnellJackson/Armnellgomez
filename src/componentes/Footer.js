import React from 'react';
import Logo from '../img/logo-para-fondo-oscuro.png';
import '../style/Footer.css';

function Footer() {
    return (
        <>
            <footer>
                <section class="social">
                    <a href="https://github.com/ArmnellJackson" target="_blank" rel="noreferrer">
                    <i class="bi bi-github" style={{ color: 'var(--first-color)' }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/armnell-jackson-gomez-garcia-b01619152/" target="_blank" rel="noreferrer">
                    <i class="bi bi-linkedin" style={{ color: 'var(--first-color)' }}></i>
                    </a>
                </section>

                <div>
                    <section class="logo-footer">
                        <a href="#inicio">
                            <img src={Logo} alt="logo" />
                        </a>
                    </section>

                    <section class="autor">
                        <p>Creado por Armnell Gómez</p>
                    </section>
                </div>
            </footer>
        </>
    )
}

export default Footer;