import React from 'react';
import './build/css/app.css';

import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext.tsx';

//Componentes
import { Navbar } from './components/Navbar';

function App() {
  const {theme, setTheme} = useContext(ThemeContext);
  console.log('Hola desde App'+theme);

  return (
    <div className="App">
      <Navbar />  
    </div>

  );
}

export default App;
