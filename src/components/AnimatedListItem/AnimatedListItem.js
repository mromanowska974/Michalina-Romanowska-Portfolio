'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './AnimatedListItem.module.css';

function AnimatedListItem({ children, key, data, ...props }) {
    return (
        <Link className={styles.clickableContainer} href={`/projects/${data.slug}?id=${data.project.id}`}>
            <motion.li 
                key={key}
                variants={{
                    start: {y: 0},
                    finish: {y: [-10, -30, 0]}
                }}
                {...props}
            >
                { children }
            </motion.li>
        </Link>
    );
}

export default AnimatedListItem;