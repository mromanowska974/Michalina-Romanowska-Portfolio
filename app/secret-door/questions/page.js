import React from 'react';
import styles from './page.module.css';
import Input from '../../../components/Input/input';
import Button from '../../../components/Button/button';
import Scrollable from '../../../components/Scrollable/scrollable';
import { addQuestion } from '../../../lib/action';
import { getQuestions } from '../../../lib/questions';
import Actions from '../../../components/Actions/actions';

function Questions() {
    let questions = getQuestions();
    
    return (
        <div className={styles.container}>
            <h1>Pytania weryfikacyjne</h1>
            <Scrollable axis={'y'} className={styles.scrollable}>
                <ul>
                    {questions && questions.length > 0 ? questions.map((question) => (
                        <li key={question.id} className={styles.question}>
                            <p>{question.question}</p>
                            <Actions resourceId={question.id} resourceType={'question'}/>
                        </li>
                    )) : <p>Brak pytań weryfikacyjnych</p>}
                </ul>
            </Scrollable>
            <form action={addQuestion} className={styles.newQuestion}>
                <Input name='question' label={'Pytanie'}/>
                <Input name='answer' label={'Odpowiedź'}/>
                <Button type='submit' text={'Dodaj'}/>
            </form>
        </div>
    );
}

export default Questions;