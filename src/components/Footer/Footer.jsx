'use client';

import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2025 Michalina Romanowska</p>
            <div className={styles.websites}>
                <motion.a 
                    whileHover={{ scale: [1, 0.9, 1.1, 1] }}
                    transition={{ duration: 0.3 }}
                    href='https://www.linkedin.com/in/michalina-romanowska-281557227/'
                >
                    <FontAwesomeIcon 
                        icon={faLinkedin}
                        size='2x'
                    />
                </motion.a>
                <motion.a 
                    whileHover={{ scale: [1, 0.9, 1.1, 1] }}
                    transition={{ duration: 0.3 }}
                    href='https://github.com/mromanowska974'
                >
                    <FontAwesomeIcon 
                        icon={faGithub}
                        size='2x'
                    />
                </motion.a>
            </div>
        </footer>
    );
}

export default Footer;