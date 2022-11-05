import React from 'react'; 

import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext.tsx';


export const Navbar = () => { 
    const { theme, setTheme } = useContext(ThemeContext);
    
    return (
        <div className={theme}>
            <header className={`Navbar-header background2`}>

                <div className='Navbar-logo logo'>
                    {/* logo */}
                </div>

                <div className='Navbar-theme'>
                    <label className="text" htmlFor='checkbox'>Light</label>
                    <label className='switch'>
                        <input type="checkbox" id='checkbox'
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        />
                        <span className="slider"></span>
                    </label>
                    <label className="text" htmlFor='checkbox'>Dark</label>
                </div>
            
                <div className='Navbar-sesion'>
                    <div className='Navbar-sesion__login'>
                        <a className="enlace" href='/'>Log In</a>
                    </div>
                    <div className='Navbar-sesion__singup borde hover-bg'>
                        <a className="enlace" href='/crear-cuenta'>Sing Up</a>
                    </div>
                </div>

            </header>
        </div>
    )
}