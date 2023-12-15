import React from 'react';
import '../style/Contacto.css';

function Contacto() {
	return (
		<>
			<main>
				<form className='form-container' action="https://formsubmit.co/a78f714ae2013431f543e769c610b36a" method="POST">
					<div className='form-nombre'>
						<label>Nombre</label>
						<input type="text" name="name" required />
					</div>
					<div className='form-email'>
						<label>Correo Electrónico</label>
						<input type="email" name="email" required />
					</div>
					<div className='form-mensaje'>
						<label>Mensaje</label>
						<textarea name="message" required />
					</div>
					<button className='form-button' type="submit">Enviar</button>
					<input type="hidden" name="_captcha" value="false" />
					<input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" />
				</form>
			</main>
		</>
	)
}

export default Contacto;