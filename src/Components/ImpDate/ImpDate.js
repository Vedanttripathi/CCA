import React from 'react';
import styles from './ImpDate.module.css';

const ImpDate = (props) =>(
    <div className={styles.box}>
        <div className={styles.imagebox}></div>
        <div className={styles.datebox}><p>{props.date}</p></div>
        <div className={styles.datedesc}><p>{props.desc}</p></div>
    </div>
);

export default ImpDate;