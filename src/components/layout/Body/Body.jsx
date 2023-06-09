import React from 'react';
import styles from './Body.module.css';

const BodySection = () => {
    return (
        <div className={styles.cuerpo}>
            <h1 className={styles.h1}>SISTEMA PARA CONTROL DE ASISTENCIA AL GYM</h1>
            <h2 className={styles.h2}>Mollit consequat nisi occaecat officia in exercitation reprehenderit culpa labore commodo consequat.</h2>
            <p className={styles.texto}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nobis ullam laudantium tempora unde magni qui accusantium similique obcaecati ea nemo, nam, ducimus alias eveniet quidem sint rem ex sunt.</p>
            <p className={styles.texto}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim officiis ducimus eaque in dolores quam. Quos quis labore quia. Mollitia deleniti fugit quo quae necessitatibus quam animi odit maxime soluta.</p>
        </div>
    );
}

export default BodySection;