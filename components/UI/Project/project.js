import React from 'react';
import styles from './project.module.css';
import ImageWrapper from '../../UI/ImageWrapper/ImageWrapper.jsx';
import Button from '../Button/button.js';

function Project(props) {
    return (
        <section className={styles.project}>
            <ImageWrapper width={'calc(200px)'} height={'calc(250px)'}/>
            <h2>Smart CoinBook</h2>
            <p>Lorem ipsum blablabla lulu lulul uuulul nenenene nenenen gugugugugbdbdbdbd</p>
            <Button text={"Zobacz"}/>
        </section>
    );
}

export default Project;