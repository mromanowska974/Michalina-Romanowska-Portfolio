import React from 'react';
import styles from './page.module.css';
import Scrollable from '../../../components/Scrollable/scrollable';
import { getProjects } from '../../../lib/projects';
import Actions from '../../../components/Actions/actions';

function EditProjects() {
    const projects = getProjects();

    return (
        <div className={styles.container}>
            <h1>Edycja i usuwanie projektów</h1>
            <Scrollable axis={'y'} className={styles.scrollable}>
                <ul>
                    {projects && projects.length > 0 ? projects.map((project) => (
                        <li key={project.id} className={styles.project}>
                            <p>{project.name}</p>
                            <Actions resourceId={project.id} resourceType={'project'}/>
                        </li>
                    )) : <p>Brak projektów</p>}
                </ul>
            </Scrollable>
        </div>
    );
}

export default EditProjects;