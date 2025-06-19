import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './NavLink.module.css';

function NavLink({ name, href, isActive = false, ...props}) {
    return (
        <Link className={styles.link} href={href} {...props}>
            <motion.p
                whileHover={{ scale: [1, 0.95, 1.05, 1] }}
                transition={{ duration: 0.3 }}
            >
                { name }
            </motion.p>
            {isActive 
                ? <motion.div className={styles.activeBar} layoutId='activeTab'/>
                : <div className={styles.empty}/>
            }
        </Link>
    );
}

export default NavLink;