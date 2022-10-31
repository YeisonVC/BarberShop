import React from 'react'; 

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.tsx';


export const Navbar = () => { 
    const { theme, setTheme } = useContext(ThemeContext);

    console.log(theme);
    
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
                        <a className="enlace" href='./login'>Log In</a>
                    </div>
                    <div className='Navbar-sesion__singup borde hover-bg'>
                        <a className="enlace" href='./singup'>Sing Up</a>
                    </div>
                </div>

            </header>
        </div>
    )
}
