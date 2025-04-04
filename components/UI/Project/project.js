import React from 'react';
import styles from './project.module.css';
import ImageWrapper from '../../UI/ImageWrapper/ImageWrapper.jsx';
import Button from '../Button/button.js';
import Technologies from '../Technologies/technologies.js';

function Project({ project }) {
    const technologies = project.technologies.split(',');

    return (
        <section className={styles.project}>
            <ImageWrapper width={'calc(200px)'} height={'calc(250px)'}/>
            <Technologies technologies={technologies}/>
            <h2>{ project.name }</h2>
            <p>{ project.description }</p>
            <Button text={"Więcej"}/>
        </section>
    );
}

export default Project;