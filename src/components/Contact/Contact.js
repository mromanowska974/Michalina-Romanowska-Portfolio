import React from 'react';
import styles from './Contact.module.css';
import { Form } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ImageWrapper from '../UI/ImageWrapper/ImageWrapper';

const Contact = () => {
  return (
      <div className={styles.container}>
        <ImageWrapper width={'calc(15vh + 15vw)'} height={'calc(15vh + 15vw)'}/>
        <div className={styles.content}>
          <div className={styles.intro}>
            <h1>Contact Me</h1>
            <p>
              Are you interested in inviting me to your team?
              Please let me know. <br/> I look forward to hearing from you.
            </p>
          </div>
          <Form>
            <div className={styles.inputBox}>
              <label>Full Name*</label>
              <input/>
            </div>
            <div className={styles.inputBox}>
              <label>Email*</label>
              <input type='email'/>
            </div>
            <div className={styles.inputBox}>
              <label>Your Message*</label>
              <textarea></textarea>
            </div>
            <button>Submit</button>
          </Form>
          <div className={styles.linkToLinkedIn}>
            <p>You can also visit my LinkedIn profile.</p>
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
