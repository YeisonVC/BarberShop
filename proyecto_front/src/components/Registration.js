import React from 'react'; 

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.tsx';


export const Registration = () => { 
    const { theme } = useContext(ThemeContext);
    console.log('Hola desde Login ' + theme);
    
    return (
        <div className='login'>
            <h2 className='text'>
                Crear Cuenta
            </h2>

            <p className='text'>Llena el siguiente formulario para crear una cuenta</p>

            <form className='formulario formulario--login'>
                <div className='informacion'>
                    <div className='informacion-campo'>
                        <label className='text'>
                            Nombre:</label>
                            <input type="text" name="name" placeholder='Tu Nombre'/>
                        
                    </div>
                    <div className='informacion-campo'>
                        <label className='text'>
                            Apellido:</label>
                            <input type="text" name="name" placeholder='Tu Apellido'/>
                        
                    </div>
                    <div className='informacion-campo'>
                        <label className='text'>
                            Teléfono:</label>
                            <input type="text" name="name" placeholder='Tu Teléfono'/>
                        
                    </div>
                    <div className='informacion-campo'>
                        <label className='text'>
                            E-mail:</label>
                            <input type="text" name="name" placeholder='Tu Email'/>
                        
                    </div>
                    <div className='informacion-campo'>
                        <label className='text'>
                            Contraseña:</label>
                            <input type="text" name="name" placeholder='Tu Contraseña'/>
                        
                    </div>
                </div>
                <a href='./#' className='boton'>Crear Cuenta</a>
            </form>

            <a href='./#' className='text'>¿Ya tienes una cuenta? <span className='texto_azul'>Iniciar Sesión</span></a>
        </div>
    )
}
