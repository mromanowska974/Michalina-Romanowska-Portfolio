'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

import localFont from 'next/font/local';

const sacramento = localFont({src: '../../../app/fonts/Sacramento-Regular.ttf'})

let cookieLocale = document.cookie
            .split("; ")
            .find(row => row.startsWith("PORTFOLIO_LOCALE="))
            ?.split("=")[1];

const browserLocale = navigator.language.slice(0, 2);

function Navbar(props) {
    const translate = useTranslations('navbar');
    const [locale, setLocale] = useState(cookieLocale || browserLocale);
    const path = usePathname();
    const router = useRouter();

    console.log(path);
    

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
            <Link href='/' className={sacramento.className}>MR</Link>
            </div>
            <div className={styles.btnBox}>
                {
                    path.startsWith('/secret-door') && <>
                        <Link href='/secret-door/admin'>
                            <p className={path ==='/secret-door/admin' ? styles.active : undefined}>
                                Admin
                            </p>
                        </Link>
                        <Link href='/secret-door'>
                            <p className={path ==='/secret-door' ? styles.active : undefined}>
                                Dodaj Projekt
                            </p>
                        </Link>
                    </>
                }
                <Link href='/'>
                    <p className={path ==='/' ? styles.active : undefined}>
                        {translate('mainPage')}
                    </p>
                </Link>
                <Link href='/about-me'>
                    <p className={path ==='/about-me' ? styles.active : undefined}>
                        {translate("aboutMe")}
                    </p>
                </Link>
                <Link href='/projects'>
                    <p className={path ==='/projects' ? styles.active : undefined}>
                        {translate("projects")}
                    </p>
                </Link>
                <Link href='/contact'>
                    <p className={path ==='/contact' ? styles.active : undefined}>
                        {translate("contact")}
                    </p>
                </Link>
                <select name='language' defaultValue={locale} onChange={handleChangeLanguage}>
                    <option value={'pl'}>PL</option>
                    <option value={'en'}>EN</option>
                </select>
            </div>
        </nav>
    );
}

export default Navbar;