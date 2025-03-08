import React from 'react';
import styles from './ImageWrapper.module.css'

function ImageWrapper({width, height}) {
    return (
        <div 
            className={styles.imageWrap}
            style={{
                width: width,
                height: height
            }}
        >
            <img />
        </div>
    );
}

export default ImageWrapper;