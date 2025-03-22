'use client';

import React from 'react';
import styles from './page.module.css';
import ImageWrapper from '../../components/UI/ImageWrapper/ImageWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';
import getTextFromFile from '../getTextFromFile';

const Contact = () => {
  const translate = useTranslations("contact");

  async function translateLongText(path) {
    const text = await getTextFromFile(path)
    return text;
  }

  return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ImageWrapper width={'calc(15vh + 15vw)'} height={'calc(15vh + 15vw)'}/>
          <div className={styles.contactInfo}>
            <p>
              <FontAwesomeIcon icon={faEnvelope}/>
              <span>m.romanowska974@gmail.com</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone}/>
              <span>+48 514 326 903</span>
            </p>
          </div>
        </div>

        <hr className={styles.line}/>
        
        <div className={styles.content}>
          <div className={styles.intro}>
            <h1>{translate("title")}</h1>
            <p>
              {translate("text", {
                text: translateLongText('text-files/EN/contact.txt').then(text => text)
              })}
            </p>
          </div>
          <form className={styles.form}>
            <div className={styles.inputBox}>
              <label>{translate('form.fullName')}</label>
              <input/>
            </div>
            <div className={styles.inputBox}>
              <label>E-mail</label>
              <input type='email'/>
            </div>
            <div className={styles.inputBox}>
              <label>{translate('form.yourMessage')}</label>
              <textarea></textarea>
            </div>
            <button type='button'>{translate('form.submit')}</button>
          </form>
        </div>
      </div>
  );
}

export default Contact;
