'use client';

import React, { useEffect, useState } from 'react';
import AnimatedOutlet from "../../components/AnimatedOutlet/AnimatedOutlet";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from './Root.module.css';

function Root({ children }) {
    const [orientation, setOrientation] = useState('');

    useEffect(() => {
        function updateOrientation(){
            setOrientation(window.screen.orientation.type);
        }

        console.log(orientation)

        updateOrientation();
        window.addEventListener("orientationchange", updateOrientation);

        return () => {
            window.removeEventListener("orientationchange", updateOrientation)
        }
    }, [orientation])

    return (
        <div id={styles.root}>
            {orientation === 'portrait-primary' || orientation === 'portrait-secondary'
                ? <HamburgerMenu />
                : <Navbar />
            }
                <AnimatedOutlet className={styles.content}>
                    {children}
                </AnimatedOutlet>
            <Footer />
        </div>
    );
}

export default Root;