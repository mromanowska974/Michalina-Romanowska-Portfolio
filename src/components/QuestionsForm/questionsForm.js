'use client';

import React, { useRef } from 'react';
import Input from '../Input/input';
import Button from '../Button/button';
import styles from './questionsForm.module.css';
import { addQuestion, editQuestion } from '../../lib/actions/questions';
import { useRouter } from 'next/navigation';

function QuestionsForm({ editedQuestion, editIsCanceled }) {
    const questionRef = useRef();
    const router = useRouter();

    const editQuestionWithId = editQuestion.bind(null, editedQuestion.id);

    function handleCancel() {
        setTimeout(() => {
            questionRef.current.reset();
        }, 500);
        router.push('/secret-door/questions');
        editIsCanceled();
    }

    return (
        <form ref={questionRef} action={editedQuestion ? editQuestionWithId : addQuestion} className={styles.newQuestion}>
            <Input 
                name='question' 
                label={'Pytanie'}
                defaultValue={editedQuestion ? editedQuestion.question : ''}
                required
            />
            <Input 
                name='answer' 
                label={'Odpowiedź'}
                required
            />
            <Button type='submit' onClick={handleCancel} text={editedQuestion.id ? 'Edytuj' : 'Dodaj'}/>
            {editedQuestion.id && <Button type='reset' text={'Anuluj'} onClick={handleCancel}/>}
        </form>
    );
}

export default QuestionsForm;