import React from 'react';
import styles from './technologies.module.css';

function Technologies({ technologies }) {
    return (
        <span className={styles.span}>
            <ul>
                {technologies.map(tech => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>           
        </span>
    );
}

export default Technologies;