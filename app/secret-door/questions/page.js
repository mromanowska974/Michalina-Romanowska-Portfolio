import React from 'react';
import styles from './page.module.css';
import Input from '../../../components/Input/input';
import Button from '../../../components/Button/button';

function page(props) {
    return (
        <div className={styles.container}>
            <h1>Pytania weryfikacyjne</h1>
            <ul>
                <p>Brak pytań weryfikacyjnych</p>
            </ul>
            <div className={styles.newQuestion}>
                <Input label={'Pytanie'}/>
                <Input label={'Odpowiedź'}/>
                <Button text={'Dodaj'} />
            </div>
        </div>
    );
}

export default page;