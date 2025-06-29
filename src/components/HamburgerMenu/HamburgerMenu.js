'use client';

import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import styles from './HamburgerMenu.module.css';
import Navbar from '../Navbar/Navbar';

function HamburgerMenu(props) {
    const [hamburgerIsActive, setHamburgerIsActive] = useState();
    
    function handleHamburger(){
        setHamburgerIsActive(!hamburgerIsActive);
    }

    return (
        <motion.div 
            className={styles.container}
            variants={{
                activated: { y: 0},
                deactivated: { y: '-42.5vh'}
            }}
            initial={'deactivated'}
            animate={hamburgerIsActive ? 'activated' : 'deactivated'}
            transition={{
                type: 'tween'
            }}
        >
            <button onClick={handleHamburger} className={styles.hamburger}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <Navbar />
        </motion.div>
    );
}

export default HamburgerMenu;