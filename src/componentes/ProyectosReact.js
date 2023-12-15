import React from 'react';
import Card from './Card';
import ImgFreeCodeCamp from '../img/freeCodeCamp-logo.jpeg';
import ImgContadorClicks from '../img/Contador-de-Clicks.png';
import Calculadora from '../img/calculadora-react.png';


function ProyectosReact() {
	return (
		<>
			<Card
				href='https://armnellgomez-clone-testimonios-freecodecamp-react.s3.amazonaws.com/index.html'
				img={ImgFreeCodeCamp}
				alt='logo freecodecamp'
				text='Pagina de testimonios de FreeCodeCamp. En este proyecto practique el uso de las props.'
			/>

			<Card
				href='https://armnellgomez-contador-de-clics-react.s3.amazonaws.com/index.html'
				img={ImgContadorClicks}
				alt='contador de clicks'
				text='Esto es un contador de clicks donde practique el uso de useState.'
			/>

			<Card
				href='https://armnellgomez-calculadora-react.s3.amazonaws.com/index.html'
				img={Calculadora}
				alt='calculadora'
				text='Calculadora.'
			/>
		</>
	)
}

export default ProyectosReact;