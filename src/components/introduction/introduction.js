import React from 'react';
import styles from './introduction.module.css';
import ImageWrapper from '../UI/ImageWrapper/ImageWrapper';

const Introduction = () => {
  return (
    <div className={styles.container}>
      <ImageWrapper width={'calc(20vh + 20vw)'} height={'calc(20vh + 20vw)'}/>
      <div className={styles.introduction}>
        <h1>Michalina Romanowska</h1>
        <p>Junior Web Developer with passion, curiosity and readiness to gain new experience.</p>
      </div>
    </div>
  );
}

export default Introduction;