import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSoc } from "../../redux/Socios/socio.actions";
import SocInput from "../SharedComponents/Input";
import Boton from "../SharedComponents/Button"
import styles from './Form.module.css';

const Formulario = () => {
    const [socios, setSocios] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const addSocio = (socio) => {
        setSocios({
            // ...socios,
            dni: socio.dni,
            name: socio.name,
            apellido: socio.apellido,
            tel: socio.tel,
            mail: socio.mail,
            fechaNac: socio.fechaNac
        });
    };

    const crearSocio = (socio) => {
        console.log(socio)
        // fetch(process)
    }

    const { register, formState: { errors }, handleSubmit } = useForm()
    const socio = (data) => {
        addSocio(data)
        console.log(process.env.REACT_APP_URL)
        crearSocio(data)
        // post("/add", data);
        dispatch(addSoc(data));
        navigate('/socios')
    }

    return (
        <div className={styles.frmSoc}>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(socio)}>
                <div>
                    <label>Dni</label>
                    <SocInput
                        register={register}
                        type="text"
                        placeholder="dni"
                        name="dni"
                        rules={{
                            required: 'ingrese número de Dni'
                        }}
                    />
                    {errors.id && <span className={styles.claseError}>{errors.id.message}</span>}
                </div>
                <div>
                    <label>Nombre:</label>
                    <SocInput
                        register={register}
                        type="text"
                        placeholder="nombre"
                        name="name"
                        rules={{
                            required: 'ingrese nombre'
                        }}
                    />
                    {errors.name && <span className={styles.claseError}>{errors.name.message}</span>}
                </div>
                <div>
                    <label>Apellido:</label>
                    <SocInput
                        register={register}
                        type="text"
                        placeholder="apellido"
                        name="surename"
                        rules={{
                            required: 'ingrese apellido'
                        }}
                    />
                    {errors.name && <span className={styles.claseError}>{errors.name.message}</span>}
                </div>
                <div>
                    <label>Tel:</label>
                    <SocInput
                        register={register}
                        type="text"
                        placeholder="tel"
                        name="tel"
                        rules={{
                            required: 'ingrese telefono'
                        }}
                    />
                    {errors.price && <span className={styles.claseError}>{errors.price.message}</span>}
                </div>
                <div>
                    <label>Mail:</label>
                    <SocInput
                        register={register}
                        type="text"
                        placeholder="mail"
                        name="mail"
                        rules={{
                            required: 'ingrese e-mail'
                        }}
                    />
                    {errors.name && <span className={styles.claseError}>{errors.name.message}</span>}
                </div>
                <div>
                    <label>Fecha de nacimiento:</label>
                    <SocInput
                        register={register}
                        type="text"
                        placeholder="fecNac"
                        name="fecNac"
                        rules={{
                            required: 'ingrese fecha de nacimiento'
                        }}
                    />
                    {errors.name && <span className={styles.claseError}>{errors.name.message}</span>}
                </div>

                <Boton
                    tipo='socABM'
                    texto='Enviar' />
            </form>
        </div>
    )
}

export default Formulario;