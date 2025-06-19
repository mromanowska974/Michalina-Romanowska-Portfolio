'use client';

import React from 'react';
import styles from './scrollable.module.css';
import { motion } from 'framer-motion';

function Scrollable({ children, className, axis, portraitAxis, ...props}) {
    const container = {
        start: {
            x: 0
        },
        finish: {
            x: 0,
            transition: { staggerChildren: 0.2 }
        }
    }

    return (
        <motion.div 
            className={`${styles.container} ${className} ${axis ? styles[axis] : undefined} ${portraitAxis ? styles[portraitAxis] : undefined}`} 
            variants={container}
            initial="start"
            animate="finish"
            {...props}
        >
            { children }
        </motion.div>
    );
}

export default Scrollable;