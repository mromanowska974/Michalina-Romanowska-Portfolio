import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer(props) {
    return (
        <footer>
            <p>© 2025 Michalina Romanowska</p>
            <div className={styles.websites}>
                <a>
                    <FontAwesomeIcon 
                        icon={faLinkedin}
                        size='2x'
                    />
                </a>
                <a>
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