import React from 'react';
import './build/css/app.css';

import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext.tsx';

//Componentes
import { Navbar } from './components/Navbar';
import { Login } from './components/Login';
import Slider from './context/Slider'

function App() {
  //Theme
  const { theme } = useContext(ThemeContext);
  console.log('Hola desde App '+theme);

  
  return (
    <div className="App">
      <Navbar />  

      <div className={theme}>
        <main className='main background'>
            
              <Slider />
            

            
              <Login />
            
        </main>
      </div>
    </div>

  );
}

export default App;
