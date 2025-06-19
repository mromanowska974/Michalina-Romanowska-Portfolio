'use client';

import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Button({text, link, ...props}) {
    return (
        <motion.div
            whileHover={{ scale: [1, 0.95, 1.05, 1] }}
            transition={{ duration: 0.3 }}
            className={styles.animatingContainer}
        >
            {link ? 
                <Link className={styles.btn} {...props}>
                    {text}
                </Link> : 
                <button className={styles.btn} {...props}>
                    {text}
                </button>
            }
        </motion.div>
        
    );
}

export default Button;