import React, { useState } from 'react';
import '../style/Enlaces.css';
import Proyectos from './Proyectos';
import QuienSoy from './QuienSoy';
import Contacto from './Contacto';

function Enlaces() {
    const [selectedTab, setSelectedTab] = useState('Proyectos');

    const renderTab = () => {
        switch (selectedTab) {
            case 'Proyectos':
                return <Proyectos />;
            case '¿Quien Soy?':
                return <QuienSoy />;
            case 'Contacto':
                return <Contacto />;
            default:
                return <Proyectos />;
        }
    };

    return (
        <>
            <ul className="nav nav-pills nav-fill small" id="pillNav2" role="tablist" style={{ "--bs-nav-link-color": "var(--first-color)", "--bs-nav-pills-link-active-color": "var(--fourth-color)", "--bs-nav-pills-link-active-bg": "var(--first-color)" }}>
                <li className="nav-item" role="presentation">
                    <button className={`nav-link ${selectedTab === 'Proyectos' ? 'active' : ''}`} id="home-tab2" onClick={() => setSelectedTab('Proyectos')} type="button" role="tab" aria-selected="true">Proyectos</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={`nav-link ${selectedTab === '¿Quien Soy?' ? 'active' : ''}`} id="profile-tab2" onClick={() => setSelectedTab('¿Quien Soy?')} type="button" role="tab" aria-selected="false">¿Quien Soy?</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={`nav-link ${selectedTab === 'Contacto' ? 'active' : ''}`} id="contact-tab2" onClick={() => setSelectedTab('Contacto')} type="button" role="tab" aria-selected="false">Contacto</button>
                </li>
            </ul>
            {renderTab()}
        </>
    )
}

export default Enlaces;
