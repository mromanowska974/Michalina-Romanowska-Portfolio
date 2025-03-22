'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

let cookieLocale = document.cookie
            .split("; ")
            .find(row => row.startsWith("PORTFOLIO_LOCALE="))
            ?.split("=")[1];

const browserLocale = navigator.language.slice(0, 2);

function Navbar(props) {
    const translate = useTranslations('navbar');
    const [locale, setLocale] = useState(cookieLocale || browserLocale);
    const router = useRouter();

    console.log(locale);
    

    function handleChangeLanguage(event){
        const selectedLanguage = event.target.value
        setLocale(selectedLanguage);
        document.cookie = `PORTFOLIO_LOCALE=${selectedLanguage}`;
        router.refresh();
    }

    useEffect(() => {
        if(!cookieLocale){
            setLocale(browserLocale);
            document.cookie = `PORTFOLIO_LOCALE=${browserLocale};`;
            router.refresh();
        }
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
            <Link href='/'>MR</Link>
            </div>
            <div className={styles.btnBox}>
                <Link href='/'>{translate('mainPage')}</Link>
                <Link href='/about-me'>{translate("aboutMe")}</Link>
                <Link href='/projects'>{translate("projects")}</Link>
                <Link href='/contact'>{translate("contact")}</Link>
                <select name='language' defaultValue={locale} onChange={handleChangeLanguage}>
                    <option value={'pl'}>PL</option>
                    <option value={'en'}>EN</option>
                </select>
            </div>
        </nav>
    );
}

export default Navbar;