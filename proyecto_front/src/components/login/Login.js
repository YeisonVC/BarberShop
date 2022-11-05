import React from 'react'; 
import { Link } from 'react-router-dom';

export const Login = () => { 
    
    return (
        <div className='background'>
            <h1 className='nombre-pagina text'>
                Login
            </h1>

            <p className='descripcion-pagina text'>Inicia sesión con tus datos</p>

            <form className='formulario' method='POST' action='/'>
                <div className='campo'>
                    <label className='text' for='email'>E-mail:</label>
                    <input 
                        type="email" 
                        id='email'
                        placeholder='Tu Email'
                        name="email" 
                    />
                </div>

                <div className='campo'>
                    <label className='text' for="password">Password:</label>
                    <input 
                        type="password" 
                        id='password'
                        name="password" 
                        placeholder='Tu Contraseña'
                    />
                </div>

                <input type="submit" className="boton" value="Iniciar Sesion"/>
            </form>

            <div class="acciones">
                <Link to="/crear-cuenta" className='text'>¿Aún no tienes una cuenta? <span className='texto_azul'> Crear una</span></Link>
                <Link to='/olvidaste' className='text'>¿Olvidaste tu contraseña?<span className='texto_azul'> Recuperar</span></Link>
            </div>
        </div>
    )
}
