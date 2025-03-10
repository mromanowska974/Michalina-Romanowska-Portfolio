import React from 'react';
import styles from './main-page.module.css';
import '../../fonts/Sacramento-Regular.ttf';
import { Outlet } from 'react-router-dom';
import Navbar from '../UI/Navbar/Navbar';
import Footer from '../UI/Footer/Footer';

const MainPage = () => {
  

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        {/* <AnimatedOutlet/> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
