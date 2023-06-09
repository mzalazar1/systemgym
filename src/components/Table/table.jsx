// import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Boton from "../SharedComponents/Button";
import styles from './Table.module.css';
import { removeSoc } from '../../redux/Socios/socio.actions';

const Tabla = () => {
    const socios = useSelector((state) => state.Reduc.socios);
    const dispatch = useDispatch();
    return (
        <div>

            {socios.length > 0 ? (
                <div>
                    {socios.map((socio) => (
                        <table className={styles.Table} key={socio.id}>
                            <tbody>
                                <tr>
                                    <td className={styles.tdDatos}>{socio.id}</td>
                                    <td className={styles.tdDatos}>{socio.name}</td>
                                    <td className={styles.tdDatos}>{socio.price}</td>
                                    <td className={styles.tdDatos}>{socio.stock}</td>
                                    <td className={styles.tdDatos}>{socio.description}</td>
                                    <td className={styles.tdBotones}>
                                        <Link to={`/edit/${socio.id}`}>
                                            <Boton
                                                tipo='editProd'
                                                texto='Editar' />
                                        </Link>
                                        <button className={styles.elimSoc} onClick={() => dispatch(removeSoc(socio.id))}> Eliminar </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    ))}
                </div>
            ) : (
                <h4>No hay socios cargados</h4>
            )}
        </div>
    );
};
export default Tabla;