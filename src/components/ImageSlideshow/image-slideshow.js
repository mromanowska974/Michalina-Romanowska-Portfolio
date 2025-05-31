'use client';

import React, { useEffect, useState } from 'react';
import ImageWrapper from '../ImageWrapper/ImageWrapper';
import styles from './image-slideshow.module.css';

function ImageSlideshow({ images, projectName }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex < images.length - 1 ? prevIndex + 1 : 0
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.slideshow}>
            <ImageWrapper 
                src={`/images/${projectName}/${images[currentImageIndex].name}`} 
                width={'100%'} 
                height={'100%'}
            />
        </div>
    );
}

export default ImageSlideshow;