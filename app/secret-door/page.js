import React from 'react';
import Button from '../../components/UI/Button/button';
import Input from '../../components/UI/Input/input';
import styles from './page.module.css';
import { addProject } from '../../lib/action';

function AdminPanel() {
    return (
        <form className={styles.form} action={addProject}>
            <Input label={'Nazwa Projektu'} name={'project-name'}/>
            <Input label={'Technologie'} name={'technologies'}/>
            <Input label={'Link do Aplikacji'} name={'app-link'}/>
            <Input label={'Link do Repozytorium'} name={'repo-link'}/>
            <Input textarea label={'Opis Projektu'} name={'description'}/>

            <Button text={'Dodaj Projekt'}/>
        </form>
    );
}

export default AdminPanel;