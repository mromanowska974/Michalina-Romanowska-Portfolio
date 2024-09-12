import React from 'react';
import styles from './main-page.module.css';
import '../../fonts/Sacramento-Regular.ttf';

const MainPage = () => (
  <div className={styles.container}>
    <div className={styles.introduction}>
      <p>Michalina Romanowska</p>
    </div>
    <div className={styles.content}>
      <div className={styles.imageWrap}></div>
      <div className={styles.frontUp}>
        <p>Michalina</p>
      </div>
      <div className={styles.frontDown}>
        <p>Romanowska</p>
      </div>
      <div className={styles.frame}></div>
    </div>
    <div className={styles.btnBox}>
      <button style={{'--i': '0s'}}>About Me</button>
      <button style={{'--i': '1s'}}>Projects</button>
      <button style={{'--i': '2s'}}>CV</button>
      <button style={{'--i': '3s'}}>Contact</button>
    </div>
  </div>
);

export default MainPage;
