import React from 'react';
import styles from './select.module.css';

function Select({name, options, bgColor, ...props}) {
    return (
        <select className={`${styles.select} ${styles[bgColor]}`} id={name} name={name} {...props}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.description}
                </option>
            ))}
        </select>
    );
}

export default Select;