import React from 'react';
import styles from './main-page.module.css';
import '../../fonts/Sacramento-Regular.ttf';
import { Link, Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to={''}>MR</Link>
        </div>
        <div className={styles.btnBox}>
          <Link to={'about-me'}>About Me</Link>
          <Link to={'projects'}>Projects</Link>
          <Link>CV</Link>
          <Link to={'contact'}>Contact</Link>
        </div>
      </div>
      <div className={styles.content}>
        {/* <AnimatedOutlet/> */}
        <Outlet />
      </div>
    </div>
  );
}

export default MainPage;
