import React from 'react';
import styles from './Contact.module.css';
import { Form } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ImageWrapper from '../UI/ImageWrapper/ImageWrapper';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t: translate } = useTranslation();

  return (
      <div className={styles.container}>
        <ImageWrapper width={'calc(15vh + 15vw)'} height={'calc(15vh + 15vw)'}/>
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
          <div className={styles.linkToLinkedIn}>
            <p>{translate('contact.linkedIn')}</p>
            <a href='https://www.linkedin.com/in/michalina-romanowska-281557227/'>
              <FontAwesomeIcon 
                icon={faLinkedin} 
                color={'white'}
                size={'2x'}
              />
            </a>
          </div>
        </div>
      </div>
  );
}

export default Contact;
