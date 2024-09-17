import React from 'react';
import styles from './main-page.module.css';
import '../../fonts/Sacramento-Regular.ttf';
import { motion } from 'framer-motion';
import { Link, Outlet } from 'react-router-dom';

const MainPage = () => {
  const initial = {
    opacity: 0
  }

  const animate = {
    opacity: 1
  }

  const transition = {
    ease: "easeOut", 
    duration: 2
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <p>MR</p>
        </div>
        <div className={styles.btnBox}>
          <Link to={'about-me'}>About Me</Link>
          <Link to={'projects'}>Projects</Link>
          <Link>CV</Link>
          <Link to={'contact'}>Contact</Link>
        </div>
      </div>
      <motion.div 
        className={styles.content}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        <Outlet/>
      </motion.div>
    </div>
  );
}

export default MainPage;
