import React from 'react';
import styles from './technologies.module.css';

function Technologies({ technologies }) {
    return (
        <div className={styles.technologies}>
            <ul>
                {technologies.map(tech => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>           
        </div>
    );
}

export default Technologies;