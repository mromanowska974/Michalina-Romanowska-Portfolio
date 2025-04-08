import React from 'react';
import Button from '../../../components/Button/button';
import Input from '../../../components/Input/input';
import styles from './page.module.css';
import { addProject } from '../../../lib/action';

function AddProject() {
    return (
        <form className={styles.form} action={addProject}>
            <Input label={'Nazwa Projektu'} name={'project-name'}/>
            <Input label={'Technologie (oddzielane przecinkiem)'} name={'technologies'}/>
            <Input label={'Link do Aplikacji'} name={'app-link'}/>
            <Input label={'Link do Repozytorium'} name={'repo-link'}/>
            <Input textarea label={'Opis Projektu (polski opis / angielski opis)'} name={'description'}/>

            <Button text={'Dodaj Projekt'}/>
        </form>
    );
}

export default AddProject;