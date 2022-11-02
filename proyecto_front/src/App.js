import React from 'react';
import './build/css/app.css';

//Router v6
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//theme
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext.tsx';

//Componentes
import { Navbar } from './components/Navbar';
import { Login } from './components/Login';
import { Registration } from './components/Registration';
import Slider from './context/Slider'

function App() {
  //Theme
  const { theme } = useContext(ThemeContext);
  console.log('Hola desde App '+theme);

  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className={theme}>
          <main className='main background'>
                <Slider />

                <Routes>
                  <Route index element={<Login />} />
                  <Route path='/singup' element={<Registration />} />
                </Routes>
                
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
