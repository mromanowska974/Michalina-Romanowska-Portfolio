import React from 'react';
import Button from '../../../components/Button/button';
import Input from '../../../components/Input/input';
import styles from './page.module.css';
import { addProject } from '../../../lib/action';
import Scrollable from '../../../components/Scrollable/scrollable';
import Select from '../../../components/Select/select';

function AddProject() {
    return (
        <form className={styles.form} action={addProject}>
            <Scrollable axis={'y'} className={styles.scrollable}>
                <Input label={'Nazwa Projektu'} name={'project-name'}/>
                <Input label={'Technologie (oddzielane przecinkiem)'} name={'technologies'}/>
                <Input label={'Link do Aplikacji'} name={'app-link'}/>
                <Input label={'Link do Repozytorium'} name={'repo-link'}/>
                <Input textarea label={'Opis Projektu (PL)'} name={'descriptionPL'}/>
                <Input textarea label={'Opis Projektu (EN)'} name={'descriptionEN'}/>
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

            <Button text={'Dodaj Projekt'}/>
        </form>
    );
}

export default AddProject;