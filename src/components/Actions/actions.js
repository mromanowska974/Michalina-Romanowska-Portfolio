'use client';

import React from 'react';
import styles from './actions.module.css';
import { deleteResource } from '../../lib/actions/shared';
import { useRouter } from 'next/navigation';

function Actions({resourceId, resourceType}) {
    const router = useRouter();

    function handleDelete(){
        const isSure = window.confirm('Czy na pewno chcesz usunąć ten element?');

        if(isSure){
            deleteResource(resourceId, resourceType);
        }
    }

    function handleEdit(){
        if (resourceType === 'question') {
            router.push(`/secret-door/questions?id=${resourceId}`);
        } else {
            router.push(`/secret-door/edit-project?id=${resourceId}`);
        }
    }

    return (
        <div className={styles.btnBox}>
            <button onClick={handleEdit}>Edytuj</button>
            <button onClick={handleDelete}>Usuń</button>
        </div>
    );
}

export default Actions;