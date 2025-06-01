'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import ImageWrapper from '../../components/ImageWrapper/ImageWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
import myPhoto from '../my_photo.jpg';
import Title from '../../components/Title/title';
import { useRef } from 'react';

const Contact = () => {
  const translate = useTranslations("contact");
  const [loading, setLoading] = useState(false); 
  const formRef = useRef();

  function handleSendEmail(e){
    e.preventDefault();
    setLoading(true);
    fetch('/api/emails', {
      method: 'POST',
      body: JSON.stringify({
        fullName: e.target.fullName.value,
        email: e.target.email.value,
        message: e.target.message.value
      }),
    }).then(response => response.json())
    .catch(error => error)
    .finally(() => {
      setLoading(false);
      formRef.current.reset();
      alert(translate("form.success"));
    });
  }

  return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ImageWrapper 
            isRound 
            width={'calc(15vh + 15vw)'} 
            height={'calc(15vh + 15vw)'}
            src={myPhoto.src}
          />
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
            <Title>{translate("title")}</Title>
            <p>
              {translate("text")}
            </p>
          </div>
          <form ref={formRef} onSubmit={handleSendEmail} className={styles.form}>
            <Input label={translate('form.fullName')} name='fullName'/>
            <Input label={'E-mail'} name='email'/>
            <Input textarea label={translate('form.yourMessage')} name='message'/>
            { loading ? <p className={styles.loading}>{translate('form.loading')}</p>
              : <Button type='submit' text={translate('form.submit')}/>
            }
          </form>
        </div>
      </div>
  );
}

export default Contact;
