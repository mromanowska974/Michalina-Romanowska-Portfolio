'use client';

import React, { useRef, useState } from 'react';
import styles from './gallery-modal.module.css';
import { useRouter } from 'next/navigation';
import slugify from 'slugify';
import ImageWrapper from '../ImageWrapper/ImageWrapper';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

function GalleryModal({ images, project }) {
    const dialogRef = useRef();
    const router = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function handleClose() {
        const dialog = dialogRef.current;
        if (dialog) {
            dialog.close();
            router.push(`/projects/${slugify(project.name, { lower: true })}?id=${project.id}`);
        }
    }

    function handlePreviousImage() {
        setCurrentImageIndex((prevIndex) => 
            prevIndex > 0 ? prevIndex - 1 : images.length - 1
        );
    }

    function handleNextImage() {
        setCurrentImageIndex((prevIndex) => 
            prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
    }

    return createPortal(
        <motion.dialog 
            className={styles.overlay} 
            ref={dialogRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div 
                className={styles.container}
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                exit={{ y: 30 }}
                transition={{ duration: 0.5 }}
            >
                <div className={styles.row}>
                    <div className={styles.empty}></div>
                    <span className={styles.info}>
                        {currentImageIndex + 1} / {images.length}
                    </span>
                    <motion.button 
                        className={styles.closeButton} 
                        onClick={handleClose}
                        whileHover={{ scale: [1, 0.9, 1.1, 1 ]}}
                        transition={{ duration: 0.5 }}
                    >
                        X
                    </motion.button>
                </div>
                <div className={styles.content}>
                    <motion.button 
                        onClick={handlePreviousImage}
                        whileHover={{ scale: [1, 0.9, 1.1, 1 ]}}
                        transition={{ duration: 0.5 }}
                    > {'<'} </motion.button>
                    <AnimatePresence mode='wait'>
                        <motion.div 
                            className={styles.imageWrap}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            key={images[currentImageIndex].name}
                        >
                            <ImageWrapper 
                                width={'100%'}
                                height={'100%'}
                                src={`/images/${project.name}/${images[currentImageIndex].name}`} 
                            />
                        </motion.div>
                    </AnimatePresence>
                    <motion.button 
                        onClick={handleNextImage}
                        whileHover={{ scale: [1, 0.9, 1.1, 1 ]}}
                        transition={{ duration: 0.5 }}
                    > {'>'} </motion.button>
                </div>
            </motion.div>
        </motion.dialog>,
        document.getElementById('modal')
    );
}

export default GalleryModal;