import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    const {t: translate, i18n} = useTranslation();

    function handleChangeLanguage(event){
        const selectedLanguage = event.target.value
        i18n.changeLanguage(selectedLanguage);
    }

    return (
        <nav>
            <div className={styles.logo}>
            <Link to={''}>MR</Link>
            </div>
            <div className={styles.btnBox}>
            <Link to={''}>{translate('navbar.mainPage')}</Link>
            <Link to={'about-me'}>{translate("navbar.aboutMe")}</Link>
            <Link to={'projects'}>{translate("navbar.projects")}</Link>
            <Link to={'contact'}>{translate("navbar.contact")}</Link>
            <select name='language' defaultValue={i18n.language} onChange={handleChangeLanguage}>
                <option value={'en'}>EN</option>
                <option value={'pl'}>PL</option>
            </select>
            </div>
        </nav>
    );
}

export default Navbar;