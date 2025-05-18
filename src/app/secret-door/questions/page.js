import React from 'react';
import styles from './page.module.css';
import Scrollable from '../../../components/Scrollable/scrollable';
import { getQuestions } from '../../../lib/db/questions';
import Actions from '../../../components/Actions/actions';
import QuestionsForm from '../../../components/QuestionsForm/questionsForm';

async function Questions({searchParams}) {
    let questions = getQuestions();
    const { id } = searchParams;
    let editedQuestion = {};

    if(id) {
        editedQuestion = questions.find((question) => question.id === +id);
    }

    async function handleEditCancel() {
        'use server';
        if (editedQuestion) editedQuestion = {};
    }

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
            <QuestionsForm editedQuestion={editedQuestion ? editedQuestion : null} editIsCanceled={
                async () => {
                    'use server';
                    await handleEditCancel();
                }
            }/>
        </div>
    );
}

export default Questions;