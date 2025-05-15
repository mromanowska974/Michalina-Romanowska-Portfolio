import React from 'react';
import styles from './title.module.css';

function Title({ children }) {
    return (
        <h1 className={styles.title}>
            { children }
        </h1>
    );
}

export default Title;