import React from 'react'; 
import { Link } from 'react-router-dom';


export const Singup = () => { 
    
    return (
        <div className='background'>
            <h1 className='nombre-pagina text'>
                Crear Cuenta
            </h1>

            <p className='descripcion-pagina text'>Llena el siguiente formulario para crear una cuenta</p>

            <form className='formulario' method='POST' action='/crear-cuenta'>
                    <div class="campo">
                        <label className='text' for='nombre'>Nombre:</label>
                        <input
                            type="text"
                            id='nombre'
                            name="nombre"
                            placeholder='Tu Nombre'
                        />
                    </div>{/* .campo */}

                    <div class="campo">
                        <label className='text' for='apellido'>Apellido:</label>
                        <input
                            type="text"
                            id='apellido'
                            name="apellido"
                            placeholder='Tu Apellido'
                        />
                    </div>{/* .campo */}

                    <div class="campo">
                        <label className='text' for='telefono'>Teléfono:</label>
                        <input
                            type="tel"
                            id='telefono'
                            name="telefono"
                            placeholder='Tu Teléfono'
                        />
                    </div>{/* .campo */}

                    <div class="campo">
                        <label className='text' for='email'>E-mail:</label>
                        <input
                            type="email"
                            id='email'
                            name="email"
                            placeholder='Tu E-mail'
                        />
                    </div>{/* .campo */}

                    <div class="campo">
                        <label className='text' for='password'>Password:</label>
                        <input
                            type="password"
                            id='password'
                            name="password"
                            placeholder='Tu Password'
                        />
                    </div>{/* .campo */}

                <input type="submit" className="boton" value="Crear Cuenta"/>
            </form>

            <div class="acciones">
                <Link to="/" className='text'>¿Ya tienes una cuenta? <span className='texto_azul'> Iniciar Sesión</span></Link>
                <Link to='/olvidaste' className='text'>¿Olvidaste tu contraseña?<span className='texto_azul'> Recuperar</span></Link>
            </div>
        </div>
    )
}
