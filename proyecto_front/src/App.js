import React from 'react';
import './build/css/app.css';

//Router v6
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//theme
import { useContext } from 'react';
import { ThemeContext } from './components/theme/ThemeContext.tsx';

//Componentes
import { Navbar } from './components/navbar/Navbar';
import { Login }  from './components/login/Login';
import { Singup } from './components/singup/Singup';
import { Recuperar } from './components/recuperar/Recuperar';
import Slider from './components/slider/Slider';

function App() {
  //Theme
  const { theme } = useContext(ThemeContext);
  console.log('Hola desde App '+theme);

  
  return (
    <BrowserRouter>
      <div className={`${theme} App`}>
          <Navbar />
            <main className='contenedor-app background'>
                  
                  <div class="imagen">
                    <Slider />
                  </div>

                  <div class="app">
                    <Routes>
                      <Route index element={<Login />} />
                      <Route path='/crear-cuenta' element={<Singup />} />
                      <Route path='/olvidaste' element={<Recuperar />} />
                    </Routes>
                  </div>
            </main>
        </div>
    </BrowserRouter>
  );
}

export default App;
