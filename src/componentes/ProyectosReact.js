import React from 'react';
import Card from './Card';
import ImgFreeCodeCamp from '../img/freeCodeCamp-logo.jpeg';
import ImgContadorClicks from '../img/Contador-de-Clicks.png';


function ProyectosReact() {
    return (
        <>
                    <Card
                        href='https://armnellgomez-clone-testimonios-freecodecamp-react.s3.amazonaws.com/index.html'
                        img={ImgFreeCodeCamp}
                        alt='logo freecodecamp'
                        text='Esta es una copia de la pagina de testimonios de FreeCodeCamp. En este proyecto practique sobre el uso de las props, esto está alojado en un bucket S3 de AWS para que tú lo puedas visualizar.'
                    />

                    <Card
                        href='https://armnellgomez-contador-de-clics-react.s3.amazonaws.com/index.html'
                        img={ImgContadorClicks}
                        alt='contador de clicks'
                        text='Esto es un contador de clicks donde practique el uso de useState.'
                    />
        </>
    )
}

export default ProyectosReact;