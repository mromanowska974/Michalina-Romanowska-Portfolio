import React from 'react';
import styles from './page.module.css';
import { getRandomQuestion } from '../../lib/questions';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
import { validateAnswer } from '../../lib/action';

async function DefaultAdminPage() {
    const question = getRandomQuestion();
    let errorMessage = null;

    return (
        <div className={styles.container}>
            <h2>{question.question}</h2>
            <form action={async (formData) => {
                'use server';
                return validateAnswer(formData, question);
            }} className={styles.answer}>
                <Input name={'answer'}/>
                <Button text={'Odpowiedz'}/>
            </form>
            <p className={styles.error}>
                {errorMessage && errorMessage} 
            </p>
        </div>
    );
}

export default DefaultAdminPage;