import React from 'react'; 

//Imágenes
import logoPng from '../build/img/logo_black.png';
import logoAvif from '../build/img/logo_black.avif';
import logoWebp from '../build/img/logo_black.webp';
import useLocalStorage from 'use-local-storage';

export const Navbar = () => {
    const [theme, setTheme] = useLocalStorage('dark')
    console.log(theme);

    const switchTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme)
    }
    return (
        <header className='Navbar-header dark' data-theme={theme}>
            <div className='Navbar-logo'>
                <picture>
                    <source srcSet={logoAvif} type="image/avif"/>
                    <source srcSet={logoWebp} type="image/webp"/>
                    <img className='Navbar-logo' loading="lazy" src={logoPng} width={500} height={300} alt="Imagen Logo"/>
                </picture>
            </div>

            <div className='Navbar-theme'>
                <label for='checkbox'>Dark</label>

                <label className='switch'> 
                    <input onClick={switchTheme} type="checkbox" id='checkbox'/>
                    <span className="slider"></span>
                </label>

                <label for='checkbox'>Light</label>
            </div>
            
            <div className='Navbar-sesion'>
                <div className='Navbar-sesion__login'>
                    <a href='./login'>Login In</a>
                </div>
                <div className='Navbar-sesion__singup'>
                    <a href='./singup'>Sing Up</a>
                </div>
            </div>
        </header>
    )
}
