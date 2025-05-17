import React from 'react';
import styles from './page.module.css';
import { getRandomQuestion } from '../../lib/db/questions';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
import { validateAnswer } from '../../lib/actions/shared';

async function DefaultAdminPage() {
    const question = getRandomQuestion();
    let errorMessage = null;

    const validatedAnswer = validateAnswer.bind(null, question);

    return (
        <div className={styles.container}>
            <h2>{question.question}</h2>
            <form action={validatedAnswer} className={styles.answer}>
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