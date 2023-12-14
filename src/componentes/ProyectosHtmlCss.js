import React from 'react';
import Card from './Card';
import ImgError404 from '../img/404.jpeg';
import CardPlatzi from '../img/cardPlatzi.png';
import ImgLogoGoogle from '../img/googleNameLogo.png';
import MarvelAndDC from '../img/marvel-and-dc.jpg';
import MediaPlayer from '../img/media-player.jpeg';


function ProyectosHtmlCss() {
	return (
		<>
			<Card
				href='https://armnellgomez-pagina-error404.s3.amazonaws.com/index.html'
				img={ImgError404}
				alt='logo error 404'
				text='Pagina de Error 404.'
			/>

			<Card
				href='https://armnellgomez-card-hecha-con-flexbox-y-grid.s3.amazonaws.com/index.html'
				img={CardPlatzi}
				alt='card img'
				text='Card en la que implemente FlexBox y Grid.'
			/>

			<Card
				href='https://armnellgomez-clone-de-google.s3.amazonaws.com/index.html'
				img={ImgLogoGoogle}
				alt='google'
				text='Clon del buscador de Google(Aun no es Responsive).'
			/>

			<Card
				href='https://armnellgomez-my-team-page.s3.amazonaws.com/index.html'
				img={MarvelAndDC}
				alt='marvel y dc'
				text='Pagina de mi equipo de trabajo.'
			/>

			<Card
				href='https://armnellgomez-reproductor-de-mmusica.s3.amazonaws.com/index.html'
				img={MediaPlayer}
				alt='reproductor de musica'
				text='Rproductor de musica hecho solo con FlexBox y Grid.'
			/>
		</>
	)
}

export default ProyectosHtmlCss;