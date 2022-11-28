import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {

  // Funcionalidad Tabs
  let paso = 1;
  const pasoInicial = 1;
  const pasoFinal = 3;

  document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
  });
  function iniciarApp() {
    mostrarSeccion(); //Muestra y oculta las secciónes
    tabs(); //Cambia la sección cuando se presionen los tabs
    botonesPaginador(); // Agrega o quita los botones de paginador
    paginaSiguiente();
    paginaAnterior(); 
  }
  function mostrarSeccion() {
    // Ocultar la sección que tenga la clase de mostrar
    const seccionAnterior = document.querySelector('.mostrar');
    if(seccionAnterior){
      seccionAnterior.classList.remove('mostrar')
    }

    // Seleccionar la sección con el paso...
    const seccion = document.querySelector(`#paso-${paso}`);
    seccion.classList.add('mostrar');

    // Quita la clase de actual al tab anterior
    const tabAnterior = document.querySelector('.actual');
    if(tabAnterior) {
      tabAnterior.classList.remove('actual');
    }

    //Resalta el tab actual
    const tab = document.querySelector(`[data-paso="${paso}"]`);
    tab.classList.add('actual');
  }
  function botonesPaginador() {
    const paginaAnterior = document.querySelector('#anterior');
    const paginaSiguiente = document.querySelector('#siguiente');

    if(paso === 1) {
      paginaAnterior.classList.add('ocultar');
      paginaSiguiente.classList.remove('ocultar');
    } else if(paso === 3) {
      paginaAnterior.classList.remove('ocultar');
      paginaSiguiente.classList.add('ocultar');
    } else {
      paginaAnterior.classList.remove('ocultar');
      paginaSiguiente.classList.remove('ocultar');
    }

    mostrarSeccion();
  }
  function paginaAnterior() {
    const paginaAnterior = document.querySelector('#anterior');
    paginaAnterior.addEventListener('click', function() {
      if(paso <= pasoInicial) return;
      paso--;

      botonesPaginador();
    });
  }
  function paginaSiguiente() {
    const paginaSiguiente = document.querySelector('#siguiente');
    paginaSiguiente.addEventListener('click', function() {
      if(paso >= pasoFinal) return;
      paso++;

      botonesPaginador();
    });
  }
  function tabs(){
    const botones = document.querySelectorAll('.tabs button');

    botones.forEach( boton => {
      boton.addEventListener('click', function(e) {
        paso = parseInt(e.target.dataset.paso);

        mostrarSeccion();

        botonesPaginador();
      })
    })
  }

  // App
  const [name, setName] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:3001/user`, {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => setName(data.nombre))
        .catch((error) => console.error(error));
    }
  }, [token]);

  return (
    <div>
      <p>
        {name ? `Hola, ${name}` : ""}
      </p>

      <h1 className="nombre-pagina text">
        {name ? "Crear Nueva Cita" : "Inicia Sesión primero para agendar tu cita"}
      </h1>

      <p className='descripcion-pagina text'>
        {name ? "Elige tus servicios y coloca tus datos" : ""}
      </p>

      <div id="app">

        <nav className="tabs">
          <button className="actual" type="button" data-paso="1">Servicios</button>
          <button type="button" data-paso="2">Información Cita</button>
          <button type="button" data-paso="3">Resumen</button>
        </nav>


        <div id="paso-1" className="seccion">
          <h2 className="text">
            {name ? "Servicios" : ""}
          </h2>

          <p className="text text-center">
            {name ? "Elige tus servicios a continuación" : ""}
          </p>

          <div id="servicios" className="listado-servicios">
            <div className="servicio">
              <p className="nombre-servicio">
                Corte de Pelo Hombre
              </p>
              <p className="precio-servicio">
                $20.000
              </p>
            </div>{/* .servicio */}

            <div className="servicio">
              <p className="nombre-servicio">
                Corte + Barba
              </p>
              <p className="precio-servicio">
                $25.000
              </p>
            </div>{/* .servicio */}

            <div className="servicio">
              <p className="nombre-servicio">
                Perfilado de Barba
              </p>
              <p className="precio-servicio">
                $10.000
              </p>
            </div>{/* .servicio */}

            <div className="servicio">
              <p className="nombre-servicio">
                Afeitado Completo
              </p>
              <p className="precio-servicio">
                $15.000
              </p>
            </div>{/* .servicio */}

            <div className="servicio">
              <p className="nombre-servicio">
                Corte de Cabello Mujer
              </p>
              <p className="precio-servicio">
                $26.000
              </p>
            </div>{/* .servicio */}

            <div className="servicio">
              <p className="nombre-servicio">
                Mascarilla de Carbón
              </p>
              <p className="precio-servicio">
                $10.000
              </p>
            </div>{/* .servicio */}

            <div className="servicio">
              <p className="nombre-servicio">
                Perfilado de Ceja
              </p>
              <p className="precio-servicio">
                $6.000
              </p>
            </div>{/* .servicio */}

            <div className="servicio">
              <p className="nombre-servicio">
                Mascarilla Exfoliante
              </p>
              <p className="precio-servicio">
                $5.000
              </p>
            </div>{/* .servicio */}

          </div>
        </div>

        <div id="paso-2" className="seccion">
          <h2 className="text">
            {name ? "Tus Datos y Cita" : ""}
          </h2>

          <p className="text text-center">
            {name ? "Coloca tus datos y fecha de tu cita" : ""}
          </p>

          <form className="formulario">
            <div className="campo">
              <label htmlFor="nombre">Nombre:</label>
              <input
                id="nombre"
                type="text"
                placeholder="Tu Nombre"
                value={name}
                disabled
              />
            </div> {/* .campo */}

            <div className="campo">
              <label htmlFor="fecha">Fecha:</label>
              <input
                id="fecha"
                type="date"
              />
            </div> {/* .campo */}

            <div className="campo">
              <label htmlFor="hora">Hora:</label>
              <input
                id="hora"
                type="time"
              />
            </div> {/* .campo */}
          </form>
        </div>

        <div id="paso-3" className="seccion">
          <h2 className="text">
            {name ? "Resumen" : ""}
          </h2>

          <p className="text text-center">
            {name ? "Verifica que la información sea correcta" : ""}
          </p>
        </div>

        <div className="paginacion">
          <button
            id="anterior"
            className="boton"
          >&laquo; Anterior</button>

          <button
            id="siguiente"
            className="boton"
          >Siguiente &raquo;</button>
        </div>
        
      </div>
    </div>
  )
}

export default Home;