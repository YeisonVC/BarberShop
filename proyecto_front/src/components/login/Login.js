import React from 'react'; 
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext.tsx';

export const Login = () => { 
    const { theme } = useContext(ThemeContext);
    console.log('Hola desde Login ' + theme);
    
    return (
        <div className='app background'>
            <h1 className='nombre-pagina text'>
                Login
            </h1>

            <p className='descripcion-pagina text'>Inicia sesión con tus datos</p>

            <form className='formulario formulario--login'>
                <div className='informacion'>
                    <div className='informacion-campo'>
                        <label className='text'>
                            E-mail:</label>
                            <input type="text" name="name" placeholder='Tu Email'/>
                        
                    </div>
                    <div className='informacion-campo'>
                        <label className='text'>
                            Contraseña:</label>
                            <input type="password" name="name" placeholder='Tu Contraseña'/>
                        
                    </div>
                </div>
                <a href='./#' className='boton'>Iniciar Sesión</a>
            </form>

            <Link to='/' className='text'>¿Olvidaste tu contraseña?</Link>
            <Link to="/singup" className='text'>¿Aún no tienes una cuenta? <span className='texto_azul'>Crear una</span></Link>
        </div>
    )
}
