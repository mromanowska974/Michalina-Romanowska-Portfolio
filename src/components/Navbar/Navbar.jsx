'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

import localFont from 'next/font/local';
import Select from '../Select/select';
import NavLink from '../NavLink/NavLink';

const sacramento = localFont({src: '../../app/fonts/Sacramento-Regular.ttf'})

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
                        <NavLink 
                            href='/secret-door' 
                            name='Admin'
                            isActive={path.startsWith('/secret-door') ? true : false} 
                        />
                    </>
                }
                <NavLink 
                    href='/' 
                    name={translate('mainPage')}
                    isActive={path === '/' ? true : false} 
                />
                <NavLink 
                    href='/about-me' 
                    name={translate('aboutMe')}
                    isActive={path === '/about-me' ? true : false} 
                />
                <NavLink 
                    href='/projects' 
                    name={translate('projects')}
                    isActive={path.startsWith('/projects') ? true : false} 
                />
                <NavLink 
                    href='/contact' 
                    name={translate('contact')}
                    isActive={path === '/contact' ? true : false} 
                />
                <Select 
                    name={'language'} 
                    defaultValue={locale} 
                    onChange={handleChangeLanguage}
                    bgColor={'aqua'}
                    options={[
                        {value: 'pl', description: 'PL'},
                        {value: 'en', description: 'EN'}
                    ]}
                />
            </div>
        </nav>
    );
}

export default Navbar;