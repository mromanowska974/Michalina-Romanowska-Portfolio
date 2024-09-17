import React from 'react';
import styles from './main-page.module.css';
import '../../fonts/Sacramento-Regular.ttf';
import { motion } from 'framer-motion';

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
          <button style={{'--i': '0s'}}>About Me</button>
          <button style={{'--i': '1s'}}>Projects</button>
          <button style={{'--i': '2s'}}>CV</button>
          <button style={{'--i': '3s'}}>Contact</button>
        </div>
      </div>
      <motion.div 
        className={styles.content}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        <div className={styles.imageWrap}></div>
        <div className={styles.introduction}>
          <h1>Michalina Romanowska</h1>
          <p>Junior Web Developer with passion, curiosity and readiness to gain new experience.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default MainPage;
