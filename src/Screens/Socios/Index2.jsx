import React from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Fragment } from "react";
import HeaderSection from "../../components/layout/Header/Header";
import FooterSection from "../../components/layout/Footer/Footer";
import Boton from "../../components/SharedComponents/Button";
import styles from './Index.module.css';
import Tabla from "../../components/Table/table";
import TablaCabecera from "../../components/Table/TableHead";

const Socios = () => {
    // const socios = useSelector((state) => state.Reduc.socios);
    // const dispatch = useDispatch();
    return (
        <div>
            <HeaderSection />
            <div className={styles.botProd}>
                <Link to="/addsocio">
                    <Boton
                        tipo='socABM'
                        texto='Agregar socio' />
                </Link>
            </div>
            <TablaCabecera />
            <Tabla />
            <FooterSection />
        </div>
    );

}

export default Socios;