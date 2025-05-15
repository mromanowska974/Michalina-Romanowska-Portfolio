'use client';

import React from 'react';
import styles from './page.module.css';
import ImageWrapper from '../../components/ImageWrapper/ImageWrapper.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import List from '../../components/List/List.jsx';
import { useMessages, useTranslations } from 'next-intl';
import myPhoto from '../my_photo.jpg';
import Title from '../../components/Title/title.js';
import Scrollable from '../../components/Scrollable/scrollable.js';

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
      <ImageWrapper 
        isRound 
        width={'calc(15vh + 15vw)'} 
        height={'calc(15vh + 15vw)'}
        src={myPhoto.src}
      />
      <Scrollable className={styles.content} axis={'y'}>
        <Title>{translate('title')}</Title>
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
      </Scrollable>
    </div>
  )
}

export default AboutMe;
