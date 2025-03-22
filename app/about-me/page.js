'use client';

import React from 'react';
import styles from './page.module.css';
import ImageWrapper from '../../components/UI/ImageWrapper/ImageWrapper.jsx';
import Paragraph from '../../components/UI/Paragraph/Paragraph.jsx';
import List from '../../components/UI/List/List.jsx';
import { useMessages, useTranslations } from 'next-intl';

function AboutMe() {
  const translate = useTranslations("aboutMe");
  const messages = useMessages();

  const softSkills = Object.keys(messages.aboutMe.skills.soft.list);
  const technicalSkills = Object.keys(messages.aboutMe.skills.technical.list);

  const skills = (
    <>
      <List 
        toTranslate={'skills.technical'}
        keys={technicalSkills}
      />
      <List 
        toTranslate={'skills.soft'}
        keys={softSkills}
      />
    </>
  );

  return (
    <div className={styles.container}>
      <ImageWrapper width={'calc(15vh + 15vw)'} height={'calc(15vh + 15vw)'}/>
      <div className={styles.content}>
        <h1>{translate('title')}</h1>
        <Paragraph 
          title={translate('whoAmI.title')}
          content={translate('whoAmI.description')}
          isFirst
        />
        <Paragraph 
          title={translate('whyIChose.title')}
          content={translate('whyIChose.description')}
        />
        <Paragraph 
          title={translate('whatAmIDoingNow.title')}
          content={translate('whatAmIDoingNow.description')}
        />
        <Paragraph 
          title={translate('skills.title')}
          content={skills}
        />        
      </div>
    </div>
  )
}

export default AboutMe;
