import React from 'react';
import styles from './Contact.module.css';
import { Form } from 'react-router-dom';
import ImageWrapper from '../UI/ImageWrapper/ImageWrapper';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const { t: translate } = useTranslation();

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
        <div className={styles.content}>
          <div className={styles.intro}>
            <h1>{translate("contact.title")}</h1>
            <p>
              {translate("contact.text")}
            </p>
          </div>
          <Form>
            <div className={styles.inputBox}>
              <label>{translate('contact.form.fullName')}</label>
              <input/>
            </div>
            <div className={styles.inputBox}>
              <label>E-mail</label>
              <input type='email'/>
            </div>
            <div className={styles.inputBox}>
              <label>{translate('contact.form.yourMessage')}</label>
              <textarea></textarea>
            </div>
            <button>{translate('contact.form.submit')}</button>
          </Form>
        </div>
      </div>
  );
}

export default Contact;
