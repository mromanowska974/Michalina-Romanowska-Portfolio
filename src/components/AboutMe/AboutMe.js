import React from 'react';
import styles from './AboutMe.module.css';
import ImageWrapper from '../UI/ImageWrapper/ImageWrapper.jsx';
import { useTranslation } from 'react-i18next';
import Paragraph from '../UI/Paragraph/Paragraph.jsx';
import List from '../UI/List/List.jsx';

function AboutMe() {
  const { t: translate } = useTranslation();

  const softSkills = translate('aboutMe.skills.soft.list');
  const technicalSkills = translate('aboutMe.skills.technical.list');

  const skills = (
    <>
      <List 
        title={translate('aboutMe.skills.technical.title')}
        array={technicalSkills}
      />
      <List 
        title={translate('aboutMe.skills.soft.title')}
        array={softSkills}
      />
    </>
  );

  return (
    <div className={styles.container}>
      <ImageWrapper width={'calc(15vh + 15vw)'} height={'calc(15vh + 15vw)'}/>
      <div className={styles.content}>
        <h1>{translate('aboutMe.title')}</h1>
        <Paragraph 
          title={translate('aboutMe.whoAmI.title')}
          content={translate('aboutMe.whoAmI.description')}
          isFirst
        />
        <Paragraph 
          title={translate('aboutMe.whyIChose.title')}
          content={translate('aboutMe.whyIChose.description')}
        />
        <Paragraph 
          title={translate('aboutMe.whatAmIDoingNow.title')}
          content={translate('aboutMe.whatAmIDoingNow.description')}
        />
        <Paragraph 
          title={translate('aboutMe.skills.title')}
          content={skills}
        />        
      </div>
    </div>
  )
}

export default AboutMe;
