import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Login = () => {
    const history = useHistory();

    const [inputs, setInputs] = useState({ correo: "", contraseña: "" });
    const [mensaje, setMensaje] = useState();
    const [mensaje2, setMensaje2] = useState();
    const [loading, setLoading] = useState(false);

    const { correo, contraseña } = inputs;

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!contraseña && !correo) {
            setMensaje("Todos los campos deben estar llenos");
        } else if (!correo) {
            setMensaje("Debe ingresar un correo");
        } else if (!contraseña) {
            setMensaje("Debe ingresar una contraseña");
        } else if (correo !== "" && contraseña !== "") {
            const Usuario = {
                correo,
                contraseña,
            };
            setLoading(true);
            await axios
                .post("http://localhost:3001/login", Usuario)
                .then(({ data }) => {
                    setMensaje2(data.mensaje);
                    setInputs({ correo: "", contraseña: "" });
                    setTimeout(() => {
                        setMensaje("");
                        history.push(`/home/${data?.usuario.id}`);
                        setLoading(false);
                    }, 1500);
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
        <div id='app-login'>
            <h1 className='nombre-pagina text'>
                Login
            </h1>

            <p className='descripcion-pagina text'>Inicia sesión con tus datos</p>

            {mensaje && <div className="error alerta">
                {mensaje}
            </div>}
            {mensaje2 && <div className="exito alerta">
                {mensaje2}
            </div>}


            <form className='formulario' onSubmit={(e) => onSubmit(e)}>
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
                    {loading ? "Cargando..." : "Iniciar Sesión"}
                </button>
            </form>

            <div className="acciones">
                <a href="/crear-cuenta" className='text'>¿Aún no tienes una cuenta? <span className='texto_azul'> Crear una</span></a>
                <a href='/olvidaste' className='text'>¿Olvidaste tu contraseña?<span className='texto_azul'> Recuperar</span></a>
            </div>
        </div>
    )
}

export default Login;