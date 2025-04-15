'use client';

import React from 'react';
import styles from './actions.module.css';
import { deleteResource } from '../../lib/action';

function Actions({resourceId, resourceType}) {
    function handleDelete(){
        const isSure = window.confirm('Czy na pewno chcesz usunąć ten element?');

        if(isSure){
            deleteResource(resourceId, resourceType);
        }
    }

    return (
        <div className={styles.btnBox}>
            <button>Edytuj</button>
            <button onClick={() => handleDelete()}>Usuń</button>
        </div>
    );
}

export default Actions;