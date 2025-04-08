import React from 'react';
import styles from './project.module.css';
import ImageWrapper from '../ImageWrapper/ImageWrapper.jsx';
import Button from '../Button/button.js';
import Technologies from '../Technologies/technologies.js';
import slugify from 'slugify';
import { useTranslations } from 'next-intl';

function Project({ project }) {
    const technologies = project.technologies.split(',');
    const translate = useTranslations('projects');

    const slug = slugify(project.name, {lower: true})

    return (
        <section className={styles.project}>
            <div className={styles.imageWrap}>
                <ImageWrapper width={'calc(200px)'} height={'100%'}/>
            </div>
            <div className={styles.status}>STATUS</div>
            <Technologies technologies={technologies}/>
            <h2>{ project.name }</h2>
            <p>{ project.description }</p>
            <Button link text={translate('moreBtn')} href={`/projects/${slug}?id=${project.id}`}/>
        </section>
    );
}

export default Project;