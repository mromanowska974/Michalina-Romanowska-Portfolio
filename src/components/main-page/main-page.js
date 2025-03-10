import React from 'react';
import styles from './main-page.module.css';
import '../../fonts/Sacramento-Regular.ttf';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const {t: translate, i18n} = useTranslation();

  function handleChangeLanguage(event){
    const selectedLanguage = event.target.value
    i18n.changeLanguage(selectedLanguage);
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
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
      </div>
      <div className={styles.content}>
        {/* <AnimatedOutlet/> */}
        <Outlet />
      </div>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default MainPage;
