import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';

function Button({text, link, ...props}) {
    return (
        <>
            {link ? 
                <Link className={styles.btn} {...props}>
                    {text}
                </Link> : 
                <button className={styles.btn} {...props}>
                    {text}
                </button>
            }
        </>
        
    );
}

export default Button;