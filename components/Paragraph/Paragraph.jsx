import React from 'react';
import styles from './Paragraph.module.css';

function Paragraph({title, content, isFirst}) {
    return (
        <>
            <hr className={styles.line} hidden={isFirst}/>

            <h2>{title}</h2>
            <div>{content}</div>
        </>
    );
}

export default Paragraph;