import React from 'react';
import './build/css/app.css';

//Router v6
import AppRoutes from './components/router/routes';

//theme
import { useContext } from 'react';
import { ThemeContext } from './components/theme/ThemeContext.tsx';

//Components
import { Navbar } from './components/navbar/Navbar';
import Slider from './components/slider/Slider';



function App() {
  //Theme
  const { theme } = useContext(ThemeContext);
  console.log('Hola desde App '+theme);

  
  return (
    <div className={`${theme} App`}>
      <Navbar />
      <main className='contenedor-app background'>
        <div class="imagen">
          <Slider />
        </div>

        <div class="app">
          <AppRoutes />
        </div>
      </main>
    </div>
  );
}

export default App;
