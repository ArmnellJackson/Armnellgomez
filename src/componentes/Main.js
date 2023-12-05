import React from 'react';
import '../style/Main.css';
import HTMLyCSS from '../img/HTMLyCSS.png';
import ImgReact from '../img/React_js.jpeg';
import Card from './Card';


function Main() {
    return (
        <>
            <main>
                <section className="proyectos">
                    <Card
                        href='#'
                        img={HTMLyCSS}
                        alt='logo html y css'
                        text='En esta sección se encuentran mis proyectos más básicos hechos solo con HTML & CSS.'
                    />

                    <Card
                        href='#'
                        img={ImgReact}
                        alt='logo react.js'
                        text='En esta sección se encuentran mis primeros proyectos hechos en React.js.'
                    />
                </section>
            </main>
        </>
    )
}

export default Main;