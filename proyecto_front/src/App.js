import React from 'react';
import './build/css/app.css';

//Router v6
import AppRouter from './components/router/router';

//theme
import { useContext } from 'react';
import { ThemeContext } from './components/theme/ThemeContext.tsx';

//Components
import  Navbar from './components/navbar/Navbar.jsx';
import Slider from './components/slider/Slider';

function App() {
  //Theme
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`${theme} App`}>
      <Navbar />
      <main className='contenedor-app background'>
        <div className="imagen">
          <Slider />
        </div>

        <div className="app">
          <AppRouter />
        </div>
      </main>
    </div>
  );
}

export default App;
