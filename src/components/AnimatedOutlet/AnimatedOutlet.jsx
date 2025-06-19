'use client';

import React from 'react';
import { motion } from 'framer-motion';

function AnimatedOutlet({children, ...props}) {
    return (
        <motion.div
            initial={{ opacity: 0, x:  50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedOutlet;