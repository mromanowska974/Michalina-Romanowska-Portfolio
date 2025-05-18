import React from 'react';
import Button from '../Button/button';
import Input from '../Input/input';
import styles from './addOrEditProjectForm.module.css';
import { addProject, updateProject } from '../../lib/actions/projects';
import Scrollable from '../Scrollable/scrollable';
import Select from '../Select/select';

function AddOrEditProjectForm({editedProject = null}) {
    return (
        <form 
            className={styles.form} 
            action={editedProject ? updateProject.bind(null, editedProject.id) : addProject}
        >
            <Scrollable axis={'y'} className={styles.scrollable}>
                <Input 
                    label={'Nazwa Projektu'} 
                    name={'project-name'} 
                    defaultValue={editedProject ? editedProject.name : undefined}
                />
                <Input 
                    label={'Technologie (oddzielane przecinkiem)'} 
                    name={'technologies'}
                    defaultValue={editedProject ? editedProject.technologies : undefined}
                />
                <Input 
                    label={'Link do Aplikacji'} 
                    name={'app-link'}
                    defaultValue={editedProject ? editedProject.app_link : undefined}
                />
                <Input 
                    label={'Link do Repozytorium'} 
                    name={'repo-link'}
                    defaultValue={editedProject ? editedProject.repo_link : undefined}
                />
                <Input 
                    textarea 
                    label={'Opis Projektu (PL)'} 
                    name={'descriptionPL'}
                    defaultValue={editedProject ? editedProject.descriptionPL : undefined}
                />
                <Input 
                    textarea 
                    label={'Opis Projektu (EN)'} 
                    name={'descriptionEN'}
                    defaultValue={editedProject ? editedProject.descriptionEN : undefined}
                />
                <Input 
                    label={'Zdjęcia'} 
                    name={'images'} 
                    type='file'
                    accept='image/png, image/jpeg' 
                    multiple
                />
                <div className={styles.statusSelect}>
                    <label>Status Projektu</label>
                    <Select 
                        name={'status'} 
                        bgColor={'violet'}
                        options={[
                            {value: 'completed', description: 'Ukończony'},
                            {value: 'stillInProgress', description: 'Jeszcze pracuję'},
                        ]}
                    />
                </div>
            </Scrollable>

            <Button text={editedProject ? 'Edytuj Projekt' : 'Dodaj Projekt'}/>
        </form>
    );
}

export default AddOrEditProjectForm;