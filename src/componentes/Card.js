import React from 'react';
import '../style/Card.css';

function Card({ onClick, href, img, alt, text }) {
    return (
        <>
            <div className="style-card" onClick={onClick}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                    <img src={img} className="card-img-top" alt={alt} />
                </a>
                <div className="card-body">
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </>
    );
}

export default Card;