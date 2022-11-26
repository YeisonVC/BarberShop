import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            pass: '',
        };
    }

    render() {

        return (
            <div className='background'>
                <h1 className='nombre-pagina text'>
                    Olvide Password
                </h1>

                <p className='descripcion-pagina text'>Reestablece tu password escribiendo tu email a continuación</p>

                <form className='formulario' method='POST' action='/olvide'>
                    <div className='campo'>
                        <label className='text' htmlFor='email'>E-mail:</label>
                        <input
                            type="email"
                            id='email'
                            placeholder='Tu Email'
                            name="email"
                        />
                    </div>
                    <input type="submit" className="boton" value="Recuperar" />
                </form>

                <div className="acciones">
                    <a href="/" className='text'>¿Ya tienes una cuenta? <span className='texto_azul'> Iniciar Sesión</span></a>
                    <a href="/crear-cuenta" className='text'>¿Aún no tienes una cuenta? <span className='texto_azul'> Crear una</span></a>
                </div>
            </div>
        )
    }
}
