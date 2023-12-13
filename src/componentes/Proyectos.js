import React, { useState } from 'react';
import '../style/Proyectos.css';
import HTMLyCSS from '../img/HTMLyCSS.png';
import ImgReact from '../img/React_js.jpeg';
import Card from './Card';
import ProyectosReact from './ProyectosReact';
import ProyectosHtmlCss from './ProyectosHtmlCss';

function Proyectos() {
	const [proyectosHtmlCss, setProyectosHtmlCss] = useState(false);
	const [proyectosReact, setProyectosReact] = useState(false);

	const mostrarProyectosHtmlCss = () => {
		setProyectosHtmlCss(true);
	};

	const mostrarProyectosReact = () => {
		setProyectosReact(true);
	};

	return (
		<>
			<main>
				<section className="proyectos">

					{proyectosHtmlCss ? (
						<ProyectosHtmlCss />
					) : proyectosReact ? (
						<ProyectosReact />
					) : (
						<>
							<Card
								onClick={mostrarProyectosHtmlCss}
								img={HTMLyCSS}
								alt='logo html y css'
								text='En esta sección se encuentran mis proyectos más básicos hechos solo con HTML & CSS.'
							/>
							<Card
								onClick={mostrarProyectosReact}
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