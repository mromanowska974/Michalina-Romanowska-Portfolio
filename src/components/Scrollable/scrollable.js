import React from 'react';
import styles from './scrollable.module.css';

function Scrollable({ children, className, axis, portraitAxis, ...props}) {
    return (
        <div className={`${styles.container} ${className} ${axis ? styles[axis] : undefined} ${portraitAxis ? styles[portraitAxis] : undefined}`} {...props}>
            { children }
        </div>
    );
}

export default Scrollable;