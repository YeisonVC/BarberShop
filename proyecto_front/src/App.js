import React from 'react';
import './build/css/app.css';

//Componentes
import { Navbar } from './components/Navbar';

function App() {
  console.log(Navbar.tema);

  return (
    <div className="App">
      <Navbar />    
      <div>
      <h2 data-theme={Navbar.thema}>hola mundo</h2>
      <h2>hola mundo</h2>
      <h2>hola mundo</h2>
      <h2>hola mundo</h2>
      <h2>hola mundo</h2>
    </div>
    </div>

    
  );
}

export default App;
