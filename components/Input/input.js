import React from 'react';
import styles from './input.module.css';

function Input({label, name, textarea, ...props}) {
    return (
        <div className={styles.inputBox}>
            <label htmlFor={name}>{label}</label>
            {
                textarea ? <textarea id={name} name={name} {...props}></textarea> 
                : <input id={name} name={name} {...props}/>
            }           
        </div>
    );
}

export default Input;