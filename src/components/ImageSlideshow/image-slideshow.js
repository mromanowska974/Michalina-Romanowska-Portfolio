'use client';

import React, { useEffect, useState } from 'react';
import ImageWrapper from '../ImageWrapper/ImageWrapper';
import styles from './image-slideshow.module.css';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import slugify from 'slugify';
import { AnimatePresence, motion } from 'framer-motion';

function ImageSlideshow({ images, project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const t = useTranslations("projects");
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex < images.length - 1 ? prevIndex + 1 : 0
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    function handleClick() {
        router.push(`/projects/${slugify(project.name, {lower: true})}?id=${project.id}&gallery=true`);
    }

    return (
        <button onClick={handleClick} className={styles.slideshow}>
            <AnimatePresence mode='wait'>
                <motion.div
                    className={styles.animatedImage}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5 }}
                    key={images[currentImageIndex].name}
                >
                    <ImageWrapper 
                        src={`/images/${project.name}/${images[currentImageIndex].name}`} 
                        width={'90%'} 
                        height={'90%'}
                    />
                </motion.div>
            </AnimatePresence>
            <motion.p
                whileHover={{ scale: [1, 0.95, 1.05, 1]}}
                transition={{ duration: 0.3 }}
            >
                {t("clickToView")}
            </motion.p>
        </button>
    );
}

export default ImageSlideshow;