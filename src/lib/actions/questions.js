'use server';

import { redirect } from "next/navigation";
import { saveQuestion, updateQuestion } from "../db/questions";
import { isInvalidText } from "./shared";
import bcrypt from 'bcryptjs';

async function prepareData(formData) {
    const unhashedAnswer = formData.get('answer');
    const question = {
        question: formData.get('question'),
        answer: await bcrypt.hash(unhashedAnswer, 1)
    }

    if (await isInvalidText(question.question) || await isInvalidText(question.answer)) {
        throw new Error('Invalid Input');
    }

    return question;
}

export async function addQuestion(formData) {
    const question = await prepareData(formData);

    saveQuestion(question);
    redirect('/secret-door/questions');
}

export async function editQuestion(id, formData) {
    const question = await prepareData(formData);

    console.log('editQuestion', id, question);

    updateQuestion(id, question);
    redirect('/secret-door/questions');
}
