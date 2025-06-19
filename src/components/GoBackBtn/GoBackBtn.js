'use client';

import Link from 'next/link';
import React from 'react';
import styles from './GoBackBtn.module.css';
import { motion } from 'framer-motion';

function GoBackBtn({ text, href }) {
    return (
        <Link href={href} className={styles.backLink}> 
            <motion.p
                whileHover={{ scale: [1, 0.95, 1.05, 1]}}
                transition={{ duration: 0.3 }}
            >
                {text}
            </motion.p>
            <motion.div 
                className={styles.underline} 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 1}}
            />
        </Link>
    );
}

export default GoBackBtn;