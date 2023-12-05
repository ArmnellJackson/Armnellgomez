import React from 'react';
import '../style/Card.css';


function Card({ href, img, alt, text }) {
    return (
        <>
            <div className="card style-card">
                <a href={href}>
                    <img src={img} className="card-img-top" alt={alt} />
                </a>
                <div className="card-body">
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </>
    )
}

export default Card;