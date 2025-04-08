import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2025 Michalina Romanowska</p>
            <div className={styles.websites}>
                <a href='https://www.linkedin.com/in/michalina-romanowska-281557227/'>
                    <FontAwesomeIcon 
                        icon={faLinkedin}
                        size='2x'
                    />
                </a>
                <a href='https://github.com/mromanowska974'>
                    <FontAwesomeIcon 
                        icon={faGithub}
                        size='2x'
                    />
                </a>
            </div>
        </footer>
    );
}

export default Footer;