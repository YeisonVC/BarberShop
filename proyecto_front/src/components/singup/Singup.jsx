import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
    const history = useHistory();

    const [inputs, setInputs] = useState({
        correo: "",
        nombre: "",
        telefono: "",
        contraseña: "",
    });

    const [mensaje, setMensaje] = useState();
    const [mensaje2, setMensaje2] = useState();
    const [loading, setLoading] = useState(false);
    const { correo, nombre, telefono, contraseña } = inputs;

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if(!nombre && !telefono && !contraseña && !correo){
            setMensaje("Todos los campos deben estar llenos");
        }else if(!nombre){
            setMensaje("Debe ingresar un nombre");
        } else if(!telefono){
            setMensaje("Debe ingresar un teléfono");
        } else if(!correo){
            setMensaje("Debe ingresar un correo");
        } else if(!contraseña){
            setMensaje("Debe ingresar una contraseña");
        }else if (nombre !== "" && contraseña !== "" && correo !== "" && telefono !== "") {
            const Usuario = {
                nombre,
                correo,
                telefono,
                contraseña,
            };
            setLoading(true);
            await axios
                .post("http://localhost:3001/register", Usuario)
                .then(({data}) => {
                    setInputs({ nombre: "", contraseña: "", correo: "", telefono: "" });
                    setMensaje2(data.mensaje);
                    setTimeout(() => {
                        history.push('/login');
                        setLoading(false);
                    }, 3000);
                })
                .catch((error) => {
                    console.error(error);
                    setMensaje("Hubo un error");
                    setTimeout(() => {
                        setMensaje("");
                        setLoading(false);
                    }, 1500);
                });
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    };

    return (
        <div className='background app-login2'>
            <h1 className='nombre-pagina text'>
                Crear Cuenta
            </h1>

            <p className='descripcion-pagina text'>Llena el siguiente formulario para crear una cuenta</p>

            {mensaje && <div className="error alerta">
                {mensaje}
            </div>}
            {mensaje2 && <div className="exito alerta">
                {mensaje2}
            </div>}

            <form className='formulario' onSubmit={(e) => onSubmit(e)}>
                <div className="campo">
                    <label className='text' htmlFor='nombre'>Nombre:</label>
                    <input
                        type="text"
                        id='nombre'
                        name="nombre"
                        placeholder='Tu Nombre'
                        autoComplete="off"
                        onChange={(e) => onChange(e)}
                    />
                </div>{/* .campo */}

                <div className="campo">
                    <label className='text' htmlFor='telefono'>Teléfono:</label>
                    <input
                        type="tel"
                        id='telefono'
                        name="telefono"
                        placeholder='Tu Teléfono'
                        autoComplete="off"
                        onChange={(e) => onChange(e)}
                    />
                </div>{/* .campo */}

                <div className="campo">
                    <label className='text' htmlFor='correo'>E-mail:</label>
                    <input
                        type="email"
                        id='correo'
                        name="correo"
                        placeholder='Tu E-mail'
                        autoComplete="off"
                        onChange={(e) => onChange(e)}
                    />
                </div>{/* .campo */}

                <div className="campo">
                    <label className='text' htmlFor='contraseña'>Password:</label>
                    <input
                        type="password"
                        id='contraseña'
                        name="contraseña"
                        placeholder='Tu Password'
                        autoComplete="off"
                        onChange={(e) => onChange(e)}
                    />
                </div>{/* .campo */}
                <button className="boton" type="submit">
                    {loading ? "Cargando..." : "Registrarme"}
                </button>
            </form>

            <div className="acciones">
                <a href="/" className='text'>¿Ya tienes una cuenta? <span className='texto_azul'> Iniciar Sesión</span></a>
                <a href='/olvidaste' className='text'>¿Olvidaste tu contraseña?<span className='texto_azul'> Recuperar</span></a>
            </div>
            
        </div>
        
    )
}

export default Register;
