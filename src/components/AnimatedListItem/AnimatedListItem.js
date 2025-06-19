'use client';

import React from 'react';
import { motion } from 'framer-motion';

function AnimatedListItem({ children, key, ...props }) {
    return (
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
    );
}

export default AnimatedListItem;