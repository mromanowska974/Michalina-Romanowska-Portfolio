import React from 'react';
import styles from './ImageWrapper.module.css'
import myPhoto from '../../../app/my_photo.jpg';

function ImageWrapper({width, height}) {
    return (
        <div 
            className={styles.imageWrap}
            style={{
                width: width,
                height: height
            }}
        >
            <img className={styles.myImg} style={{
                width: width,
                height: height
            }} src={myPhoto.src} alt='Me'/>
        </div>
    );
}

export default ImageWrapper;