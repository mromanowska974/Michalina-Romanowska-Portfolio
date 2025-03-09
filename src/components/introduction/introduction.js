import React, { useEffect } from 'react';
import styles from './introduction.module.css';
import ImageWrapper from '../UI/ImageWrapper/ImageWrapper';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
  const {t: translate, i18n} = useTranslation();

  // useEffect(() => {
  //   i18n.changeLanguage(navigator.language)
  // }, [])

  return (
    <div className={styles.container}>
      <ImageWrapper width={'calc(20vh + 20vw)'} height={'calc(20vh + 20vw)'}/>
      <div className={styles.introduction}>
        <h1>Michalina Romanowska</h1>
        <p>
          {translate("introText")}
        </p>
      </div>
    </div>
  );
}

export default Introduction;