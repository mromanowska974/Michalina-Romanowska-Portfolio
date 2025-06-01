'use client';

import React, { useRef, useState } from 'react';
import styles from './gallery-modal.module.css';
import { useRouter } from 'next/navigation';
import slugify from 'slugify';
import ImageWrapper from '../ImageWrapper/ImageWrapper';

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

    return (
        <dialog className={styles.overlay} ref={dialogRef}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.empty}></div>
                    <span className={styles.info}>
                        {currentImageIndex + 1} / {images.length}
                    </span>
                    <button className={styles.closeButton} onClick={handleClose}>
                        X
                    </button>
                </div>
                <div className={styles.content}>
                    <button onClick={handlePreviousImage}> {'<'} </button>
                    <div className={styles.imageWrap}>
                        <ImageWrapper 
                            width={'100%'}
                            height={'100%'}
                            src={`/images/${project.name}/${images[currentImageIndex].name}`} 
                        />
                    </div>
                    <button onClick={handleNextImage}> {'>'} </button>
                </div>
            </div>
        </dialog>
    );
}

export default GalleryModal;