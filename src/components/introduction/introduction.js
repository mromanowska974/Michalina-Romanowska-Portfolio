import React from 'react';
import PropTypes from 'prop-types';
import styles from './introduction.module.css';

const Introduction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrap}></div>
        <div className={styles.introduction}>
        <h1>Michalina Romanowska</h1>
        <p>Junior Web Developer with passion, curiosity and readiness to gain new experience.</p>
      </div>
    </div>
  );
}

Introduction.propTypes = {};

Introduction.defaultProps = {};

export default Introduction;
