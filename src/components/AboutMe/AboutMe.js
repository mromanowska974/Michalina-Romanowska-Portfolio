import React from 'react';
import styles from './AboutMe.module.css';
import ImageWrapper from '../UI/ImageWrapper/ImageWrapper.jsx';
import { useTranslation } from 'react-i18next';

function AboutMe() {
  const { t: translate } = useTranslation();

  const softSkills = translate('aboutMe.skills.soft.list');
  const technicalSkills = translate('aboutMe.skills.technical.list');

  return (
    <div className={styles.container}>
      <ImageWrapper width={'calc(15vh + 15vw)'} height={'calc(15vh + 15vw)'}/>
      <div className={styles.content}>
        <h1>{translate('aboutMe.title')}</h1>

        <h2>{translate('aboutMe.whoAmI.title')}</h2>
        <p>{translate('aboutMe.whoAmI.description')}</p>

        <h2>{translate('aboutMe.whyIChose.title')}</h2>
        <p>{translate('aboutMe.whyIChose.description')}</p>

        <h2>{translate('aboutMe.whatAmIDoingNow.title')}</h2>
        <p>{translate('aboutMe.whatAmIDoingNow.description')}</p>

        <h2>{translate('aboutMe.skills.title')}</h2>
        <h3>{translate('aboutMe.skills.technical.title')}</h3>
        <ul>
          {technicalSkills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <h3>{translate('aboutMe.skills.soft.title')}</h3>
        <ul>
          {softSkills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AboutMe;
