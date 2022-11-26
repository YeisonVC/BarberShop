import React from 'react'; 
import axios from 'axios';
import {isNull} from 'util';
import Cookies from 'universal-cookie';
import {calculaExtracionSesion} from '../helper/helper';
import app from '../../app.json';
import Loading from '../loading/loading';

const {APIHOST} = app;
const cookies = new Cookies();

export default class Login extends React.Component { 
    constructor(props) {
        super(props);
        this.state={
            loading: false,
            usuario: '',
            pass: '',
        };
    }
    iniciarSesion(){
        this.setState({loading: true});
        
        axios.post(`${APIHOST}/usuarios/login`, {
            usuario: this.state.usuario, 
            pass: this.state.pass, 
        })
        .then((response) => {
            
            if(this.state.usuario === '' && this.state.pass === ''){
                const mensaje = "Debe ingresar un usuario y una contraseña";
                const tipoAlerta = "error";
                alerta(mensaje, tipoAlerta);
            } else if(this.state.usuario === ''){
                const mensaje = "Debe ingresar un usuario";
                const tipoAlerta = "error";
                alerta(mensaje, tipoAlerta);
            } else if(this.state.pass === ''){
                const mensaje = "Debe ingresar una contraseña";
                const tipoAlerta = "error";
                alerta(mensaje, tipoAlerta);
            } else if(isNull (response.data.token) ) {
                const mensaje = "Usuario y/o contraseña incorrecto";
                const tipoAlerta = "error";
                alerta(mensaje, tipoAlerta);
            } else {
                cookies.set('_s', response.data.token, {
                    path: "/",
                    expires: calculaExtracionSesion(),
                });
                this.props.history.push(window.open("/home"));
            }
            this.setState({loading:false});
            
        })
        .catch((err) => {
            console.log(err);
            this.setState({loading:false});
        });
    }

    render() {
        return (
            <div id='app-login'>
                <Loading show={this.state.loading}/>
                <h1 className='nombre-pagina text'>
                    Login
                </h1>

                <p className='descripcion-pagina text'>Inicia sesión con tus datos</p>

                

                <form className='formulario'>
                    <div className='campo'>
                        <label className='text' htmlFor='usuario'>Usuario:</label>
                        <input
                            type="text"
                            id='usuario'
                            placeholder='Tu Usuario'
                            name="usuario"
                            onChange={(e) =>
                                this.setState({ usuario: e.target.value })} />
                    </div>

                    <div className='campo'>
                        <label className='text' htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id='password'
                            name="password"
                            placeholder='Tu Contraseña'
                            onChange={(e) =>
                                this.setState({ pass: e.target.value })} />
                    </div>

                    <input className="boton" type="button" value="Iniciar Sesión"
                        onClick={() => {
                            this.iniciarSesion();
                        }} />
                </form>

                <div className="acciones">
                    <a href="/crear-cuenta" className='text'>¿Aún no tienes una cuenta? <span className='texto_azul'> Crear una</span></a>
                    <a href='/olvidaste' className='text'>¿Olvidaste tu contraseña?<span className='texto_azul'> Recuperar</span></a>
                </div>
            </div>
        )
    }
}

function alerta(mensaje, tipoAlerta) {
    const newNode = document.createElement("div")
    newNode.id = "alerta";
    newNode.classList.add(tipoAlerta);
    const textNode = document.createTextNode(mensaje);  
    newNode.appendChild(textNode);

    const list = document.getElementById("app-login");
    list.insertBefore(newNode, list.children[3]);
}




