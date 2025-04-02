import React from 'react';
import Input from '../../components/UI/Input/input';
import styles from './page.module.css';

function AdminPanel() {
    return (
        <form className={styles.form}>
            <Input label={'Nazwa Projektu'} name={'project-name'}/>
            <Input label={'Technologie'} name={'yechnologies'}/>
            <Input label={'Link do Aplikacji'} name={'app-link'}/>
            <Input label={'Link do Repozytorium'} name={'repo-link'}/>
            <Input textarea label={'Opis Projektu'} name={'description'}/>

            <button>Dodaj Projekt</button>
        </form>
    );
}

export default AdminPanel;