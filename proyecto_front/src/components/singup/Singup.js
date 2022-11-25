import React from 'react'; 

import { request } from "../helper/helper";
import Loading from "../loading/loading";


export default class Singup extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            empleado: {
                usuario: '',
                telefono: '',
                mail: '',
                pass: '',
            },
        };
    }
    setValue(inicio, value) {
        this.setState({
            empleado: {
                ...this.state.empleado,
                [inicio]: value,
            },
        });
    }

    guardarEmpleados() {
        this.setState({ loading: true });
        request
        .post('/usuarios/crear-cuenta', this.state.empleado)
        .then( (response) => {
            if(response.data.exito){
                console.log('AÑADIDO')
                this.props.history.push(window.open("/login"));
            }
            this.setState({ loading: false });
        })
        .catch( (err) => {
            console.error(err);
            this.setState({ loading: true });
        });
    }

    render() {
        return (
            <div className='background'>
                <Loading show = { this.state.loading} />
                <h1 className='nombre-pagina text'>
                    Crear Cuenta
                </h1>

                <p className='descripcion-pagina text'>Llena el siguiente formulario para crear una cuenta</p>

                <form className='formulario'>
                    <div className="campo">
                        <label className='text' htmlFor='nombre'>Nombre:</label>
                        <input
                            type="text"
                            id='nombre'
                            name="nombre"
                            placeholder='Tu Nombre'
                            onChange = {(e) => this.setValue('usuario', e.target.value)}
                        />
                    </div>{/* .campo */}

                    <div className="campo">
                        <label className='text' htmlFor='telefono'>Teléfono:</label>
                        <input
                            type="tel"
                            id='telefono'
                            name="telefono"
                            placeholder='Tu Teléfono'
                            onChange = {(e) => this.setValue('telefono', e.target.value)}
                        />
                    </div>{/* .campo */}

                    <div className="campo">
                        <label className='text' htmlFor='email'>E-mail:</label>
                        <input
                            type="email"
                            id='email'
                            name="email"
                            placeholder='Tu E-mail'
                            onChange = {(e) => this.setValue('mail', e.target.value)}
                        />
                    </div>{/* .campo */}

                    <div className="campo">
                        <label className='text' htmlFor='password'>Password:</label>
                        <input
                            type="password"
                            id='password'
                            name="password"
                            placeholder='Tu Password'
                            onChange = {(e) => this.setValue('pass', e.target.value)}
                        />
                    </div>{/* .campo */}

                    <input type="submit" className="boton" value="Crear Cuenta" onClick = { () => console.log( this.guardarEmpleados() )}/>
                </form>

                <div className="acciones">
                    <a href="/" className='text'>¿Ya tienes una cuenta? <span className='texto_azul'> Iniciar Sesión</span></a>
                    <a href='/olvidaste' className='text'>¿Olvidaste tu contraseña?<span className='texto_azul'> Recuperar</span></a>
                </div>
            </div>
        )
    }
}
