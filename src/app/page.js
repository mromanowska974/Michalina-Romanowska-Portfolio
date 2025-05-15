'use client';

import { useTranslations } from 'next-intl';
import ImageWrapper from '../components/ImageWrapper/ImageWrapper';
import styles from './page.module.css';
import myPhoto from './my_photo.jpg';

import localFont from 'next/font/local';

const sacramento = localFont({src: './fonts/Sacramento-Regular.ttf'})

export default function HomePage() {
    const t = useTranslations("home");

    return (
        <div className={styles.container}>
            <ImageWrapper 
                isRound 
                width={'calc(20vh + 20vw)'} 
                height={'calc(20vh + 20vw)'}
                src={myPhoto.src}
            />
            <div className={styles.introduction}>
                <h1 className={sacramento.className}>Michalina Romanowska</h1>
                <p>
                    {t("introText")}
                </p>
            </div>
        </div>
    );
}