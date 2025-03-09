import React, { useState } from 'react';
import styles from './main-page.module.css';
import '../../fonts/Sacramento-Regular.ttf';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const {t: translate, i18n} = useTranslation();

  const [isLanguageSelectOpen, setIsLanguageSelectOpen] = useState(false);
  // const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  function handleOpenSelect(){
    setIsLanguageSelectOpen(true);
  }

  function handleCloseSelect(){
    setIsLanguageSelectOpen(false);
  }

  function handleChangeLanguage(event){
    const selectedLanguage = event.target.value
    i18n.changeLanguage(selectedLanguage);
    // setCurrentLanguage(selectedLanguage);
    setIsLanguageSelectOpen(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to={''}>MR</Link>
        </div>
        <div className={styles.btnBox}>
          <Link to={'about-me'}>{translate("navbar.aboutMe")}</Link>
          <Link to={'projects'}>{translate("navbar.projects")}</Link>
          <Link>CV</Link>
          <Link to={'contact'}>{translate("navbar.contact")}</Link>
          <div className={styles.langSwitch}>
            <label onClick={handleOpenSelect}>{translate("navbar.language")}</label>
            <select name='language' defaultValue={i18n.language} hidden={!isLanguageSelectOpen} onChange={handleChangeLanguage}>
              <option value={'en'}>{translate('lang.en')}</option>
              <option value={'pl'}>{translate('lang.pl')}</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.content} onClick={handleCloseSelect}>
        {/* <AnimatedOutlet/> */}
        <Outlet />
      </div>
    </div>
  );
}

export default MainPage;
