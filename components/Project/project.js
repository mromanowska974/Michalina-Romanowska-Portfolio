import React from 'react';
import styles from './project.module.css';
import ImageWrapper from '../ImageWrapper/ImageWrapper.jsx';
import Button from '../Button/button.js';
import Technologies from '../Technologies/technologies.js';
import slugify from 'slugify';

function Project({ project }) {
    const technologies = project.technologies.split(',');

    const slug = slugify(project.name, {lower: true})

    return (
        <section className={styles.project}>
            <ImageWrapper width={'calc(200px)'} height={'calc(250px)'}/>
            <div className={styles.status}>W trakcie pracy</div>
            <Technologies technologies={technologies}/>
            <h2>{ project.name }</h2>
            <p>{ project.description }</p>
            <Button link text={"Więcej"} href={`/projects/${slug}?id=${project.id}`}/>
        </section>
    );
}

export default Project;