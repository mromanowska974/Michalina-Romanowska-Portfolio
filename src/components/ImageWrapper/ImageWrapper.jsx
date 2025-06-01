import React from 'react';
import styles from './ImageWrapper.module.css'

function ImageWrapper({width, height, isRound, src}) {
    return (
        <div 
            className={`${styles.imageWrap} ${isRound ? styles.isRound : undefined}`}
            style={{
                width: width,
                height: height
            }}
        >
            <img className={styles.myImg} style={{
                width: '100%',
                height: '100%',
            }} src={src} alt='Something'/>
        </div>
    );
}

export default ImageWrapper;