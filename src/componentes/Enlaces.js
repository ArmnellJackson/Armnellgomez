import React from 'react';
import '../style/Enlaces.css';

function Enlaces() {
    return (
        <>
            <ul className="nav nav-pills nav-fill p-1 small" id="pillNav2" role="tablist" style={{ "--bs-nav-link-color": "var(--first-color)", "--bs-nav-pills-link-active-color": "var(--fourth-color)", "--bs-nav-pills-link-active-bg": "var(--first-color)" }}>
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Proyectos</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">¿Quien Soy?</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contacto</button>
                </li>
            </ul>
        </>
    )
}

export default Enlaces;
