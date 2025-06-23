import React from 'react';
import styles from './project.module.css';
import ImageWrapper from '../ImageWrapper/ImageWrapper.jsx';
import Button from '../Button/button.js';
import Technologies from '../Technologies/technologies.js';
import Scrollable from '../Scrollable/scrollable.js';
import slugify from 'slugify';
import { useTranslations } from 'next-intl';
import { getProjectImages } from '../../lib/db/projects.js';
import { cookies } from 'next/headers.js';

async function Project({ project }) {
    const technologies = project.technologies.split(',');
    const translate = useTranslations('projects');
    const images = getProjectImages(project.id);

    const slug = slugify(project.name, {lower: true});
    const cookieLocale = (await cookies()).get('PORTFOLIO_LOCALE')?.value || 'en';

    return (
        <section className={styles.project}>
            <div className={styles.imageWrap}>
                <ImageWrapper src={`/images/${project.name}/${images[0].name}`} width={'200px'} height={'100%'}/>
            </div>
            <div className={styles.status}>{translate(`status.${project.status}`)}</div>
            <Scrollable 
                axis={'x'} 
                portraitAxis={'x'} 
                className={styles.scrollable}
                scrollbarSize='small'
            >
                <Technologies technologies={technologies}/>
            </Scrollable>
            <h2>{ project.name }</h2>
            <p>{ cookieLocale === 'pl' ? project.descriptionPL : project.descriptionEN }</p>
            <Button link text={translate('moreBtn')} href={`/projects/${slug}?id=${project.id}`}/>
        </section>
    );
}

export default Project;