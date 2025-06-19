'use client';

import React from 'react';
import AnimatedOutlet from '../../components/AnimatedOutlet/AnimatedOutlet';
import styles from './layout.module.css';

function ProjectsLayout({ children }) {
    return (
        <AnimatedOutlet className={styles.layout}>
            { children }
        </AnimatedOutlet>
    );
}

export default ProjectsLayout;