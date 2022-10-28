import React from 'react'; 

//Imágenes


import { useState } from 'react';

export const Navbar = () => { 
    const [theme, setTheme] = useState('dark');
    console.log(theme);
    
    return (
        <div className={theme}>
            <header className='Navbar-header background'>

                <div className='Navbar-logo logo'>
                    {/* logo */}
                </div>

                <div className='Navbar-theme'>
                    <label className="text" htmlFor='checkbox'>Dark</label>
                    <label className='switch'>
                        <input type="checkbox" id='checkbox'
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        />
                        <span className="slider"></span>
                    </label>
                    <label className="text" htmlFor='checkbox'>Light</label>
                </div>
            
                <div className='Navbar-sesion'>
                    <div className='Navbar-sesion__login'>
                        <a className="enlace" href='./login'>Login In</a>
                    </div>
                    <div className='Navbar-sesion__singup borde hover-bg'>
                        <a className="enlace" href='./singup'>Sing Up</a>
                    </div>
                </div>

            </header>
        </div>
    )
}
