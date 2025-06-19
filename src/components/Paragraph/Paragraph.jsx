import React from 'react';
import styles from './Paragraph.module.css';
import { motion } from 'framer-motion';

function Paragraph({title, content, isFirst}) {
    return (
        <motion.div
            variants={{
                start: { opacity: 0, x: 60 },
                finish: { opacity: 1, x: 0}
            }}
            transition={{ duration: 0.8 }}
        >
            <hr className={styles.line} hidden={isFirst}/>

            <h2>{title}</h2>
            <div>{content}</div>
        </motion.div>
    );
}

export default Paragraph;