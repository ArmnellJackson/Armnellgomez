import React from 'react';
import '../style/Main.css';
import HTMLyCSS from '../img/222-2229726_intro-to-html-css-html-css-icon.png';
import ImgReact from '../img/React_js.jpeg';


function Main() {
    return (
        <>
            <main>
                <section class="proyectos">
                    <div class="card style-card">
                        <a href="./html-css.html">
                            <img src={HTMLyCSS} class="card-img-top" alt="html-css" />
                        </a>
                        <div class="card-body">
                            <p class="card-text">En esta sección se encuentran mis proyectos más básicos hechos solo con HTML &
                                CSS.</p>
                        </div>
                    </div>

                    <div class="card style-card">
                        <a href="./react-js.html">
                            <img src={ImgReact} class="card-img-top" alt="react.js" />
                        </a>
                        <div class="card-body">
                            <p class="card-text">En esta sección se encuentran mis primeros proyectos hechos en React.js.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main;