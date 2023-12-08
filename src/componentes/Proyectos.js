import React, { useState } from 'react';
import '../style/Proyectos.css';
import HTMLyCSS from '../img/HTMLyCSS.png';
import ImgReact from '../img/React_js.jpeg';
import Card from './Card';
import ProyectosReact from './ProyectosReact';

function Proyectos() {
    const [mostrarProyectosReact, setMostrarProyectosReact] = useState(false);

    const toggleVista = () => {
        setMostrarProyectosReact(!mostrarProyectosReact);
    };

    return (
        <>
            <main>
                <section className="proyectos">
                    {mostrarProyectosReact ? (
                        <ProyectosReact />
                    ) : (
                        <>
                            <Card
                                onClick={toggleVista}
                                img={HTMLyCSS}
                                alt='logo html y css'
                                text='En esta sección se encuentran mis proyectos más básicos hechos solo con HTML & CSS.'
                            />
                            <Card
                                onClick={toggleVista}
                                img={ImgReact}
                                alt='logo react.js'
                                text='En esta sección se encuentran mis primeros proyectos hechos en React.js.'
                            />
                        </>
                    )}
                </section>
            </main>
        </>
    );
}

export default Proyectos;