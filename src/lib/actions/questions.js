'use server';

import { redirect } from "next/navigation";
import { saveQuestion } from "../db/questions";
import { isInvalidText } from "./shared";
import bcrypt from 'bcryptjs';

export async function addQuestion(formData) {
    const unhashedAnswer = formData.get('answer');
    const question = {
        question: formData.get('question'),
        answer: await bcrypt.hash(unhashedAnswer, 1)
    }

    if (isInvalidText(question.question) || isInvalidText(question.answer)) {
        throw new Error('Invalid Input');
    }

    saveQuestion(question);
    redirect('/secret-door/questions');
}
